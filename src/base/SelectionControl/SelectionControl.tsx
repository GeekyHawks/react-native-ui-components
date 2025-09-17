/**
 * SelectionControl
 *
 * A base component for selection-based UI controls such as Radio, Checkbox, and Switch.
 * - Supports theme-based size and color variants for consistent styling.
 * - Provides shape flexibility (`circle`, `square`, `switch`) to adapt to different control types.
 * - Handles selected, disabled, and label states with built-in styling logic.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React from "react";
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";
import { Text } from "../../components";
import {
    DefaultSelectionControlColors, DefaultSelectionControlSizes, SelectionControlColorVariants,
    SelectionControlSizeVariants
} from "./SelectionControlVariants";
import { Theme } from "../../theme";
import { resolveThemeColor } from "../../theme/utils/resolveThemeColor";

/**
 * Props for the base SelectionControl component
 *
 * - **color**: theme-based or custom color variant name.
 * - **colorVariants**: collection of color variant styles, injected from parent (Radio, Checkbox, Switch).
 * - **disabled**: disables user interaction and visually reduces opacity.
 * - **label**: optional text label displayed alongside the control.
 * - **onPress**: callback triggered when the control is pressed.
 * - **selected**: indicates whether the control is currently selected.
 * - **shape**: visual shape of the control (`circle`, `square`, `switch`).
 * - **size**: theme-based or custom size variant name.
 * - **sizeVariants**: collection of size variant styles, injected from parent (Radio, Checkbox, Switch).
 * - **style**: optional override style for the outer container.
 * - **theme**: full theme object for resolving colors.
 */
export interface SelectionControlProps {
    /** Theme-based or custom color variant name */
    color?: DefaultSelectionControlColors | (string & {});
    /** Collection of color variant styles */
    colorVariants: SelectionControlColorVariants;
    /** Disable interaction and reduce opacity */
    disabled?: boolean;
    /** Optional text label displayed with the control */
    label?: string;
    /** Callback when the control is pressed */
    onPress: () => void;
    /** Whether the control is currently selected */
    selected: boolean;
    /** Shape of the control (`circle`, `square`, `switch`) */
    shape?: "circle" | "square" | "switch";
    /** Theme-based or custom size variant name */
    size?: DefaultSelectionControlSizes | (string & {});
    /** Collection of size variant styles */
    sizeVariants: SelectionControlSizeVariants;
    /** Optional override style for the container */
    style?: StyleProp<ViewStyle>;
    /** Full theme object for resolving colors */
    theme: Theme;
}

/**
 * SelectionControl
 *
 * Renders a themed base control used by Radio, Checkbox, and Switch.
 * - Visual shape: supports `circle`, `square`, and `switch`.
 * - Selection state: toggles between selected and unselected.
 * - Label: optional text displayed next to the control.
 *
 * Uses `resolveThemeColor` to map theme tokens (e.g., `primary`, `onPrimary`)
 * into actual color values from the active theme.  
 * Variants for size and color are passed in by parent components
 * (e.g., Radio passes `radioSizeVariants` and `radioColorVariants`).
 */
export const SelectionControl: React.FC<SelectionControlProps> = ({
    selected,
    onPress,
    disabled,
    label,
    shape = "circle",
    style,
    size = "md",
    color = "primary",
    sizeVariants,
    colorVariants,
    theme,
}) => {
    const sizeVariant = sizeVariants[size] || sizeVariants.md;
    const colorVariant = colorVariants[color] || colorVariants.primary;

    const borderColor = resolveThemeColor(colorVariant.borderColor, theme);
    const backgroundColor = resolveThemeColor(colorVariant.backgroundColor, theme);
    const indicatorColor = resolveThemeColor(colorVariant.indicatorColor, theme);

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={[{ flexDirection: "row", alignItems: "center" }, style]}
        >
            <View
                style={[
                    {
                        ...sizeVariant.container,
                        borderRadius:
                            shape === "circle" && typeof sizeVariant.container.width === "number"
                                ? sizeVariant.container.width / 2
                                : 4,
                        borderWidth: 2,
                        borderColor,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor,
                    },
                    disabled && { opacity: 0.4 },
                ]}
            >
                {selected && (
                    <View
                        style={{
                            ...sizeVariant.indicator,
                            borderRadius:
                                shape === "circle" && typeof sizeVariant.indicator.width === "number"
                                    ? sizeVariant.indicator.width / 2
                                    : 2,
                            backgroundColor: indicatorColor,
                        }}
                    />
                )}
            </View>
            {label && <Text style={{ marginLeft: 8 }}>{label}</Text>}
        </TouchableOpacity>
    );
};
