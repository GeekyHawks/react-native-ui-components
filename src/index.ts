/**
 * Library Entry Point
 *
 * Exports all components, themes, and types from the library
 *
 * Example:
 * import { Text, ThemeProvider, defaultLightTheme, defaultTextVariants } from "@geekyhawks/react-native-ui-components";
 *
 * Author: Geeky Hawks FZE LLC
 */

// Theme exports
export * from "./theme";

// Text Component
export { default as Text } from "./components/Text";
export type { TextProps } from "./components/Text";

// TextInput Component
export { default as TextInput } from "./components/TextInput";
export type { TextInputProps } from "./components/TextInput";

// FloatingLabelTextInput Component
export { default as FloatingLabelTextInput } from "./components/FloatingLabelTextInput";
export type { FloatingLabelTextInputProps } from "./components/FloatingLabelTextInput";

// Button Component
export { default as Button } from "./components/Button";
export type { ButtonProps } from "./components/Button";
