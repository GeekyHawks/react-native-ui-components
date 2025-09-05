/**
 * Components Entry Point
 *
 * Re-exports all UI components and their prop types from the library.
 * This allows consumers to import components directly from the package root
 * without needing to know the internal folder structure.
 *
 * Example:
 * import { Button, TextInput, FloatingLabelTextInput, Text } from "@geekyhawks/react-native-ui-components";
 *
 * Author: Geeky Hawks FZE LLC
 */

// Button Component
export { default as Button } from "./Button";
export type { ButtonProps } from "./Button";

// FloatingLabelTextInput Component
export { default as FloatingLabelTextInput } from "./FloatingLabelTextInput";
export type { FloatingLabelTextInputProps } from "./FloatingLabelTextInput";

// Text Component
export { default as Text } from "./Text";
export type { TextProps } from "./Text";

// TextInput Component
export { default as TextInput } from "./TextInput";
export type { TextInputProps } from "./TextInput";
