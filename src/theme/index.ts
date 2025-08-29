/**
 * Theme Entry Point
 *
 * Exports theme-related utilities and types for the UI component library.
 * This includes the ThemeProvider, useTheme hook, default themes, and
 * text variant types. Consumers can import from this file to configure
 * global theming and typography in their app.
 *
 * Example:
 * import { ThemeProvider, useTheme, defaultLightTheme, defaultDarkTheme } from "@geekyhawks/react-native-ui-components";
 * 
 * Author: Geeky Hawks FZE LLC
 */

export * from "./Theme";
export * from "./ThemeContext";
export * from "./hooks/makeStyles";
export * from "./variants/TextVariants";
export * from "./variants/ButtonVariants";
export * from "./variants/TextInputVariants";
export * from "./variants/FloatingLabelTextInputVariants";
