/**
 * CheckBoxGroup
 *
 * Provides a container for managing a group of `CheckBox` components.
 * - Maintains the array of selected values in state (controlled or uncontrolled).
 * - Passes down context (`CheckBoxGroupContext`) so individual checkboxes can update and reflect selection.
 * - Allows multiple checkboxes to be selected simultaneously within the group.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React from "react";
import { View, ViewProps } from "react-native";
import { CheckBoxGroupContext } from "./CheckBoxContext";

/**
 * Props for the CheckBoxGroup component
 *
 * - **children**: CheckBox components to render inside the group.
 * - **onValueChange**: callback triggered when the selection changes.
 * - **selectedValues**: array of currently selected values.
 */
export interface CheckBoxGroupProps extends ViewProps {
    /** CheckBox components to render inside the group */
    children: React.ReactNode;
    /** Callback triggered when the selection changes */
    onValueChange: (vals: Array<string | number>) => void;
    /** Array of currently selected values */
    selectedValues: Array<string | number>;
}

/**
 * CheckBoxGroup
 *
 * A container that manages a set of `CheckBox` components.
 * - Provides the selected values and change handler through context.
 * - Can operate in controlled (`selectedValues` + `onValueChange`) or uncontrolled (`defaultValues`) mode.
 * - Supports multi-select: any number of `CheckBox` components can be selected at once.
 *
 * Example:
 * ```tsx
 * <CheckBoxGroup selectedValues={selected} onValueChange={setSelected}>
 *   <CheckBox value="opt1" label="Option 1" />
 *   <CheckBox value="opt2" label="Option 2" />
 *   <CheckBox value="opt3" label="Option 3" />
 * </CheckBoxGroup>
 * ```
 */
export const CheckBoxGroup: React.FC<CheckBoxGroupProps> = ({
    selectedValues,
    onValueChange,
    children,
    ...rest
}) => {
    return (
        <CheckBoxGroupContext.Provider value={{ selectedValues, onValueChange }}>
            <View {...rest}>{children}</View>
        </CheckBoxGroupContext.Provider>
    );
};
