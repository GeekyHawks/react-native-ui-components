/**
 * Theme Definitions
 *
 * Provides default light and dark themes.
 * Users can override the themes to customize fonts, colors, and text styles
 * throughout the app.
 *
 * Author: Geeky Hawks FZE LLC
 */

/**
 * ThemeColors
 *
 * Defines all color tokens for the theme.
 */
export type ThemeColors = {
    text: string;
    background: string;
    primary: string;
    secondary: string;
    error: string;
};

/**
 * Theme
 *
 * Theme configuration containing colors, optional fontFamily.
 */
export type Theme = {
    fontFamily?: string;
    colors: ThemeColors;
};

/**
 * Default light theme
 */
export const defaultLightTheme: Theme = {
    fontFamily: 'System',
    colors: {
        text: '#000000',
        background: '#ffffff',
        primary: '#007bff',
        secondary: '#6c757d',
        error: '#dc3545',
    },
};

/**
 * Default dark theme
 */
export const defaultDarkTheme: Theme = {
    fontFamily: 'System',
    colors: {
        text: '#ffffff',
        background: '#000000',
        primary: '#339af0',
        secondary: '#adb5bd',
        error: '#fa5252',
    },
};
