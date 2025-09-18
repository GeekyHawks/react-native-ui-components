/**
 * CheckBox Component Entry Point
 *
 * Re-exports the `CheckBox` component, its props, and related utilities for easier imports.
 * This allows consumers to import everything related to checkboxes
 * directly from the component directory:
 *
 * Example:
 * import { CheckBox, CheckBoxProps, CheckBoxGroup, CheckBoxGroupProps } from "@geekyhawks/react-native-ui-components";
 *
 * Author: Geeky Hawks FZE LLC
 */

export { default as CheckBox } from "./CheckBox";
export type { Props as CheckBoxProps } from "./CheckBox";

export { CheckBoxGroup } from "./CheckBoxGroup";
export type { CheckBoxGroupProps } from "./CheckBoxGroup";

export { useCheckBoxGroupContext } from "./CheckBoxContext";
