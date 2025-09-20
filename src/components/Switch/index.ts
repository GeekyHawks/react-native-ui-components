/**
 * Switch Component Entry Point
 *
 * Re-exports the `Switch` component, its props, and related utilities
 * for easier imports. This allows consumers to import everything
 * related to Switch directly from the component directory.
 *
 * Example:
 * import { Switch, SwitchProps, SwitchGroup, SwitchGroupProps } 
 * from "@geekyhawks/react-native-ui-components";
 *
 * Author: Geeky Hawks FZE LLC
 */

export { default as Switch } from "./Switch";
export type { Props as SwitchProps } from "./Switch";

export { SwitchGroup } from "./SwitchGroup";
export type { SwitchGroupProps } from "./SwitchGroup";

export { useSwitchGroupContext } from "./SwitchContext";
