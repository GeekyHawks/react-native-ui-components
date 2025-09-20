/**
 * CheckBox
 *
 * A single checkbox component built on top of the `SelectionControl` base.
 * - Shape: fixed to `square` for checkbox semantics.
 * - Selection state: determined by either a `CheckBoxGroup` context
 *   or a standalone `selectedValues` prop.
 * - Label: optional text displayed next to the checkbox.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { useCheckBoxGroupContext } from "./CheckBoxContext";
import { SelectionControl } from "../../base/SelectionControl/SelectionControl";
import { DefaultCheckBoxColors, DefaultCheckBoxSizes, useTheme } from "../../theme";

/**
 * Props for the CheckBox component
 *
 * - **accessibilityLabel**: Accessibility label for screen readers
 * - **color**: theme-based or custom color variant name.
 * - **containerStyle**: optional override style for the outer container.
 * - **disabled**: disables user interaction and visually reduces opacity.
 * - **label**: optional text label displayed alongside the checkbox.
 * - **labelTextStyle**: optional override style for the label text.
 * - **onChange**: callback triggered when the checkbox is toggled.
 * - **selectedValues**: array of currently selected values (for standalone use).
 * - **size**: theme-based or custom size variant name.
 * - **value**: unique value associated with this checkbox.
 */
export interface Props {
    /** Accessibility label for screen readers */
    accessibilityLabel?: string;
    /** Theme-based or custom color variant name */
    color?: DefaultCheckBoxColors | (string & {});
    /** Optional override style for the outer container */
    containerStyle?: StyleProp<ViewStyle>;
    /** Disable interaction and reduce opacity */
    disabled?: boolean;
    /** Optional text label displayed with the checkbox */
    label?: string;
    /** Optional override style for the label text */
    labelTextStyle?: StyleProp<TextStyle>;
    /**
     * Callback triggered when the checkbox is toggled.
     * Receives the `value` of this checkbox and the new checked state.
     */
    onChange?: (value: string | number, checked: boolean) => void;
    /**
     * Array of currently selected values.
     * Used for standalone checkbox usage.
     */
    selectedValues?: Array<string | number>;
    /** Theme-based or custom size variant name */
    size?: DefaultCheckBoxSizes | (string & {});
    /** Unique value associated with this checkbox */
    value: string | number;
}

/**
 * CheckBox
 *
 * Renders a themed checkbox for multiple-choice selection.
 * - Integrates with `CheckBoxGroup` for grouped selection behavior.
 * - Can be used standalone with `selectedValues` and `onChange`.
 * - Uses size and color variants (`checkBoxSizeVariants`, `checkBoxColorVariants`)
 *   provided by the active theme for consistent styling.
 *
 * Built on the `SelectionControl` base component with `square` shape.
 */
const CheckBox: React.FC<Props> = ({
    accessibilityLabel,
    color = "primary",
    containerStyle,
    disabled,
    label,
    labelTextStyle,
    onChange,
    selectedValues,
    size = "md",
    value,
}) => {
    const { theme, checkBoxSizeVariants, checkBoxColorVariants } = useTheme();
    const group = useCheckBoxGroupContext();

    const isSelected = group
        ? group.selectedValues.includes(value)
        : selectedValues?.includes(value) ?? false;

    const handlePress = () => {
        if (group?.onValueChange) {
            const newValues = isSelected
                ? group.selectedValues.filter((v) => v !== value)
                : [...group.selectedValues, value];
            group.onValueChange(newValues);
        } else if (onChange) {
            onChange(value, !isSelected);
        }
    };

    return (
        <SelectionControl
            accessibilityLabel={accessibilityLabel ?? label}
            color={color}
            colorVariants={checkBoxColorVariants}
            containerStyle={containerStyle}
            disabled={disabled}
            label={label}
            labelTextStyle={labelTextStyle}
            onPress={handlePress}
            selected={isSelected}
            shape="square"
            size={size}
            sizeVariants={checkBoxSizeVariants}
            theme={theme}
        />
    );
};

export default CheckBox;
