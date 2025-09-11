/**
 * StatusBar
 *
 * A customizable wrapper around React Native's `StatusBar`.
 * Supports theme-based variants (`default`, `transparent`, `light`, `dark`)
 * and allows overriding background color, bar style, and translucency.
 * Optionally renders an app bar spacer for consistent layout across platforms.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React from "react";
import { StatusBar as RNStatusBar, View, StyleSheet, Platform } from "react-native";
import { useTheme } from "../../theme/ThemeContext";
import { DefaultStatusBarVariants } from "../../theme";
import { resolveThemeColor } from "../../theme/utils/resolveThemeColor";

/**
 * Props for custom StatusBar component
 *
 * - **backgroundColor**: override theme or variant background color
 * - **barStyle**: override bar style (`default`, `light-content`, `dark-content`)
 * - **hideAppBar**: hide the app bar spacer (default: false)
 * - **translucent**: control translucency (default taken from variant or true)
 * - **variant**: choose from default variants (`default` | `transparent` | `light` | `dark`)
 *   or a custom variant defined in ThemeProvider
 */
export interface Props {
    /** Background color (theme token or direct value) */
    backgroundColor?: string;
    /** Status bar style */
    barStyle?: "default" | "light-content" | "dark-content";
    /** Hide the app bar spacer below the status bar */
    hideAppBar?: boolean;
    /** Enable translucent status bar */
    translucent?: boolean;
    /** Variant key from theme or custom */
    variant?: DefaultStatusBarVariants | (string & {});
}

/**
 * APPBAR_HEIGHT
 *
 * Defines the fixed height of the app bar portion for iOS (56dp),
 * and `0` for Android since app bar height is determined differently.
 * Used to calculate the total spacer height when rendering below
 * the translucent status bar.
 */
const APPBAR_HEIGHT = Platform.OS === "ios" ? 56 : 0;

/**
 * StatusBar
 *
 * A customizable wrapper around React Native's `StatusBar`.
 * - Applies theme-based variants for background color, bar style, and translucency.
 * - Optionally renders an app bar spacer for consistent layout below the status bar.
 * - Supports overriding all props (backgroundColor, barStyle, translucent) manually.
 */
const StatusBar: React.FC<Props> = ({
    variant = "default",
    backgroundColor,
    barStyle,
    translucent,
    hideAppBar,
}) => {
    const { theme, statusBarVariants } = useTheme();
    const variantConfig = statusBarVariants[variant] || {};

    // Resolve backgroundColor: theme token or direct value
    const resolvedBg = resolveThemeColor(
        backgroundColor ??
        variantConfig.backgroundColor ??
        "primary",
        theme
    ) ?? theme.colors.primary;


    return (
        <View>
            <RNStatusBar
                translucent={translucent !== undefined ? translucent : (variantConfig.translucent ?? true)}
                backgroundColor={resolvedBg}
                barStyle={barStyle ?? (variantConfig.barStyle as any) ?? "light-content"}
            />
            {!hideAppBar && (
                <View style={[styles.appBar, { backgroundColor: resolvedBg }]} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    appBar: {
        height: (RNStatusBar.currentHeight ?? 0) + APPBAR_HEIGHT,
    },
});

export default StatusBar;
