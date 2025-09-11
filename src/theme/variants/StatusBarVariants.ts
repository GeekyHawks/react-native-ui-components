/**
 * StatusBar Variants
 *
 * Defines default configurations for the app’s status bar, such as
 * background color, content style, and translucency.  
 * 
 * Developers can override existing variants or add custom ones 
 * through the `ThemeProvider` for consistent status bar styling 
 * across the app.
 *
 * Author: Geeky Hawks FZE LLC
 */

import { StatusBarStyle } from "react-native";

/**
 * StatusBarVariant
 *
 * Represents the configuration for a single status bar variant.
 * - `backgroundColor`: theme token or color value for the background
 * - `barStyle`: style of the status bar text/icons ("default", "light-content", "dark-content")
 * - `translucent`: whether the status bar overlays the app content (Android only)
 */
export type StatusBarVariant = {
    backgroundColor?: string;
    barStyle?: StatusBarStyle;
    translucent?: boolean;
};

/**
 * StatusBarVariants
 *
 * Collection of named status bar variants.
 * Keys are variant names (e.g., "default", "light", or custom names),
 * and values are the corresponding StatusBarVariant configurations.
 */
export type StatusBarVariants = Record<DefaultStatusBarVariants, StatusBarVariant> & Record<string, StatusBarVariant>;

/**
 * DefaultStatusBarVariants
 *
 * Predefined status bar configuration options available out-of-the-box:
 * - "default": primary color background with light content
 * - "transparent": fully transparent background, overlays content
 * - "light": light background with dark content (good for light themes)
 * - "dark": dark background with light content (good for dark themes)
 */
export type DefaultStatusBarVariants = "default" | "transparent" | "light" | "dark";

/**
 * defaultStatusBarVariants
 *
 * Predefined status bar variants with sensible defaults.
 *
 * - These cover the most common cases: primary-colored bar, transparent overlay,
 *   light background, and dark background.
 * - Developers can extend or override them through the ThemeProvider.
 */
export const defaultStatusBarVariants: StatusBarVariants = {
    default: {
        backgroundColor: "primary",
        barStyle: "light-content",
        translucent: true,
    },
    transparent: {
        backgroundColor: "transparent",
        barStyle: "light-content",
        translucent: true,
    },
    light: {
        backgroundColor: "background",
        barStyle: "dark-content",
        translucent: true,
    },
    dark: {
        backgroundColor: "text",
        barStyle: "light-content",
        translucent: true,
    },
};
