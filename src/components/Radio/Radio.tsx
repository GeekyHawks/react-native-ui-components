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
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { useRadioGroupContext } from "./RadioContext";
import { SelectionControl } from "../../base/SelectionControl/SelectionControl";
import { DefaultRadioColors, DefaultRadioSizes, useTheme } from "../../theme";

/**
 * Props for the Radio component
 *
 * - **accessibilityLabel**: Accessibility label for screen readers
 * - **color**: theme-based or custom color variant name.
 * - **containerStyle**: optional override style for the outer container.
 * - **disabled**: disables user interaction and visually reduces opacity.
 * - **label**: optional text label displayed alongside the radio button.
 * - **labelTextStyle**: optional override style for the label text.
 * - **onChange**: callback triggered when the radio button is selected.
 * - **selectedValue**: currently selected value; used to determine selection state.
 * - **size**: theme-based or custom size variant name.
 * - **value**: unique value associated with this radio button.
 */
export interface Props {
    /** Accessibility label for screen readers */
    accessibilityLabel?: string;
    /** Theme-based or custom color variant name */
    color?: DefaultRadioColors | (string & {});
    /** Optional override style for the container */
    containerStyle?: StyleProp<ViewStyle>;
    /** Disable interaction and reduce opacity */
    disabled?: boolean;
    /** Optional text label displayed with the radio button */
    label?: string;
    /** Optional override style for the label text */
    labelTextStyle?: StyleProp<TextStyle>;
    /**
     * Callback triggered when the radio button is selected.
     * Receives the `value` of this radio.
     */
    onChange?: (value: string | number) => void;
    /**
     * Currently selected value.
     * Should match this radio’s `value` to mark it as selected.
     */
    selectedValue?: string | number;
    /** Theme-based or custom size variant name */
    size?: DefaultRadioSizes | (string & {});
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
    accessibilityLabel,
    color = "primary",
    containerStyle,
    disabled,
    label,
    labelTextStyle,
    onChange,
    selectedValue,
    size = "md",
    value,
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
            accessibilityLabel={accessibilityLabel ?? label}
            color={color}
            colorVariants={radioColorVariants}
            containerStyle={containerStyle}
            disabled={disabled}
            label={label}
            labelTextStyle={labelTextStyle}
            onPress={handlePress}
            selected={isSelected}
            shape="circle"
            size={size}
            sizeVariants={radioSizeVariants}
            theme={theme}
        />
    );
};

export default Radio;
