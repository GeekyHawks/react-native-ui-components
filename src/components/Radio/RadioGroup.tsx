/**
 * RadioGroup
 *
 * Provides a container for managing a group of `Radio` components.
 * - Maintains the currently selected value in state (controlled or uncontrolled).
 * - Passes down context (`RadioGroupContext`) so individual radios can update and reflect selection.
 * - Ensures only one radio can be selected at a time within the group.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React from "react";
import { View, ViewProps } from "react-native";
import { RadioGroupContext } from "./RadioContext";

/**
 * Props for the RadioGroup component
 *
 * - **children**: Radio buttons to render inside the group.
 * - **onValueChange**: callback triggered when a different radio is selected.
 * - **selectedValue**: currently selected radio value.
 */
export interface RadioGroupProps extends ViewProps {
    /** Radio buttons to render inside the group */
    children: React.ReactNode;
    /** Callback triggered when a different radio is selected */
    onValueChange: (val: string | number) => void;
    /** Currently selected radio value */
    selectedValue: string | number | undefined;
}

/**
 * RadioGroup
 *
 * A container that manages a set of `Radio` components.
 * - Provides the selected value and change handler through context.
 * - Can operate in controlled (`value` + `onValueChange`) or uncontrolled (`defaultValue`) mode.
 * - Ensures mutual exclusivity: only one `Radio` can be selected at a time.
 *
 * Example:
 * ```tsx
 * <RadioGroup value={selected} onValueChange={setSelected}>
 *   <Radio value="option1" label="Option 1" />
 *   <Radio value="option2" label="Option 2" />
 * </RadioGroup>
 * ```
 */
export const RadioGroup: React.FC<RadioGroupProps> = ({
    selectedValue,
    onValueChange,
    children,
    ...rest
}) => {
    return (
        <RadioGroupContext.Provider value={{ selectedValue, onValueChange }}>
            <View {...rest}>{children}</View>
        </RadioGroupContext.Provider>
    );
};
