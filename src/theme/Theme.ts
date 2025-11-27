/**
 * Theme Definitions
 *
 * Provides default light and dark themes with colors, spacing, and fontFamily.
 * Users can override these themes to create a custom design system for their app.
 * Supports optional user-defined extensions for colors and spacing.
 *
 * Author: Geeky Hawks FZE LLC
 */

/**
 * ThemeColors
 *
 * Required color tokens for the theme.
 */
export type ThemeColors = {
    /**
     * The main background color of the app.
     * Examples: screen backgrounds, large containers.
     * Typically very light (light mode) or very dark (dark mode).
     */
    background: string;

    /**
     * Primary text color for reading.
     * Applied to body text, headings, etc.
     */
    text: string;

    /**
     * Color for muted or secondary text/icons.
     * Example: timestamps, secondary labels.
     */
    muted: string;

    /**
     * The main accent / brand color.
     * Used for buttons, highlights, active states.
     */
    primary: string;

    /**
     * Text/icon color that appears on top of the `primary` color.
     * Example: text inside a primary button.
     */
    onPrimary: string;

    /**
     * Secondary accent color.
     * Used for secondary buttons, chips, or contrast accents.
     */
    secondary: string;

    /**
     * Text/icon color that appears on top of the `secondary` color.
     */
    onSecondary: string;

    /**
     * Surface/elevated color.
     * Used for cards, sheets, modals, elevated sections.
     * Typically white/light in light mode, near-black in dark mode.
     */
    surface: string;

    /**
     * Text/icon color that appears on top of `surface` elements.
     * Example: text on cards.
     */
    onSurface: string;

    /**
     * Color used for borders, separators, dividers.
     * Usually a subtle gray.
     */
    border: string;

    /**
     * Color for errors, destructive actions, alerts.
     */
    error: string;
};

/**
 * ThemeSpacing
 *
 * Spacing scale for padding, margin, gap, etc.
 * Keys are semantically named for clarity.
 */
export type ThemeSpacing = {
    none: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};

/**
 * Theme
 *
 * Theme config with colors, spacing, fontFamily,
 * and support for user-defined extensions.
 */
export type Theme = {
    fontFamily?: string;
    colors: ThemeColors & Record<string, string>;
    spacing: ThemeSpacing & Record<string, number>;
};

/**
 * createTheme
 *
 * Helper function to define a theme object with proper TypeScript typing.
 * Users can pass colors, spacing, fontFamily, and optional custom extensions.
 * 
 * Example usage:
 * 
 * const myTheme = createTheme({
 *   fontFamily: "Inter",
 *   colors: {
 *     background: "#fff",
 *     text: "#111",
 *     muted: "#6c757d",
 *
 *     primary: "#007bff",
 *     onPrimary: "#ffffff",
 *
 *     secondary: "#6c757d",
 *     onSecondary: "#ffffff",
 *
 *     surface: "#f8f9fa",
 *     onSurface: "#000000",
 *
 *     border: "#dee2e6",
 *     error: "#dc3545",
 *   },
 *   spacing: {
 *     none: 0,
 *     xs: 4,
 *     sm: 8,
 *     md: 16,
 *     lg: 24,
 *     xl: 32,
 *   },
 * });
 */
export function createTheme<T extends Theme>(theme: T): T {
    return theme;
};

/**
 * Default Font Family
 * Can be overridden per theme if needed.
 */
export const defaultFontFamily = "System";

/**
 * Default spacing scale
 * Can be overridden per theme if needed.
 */
export const defaultSpacing: ThemeSpacing = {
    none: 0,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
};

/**
 * Default light colors
 */
export const defaultLightColors: ThemeColors = {
    background: "#ffffff",
    text: "#212529",
    muted: "#6c757d",

    primary: "#007bff",
    onPrimary: "#ffffff",

    secondary: "#6c757d",
    onSecondary: "#ffffff",

    surface: "#f2f2f7",
    onSurface: "#111111",

    border: "#dee2e6",
    error: "#dc3545",
};

/**
 * Default dark colors
 */
export const defaultDarkColors: ThemeColors = {
    background: "#000000",
    text: "#e5e5e5",
    muted: "#9ca3af",

    primary: "#339af0",
    onPrimary: "#000000",

    secondary: "#adb5bd",
    onSecondary: "#000000",

    surface: "#1c1c1e",
    onSurface: "#ffffff",

    border: "#495057",
    error: "#fa5252",
};

/**
 * Default light theme
 */
export const defaultLightTheme = createTheme({
    fontFamily: defaultFontFamily,
    colors: defaultLightColors,
    spacing: defaultSpacing,
});

/**
 * Default dark theme
 */
export const defaultDarkTheme = createTheme({
    fontFamily: defaultFontFamily,
    colors: defaultDarkColors,
    spacing: defaultSpacing,
});

/**
 * All color keys available in the default theme.
 *
 * Derived from `defaultLightColors` to provide autocomplete for colorScheme.
 */
export type ThemeColorKeys = keyof typeof defaultLightColors;
