/**
 * RadioContext
 *
 * Provides a React Context for managing radio button groups.
 * - Stores the currently selected value of the group.
 * - Exposes a callback to update the selected value.
 * - Used internally by `RadioGroup` and consumed by individual `Radio` components
 *   via the `useRadioGroupContext` hook.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React, { createContext, useContext } from "react";

/**
 * Shape of the radio group context value.
 * - **onValueChange**: callback to update the selected value when a radio is pressed.
 * - **selectedValue**: currently selected radio button value.
 */
export interface RadioGroupContextType {
    /**
     * Callback to update the selected value
     * @param val - new value when a radio button is selected
     */
    onValueChange: (val: string | number) => void;
    /** Currently selected radio button value */
    selectedValue: string | number | undefined;
}

/**
 * React Context for managing radio group state.
 * Provides `selectedValue` and `onValueChange` to nested `Radio` components.
 */
export const RadioGroupContext = createContext<RadioGroupContextType | null>(null);

/**
 * Hook to access the current `RadioGroupContext`.
 * Should only be used inside components wrapped by a `RadioGroup`.
 *
 * @returns The current radio group context or `null` if not inside a group.
 */
export const useRadioGroupContext = () => useContext(RadioGroupContext);
