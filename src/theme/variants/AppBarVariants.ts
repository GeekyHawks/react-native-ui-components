/**
 * AppBar Variants
 *
 * Defines default configurations for the app’s top navigation bar (AppBar),
 * including layout, background color, typography, and optional action buttons.  
 *
 * Developers can override existing variants or add custom ones
 * through the `ThemeProvider` for consistent AppBar styling
 * across the app.
 *
 * Author: Geeky Hawks FZE LLC
 */

import { ViewStyle, TextStyle } from "react-native";

/**
 * AppBarVariant
 *
 * Represents the configuration for a single AppBar variant.
 * - `container`: styles for the AppBar wrapper (background, height, layout)
 * - `title`: styles for the AppBar title text
 * - `subTitle`: styles for the AppBar sub title text
 * - `leftIcon`: styles for an optional custom left icon
 * - `rightIcon`: styles for an optional custom right icon
 */
export type AppBarVariant = {
    container?: ViewStyle;
    title?: TextStyle;
    subTitle?: TextStyle;
    leftIcon?: {
        container?: ViewStyle;
    };
    rightIcon?: {
        container?: ViewStyle;
    };
};

/**
 * AppBarVariants
 *
 * Collection of named AppBar variants.
 * Keys are variant names (e.g., "default", "transparent", or custom names),
 * and values are the corresponding AppBarVariant configurations.
 */
export type AppBarVariants = Record<DefaultAppBarVariants, AppBarVariant> & Record<string, AppBarVariant>;

/**
 * DefaultAppBarVariants
 *
 * Predefined AppBar configuration options available out-of-the-box:
 * - "default": primary-colored background with centered title
 * - "transparent": transparent background, overlays content
 * - "elevated": surface-colored background with shadow/elevation
 */
export type DefaultAppBarVariants = "default" | "transparent" | "elevated";

/**
 * defaultAppBarVariants
 *
 * Predefined AppBar variants with sensible defaults.
 *
 * - "default": solid primary background, white/onPrimary title & icons
 * - "transparent": overlay-style AppBar with transparent background
 * - "elevated": AppBar with elevation and surface-colored background
 *
 * Developers can extend or override them through the ThemeProvider.
 */
export const defaultAppBarVariants: AppBarVariants = {
    default: {
        container: {
            height: 56,
            backgroundColor: "primary",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 16,
        },
        title: { fontSize: 18, fontWeight: "bold", color: "onPrimary" },
        subTitle: { fontSize: 14, color: "onPrimary" },
        leftIcon: { container: { padding: 8 } },
        rightIcon: { container: { padding: 8 } },
    },
    transparent: {
        container: {
            height: 56,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 16,
            backgroundColor: "transparent",
        },
        title: { fontSize: 18, fontWeight: "bold", color: "text" },
        subTitle: { fontSize: 14, color: "text" },
        leftIcon: { container: { padding: 8 } },
        rightIcon: { container: { padding: 8 } },
    },
    elevated: {
        container: {
            height: 56,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 16,
            backgroundColor: "surface",
            elevation: 4,
            shadowColor: "shadow",
            shadowOpacity: 0.1,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 4,
        },
        title: { fontSize: 18, fontWeight: "bold", color: "onSurface" },
        subTitle: { fontSize: 14, color: "onSurface" },
        leftIcon: { container: { padding: 8 } },
        rightIcon: { container: { padding: 8 } },
    },
};
