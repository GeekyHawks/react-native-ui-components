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
 * Keys are variant names (e.g., "default", "primary", "secondary", or custom names),
 * and values are the corresponding StatusBarVariant configurations.
 */
export type StatusBarVariants = Record<DefaultStatusBarVariants, StatusBarVariant> & Record<string, StatusBarVariant>;

/**
 * DefaultStatusBarVariants
 *
 * Predefined status bar configuration options available out of the box.
 *
 * Semantic variants (recommended):
 * - "default": uses the theme `background` color with dark-content icons
 * - "primary": uses the theme `primary` color with light-content icons
 * - "secondary": uses the theme `secondary` color with light-content icons
 * - "surface": uses the theme `surface` color with dark-content icons
 * - "transparent": transparent background; overlays screen content
 *
 * Deprecated (kept for backward compatibility):
 * - "light": maps to background + dark-content
 * - "dark": maps to text + light-content
 */
export type DefaultStatusBarVariants =
    | "default"
    | "primary"
    | "secondary"
    | "surface"
    | "transparent"
    // deprecated
    | "light"
    | "dark";

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
    // Semantic / recommended variants
    default: {
        backgroundColor: "background", // screen background
        barStyle: "dark-content",      // suitable for light screen bg
        translucent: true,
    },
    primary: {
        backgroundColor: "primary",    // main accent (buttons, headers)
        barStyle: "light-content",     // white icons/text on dark accent
        translucent: true,
    },
    secondary: {
        backgroundColor: "secondary",  // secondary accent (gray headers, buttons)
        barStyle: "light-content",     // adjust if secondary is light
        translucent: true,
    },
    surface: {
        backgroundColor: "surface",    // cards / elevated surfaces
        barStyle: "dark-content",      // dark text/icons on light surface
        translucent: true,
    },
    transparent: {
        backgroundColor: "transparent",
        barStyle: "light-content",     // default overlay icons
        translucent: true,
    },

    // Deprecated variants (for backward compatibility)
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
