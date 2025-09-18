/**
 * SwitchGroup
 *
 * Provides a container for managing a group of Switch components.
 * - Maintains an array of selected values for multi-select switches.
 * - Passes down context (`SwitchGroupContext`) so individual switches can update and reflect selection.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React from "react";
import { View, ViewProps } from "react-native";
import { SwitchGroupContext } from "./SwitchContext";

/**
 * Props for the SwitchGroup component
 *
 * - **children**: Switch components to render inside the group.
 * - **onValueChange**: callback triggered when a switch is toggled.
 * - **selectedValues**: currently selected switch values.
 */
export interface SwitchGroupProps extends ViewProps {
    /** Switch components to render inside the group */
    children: React.ReactNode;
    /** Callback triggered when a switch value changes */
    onValueChange: (value: string | number, selected: boolean) => void;
    /** Array of currently selected switch values */
    selectedValues: Array<string | number>;
}

/**
 * SwitchGroup
 *
 * A container that manages a set of Switch components.
 * - Provides selected values and change handler through context.
 * - Can operate in controlled mode via `selectedValues` prop.
 *
 * Example:
 * ```tsx
 * <SwitchGroup selectedValues={selected} onValueChange={setSelected}>
 *   <Switch value="option1" />
 *   <Switch value="option2" />
 * </SwitchGroup>
 * ```
 */
export const SwitchGroup: React.FC<SwitchGroupProps> = ({
    selectedValues,
    onValueChange,
    children,
    ...rest
}) => {
    return (
        <SwitchGroupContext.Provider value={{ selectedValues, onValueChange }}>
            <View {...rest}>{children}</View>
        </SwitchGroupContext.Provider>
    );
};
