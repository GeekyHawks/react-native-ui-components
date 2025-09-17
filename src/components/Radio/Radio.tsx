/**
 * Radio
 *
 * A single radio button component built on top of the `SelectionControl` base.
 * - Shape: fixed to `circle` for radio button semantics.
 * - Selection state: determined by either a `RadioGroup` context
 *   or a standalone `selectedValue` prop.
 * - Label: optional text displayed next to the radio button.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React from "react";
import { useRadioGroupContext } from "./RadioContext";
import { SelectionControl } from "../../base/SelectionControl/SelectionControl";
import { DefaultRadioColors, DefaultRadioSizes, useTheme } from "../../theme";

/**
 * Props for the Radio component
 *
 * - **color**: theme-based or custom color variant name.
 * - **disabled**: disables user interaction and visually reduces opacity.
 * - **label**: optional text label displayed alongside the radio button.
 * - **onChange**: callback triggered when the radio button is selected.
 * - **size**: theme-based or custom size variant name.
 * - **selectedValue**: currently selected value; used to determine selection state.
 * - **value**: unique value associated with this radio button.
 */
export interface Props {
    /** Theme-based or custom color variant name */
    color?: DefaultRadioColors | (string & {});
    /** Disable interaction and reduce opacity */
    disabled?: boolean;
    /** Optional text label displayed with the radio button */
    label?: string;
    /**
     * Callback triggered when the radio button is selected.
     * Receives the `value` of this radio.
     */
    onChange?: (value: string | number) => void;
    /** Theme-based or custom size variant name */
    size?: DefaultRadioSizes | (string & {});
    /**
     * Currently selected value.
     * Should match this radio’s `value` to mark it as selected.
     */
    selectedValue?: string | number;
    /** Unique value associated with this radio button */
    value: string | number;
}

/**
 * Radio
 *
 * Renders a themed radio button for single-choice selection.
 * - Integrates with `RadioGroup` for group selection behavior.
 * - Can be used standalone with `selectedValue` and `onChange`.
 * - Uses size and color variants (`radioSizeVariants`, `radioColorVariants`)
 *   provided by the active theme for consistent styling.
 *
 * Built on the `SelectionControl` base component with `circle` shape.
 */
const Radio: React.FC<Props> = ({
    value,
    label,
    selectedValue,
    onChange,
    disabled,
    size = "md",
    color = "primary",
}) => {
    const { theme, radioSizeVariants, radioColorVariants } = useTheme();
    const group = useRadioGroupContext();

    const isSelected =
        group?.selectedValue !== undefined ? group.selectedValue === value : selectedValue === value;

    const handlePress = () => {
        if (group?.onValueChange) group.onValueChange(value);
        else if (onChange) onChange(value);
    };

    return (
        <SelectionControl
            selected={isSelected}
            onPress={handlePress}
            disabled={disabled}
            label={label}
            shape="circle"
            size={size}
            color={color}
            sizeVariants={radioSizeVariants}
            colorVariants={radioColorVariants}
            theme={theme}
        />
    );
};

export default Radio;
