/**
 * Switch
 *
 * A themed wrapper around React Native's `Switch` component.
 * - Supports theme-based color variants for track and thumb.
 * - Optional label displayed to the right of the switch.
 * - Handles disabled state and toggling behavior.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React from "react";
import { View, Switch as RNSwitch, StyleProp, ViewStyle, TextStyle, ColorValue } from "react-native";
import { DefaultSwitchColors, SwitchColorVariants, useTheme } from "../../theme";
import { resolveThemeColor } from "../../theme/utils/resolveThemeColor";
import { Text } from "../Text";

/**
 * Props for the Switch component
 *
 * - **accessibilityLabel**: Accessibility label for screen readers
 * - **color**: theme-based or custom color variant name.
 * - **colorVariants**: optional collection of color variant styles, injected from parent if needed.
 * - **containerStyle**: optional style for the outer container.
 * - **disabled**: disables user interaction and reduces opacity.
 * - **label**: optional text label displayed next to the switch.
 * - **labelTextStyle**: optional override style for the label text.
 * - **onValueChange**: callback triggered when the switch is toggled.
 * - **value**: boolean state of the switch.
 */
export interface Props {
    /** Accessibility label for screen readers */
    accessibilityLabel?: string;
    /** Theme-based or custom color variant name */
    color?: DefaultSwitchColors | (string & {});
    /** Optional collection of color variant styles */
    colorVariants?: SwitchColorVariants;
    /** Optional style for the outer container */
    containerStyle?: StyleProp<ViewStyle>;
    /** Disable interaction and reduce opacity */
    disabled?: boolean;
    /** Optional text label displayed next to the switch */
    label?: string;
    /** Optional override style for the label text */
    labelTextStyle?: StyleProp<TextStyle>;
    /** Callback triggered when the switch is toggled */
    onValueChange: (value: boolean) => void;
    /** Current boolean value of the switch */
    value: boolean;
}

/**
 * Switch
 *
 * Renders a themed toggle switch for boolean selection.
 * - Integrates with `SwitchGroup` for multi-switch group management.
 * - Can be used standalone with `value` and `onValueChange`.
 * - Uses color variants (`switchColorVariants`) provided by the active theme
 *   for consistent styling.
 *
 * Built on top of React Native's `Switch` component with additional theming and label support.
 */
const Switch: React.FC<Props> = ({
    accessibilityLabel,
    color = "primary",
    colorVariants,
    containerStyle,
    disabled = false,
    label,
    labelTextStyle,
    onValueChange,
    value,
}) => {
    const { theme, switchColorVariants } = useTheme();

    // Resolve variants
    const colors = colorVariants || switchColorVariants;
    const colorVariant = colors[color] || colors.primary;

    // Resolve colors via theme
    const trackColor = {
        false: resolveThemeColor(colorVariant.trackColorOff, theme),
        true: resolveThemeColor(colorVariant.trackColorOn, theme),
    };
    const thumbColor: ColorValue = resolveThemeColor(colorVariant.thumbColor, theme) || theme.colors.surface;

    return (
        <View style={[{ flexDirection: "row", alignItems: "center" }, containerStyle]}>
            <RNSwitch
                value={value}
                onValueChange={onValueChange}
                disabled={disabled}
                trackColor={trackColor}
                thumbColor={thumbColor}
                accessibilityLabel={accessibilityLabel ?? label}
            />
            {label && <Text style={[{ marginLeft: 16 }, labelTextStyle]}>{label}</Text>}
        </View>
    );
};

export default Switch;
