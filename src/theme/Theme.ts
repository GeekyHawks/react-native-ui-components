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
    background: string;
    border: string;
    error: string;
    muted: string;
    onPrimary: string;
    onSecondary: string;
    onSurface: string;
    primary: string;
    secondary: string;
    surface: string;
    text: string;
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
 *     border: "#dee2e6",
 *     error: "#dc3545",
 *     muted: "#6c757d",
 *     onPrimary: "#ffffff";
 *     onSecondary: "#ffffff";
 *     onSurface: "#000000",
 *     primary: "#007bff",
 *     secondary: "#6c757d",
 *     surface: "#f8f9fa",
 *     text: "#111",
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
}

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
    border: "#dee2e6",
    error: "#dc3545",
    muted: "#6c757d",
    onPrimary: "#ffffff",
    onSecondary: "#ffffff",
    onSurface: "#111111",
    primary: "#007bff",
    secondary: "#6c757d",
    surface: "#f2f2f7",
    text: "#212529",
}

/**
 * Default dark colors
 */
export const defaultDarkColors: ThemeColors = {
    background: "#000000",
    border: "#495057",
    error: "#fa5252",
    muted: "#9ca3af",
    onPrimary: "#000000",
    onSecondary: "#000000",
    onSurface: "#ffffff",
    primary: "#339af0",
    secondary: "#adb5bd",
    surface: "#1c1c1e",
    text: "#e5e5e5",
}

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
