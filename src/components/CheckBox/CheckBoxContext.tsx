/**
 * CheckBoxContext
 *
 * Provides a React Context for managing checkbox groups.
 * - Stores the array of currently selected values.
 * - Exposes a callback to update the selected values.
 * - Used internally by `CheckBoxGroup` and consumed by individual `CheckBox` components
 *   via the `useCheckBoxGroupContext` hook.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React, { createContext, useContext } from "react";

/**
 * Shape of the checkbox group context value.
 * - **onValueChange**: callback to update the selected values when a checkbox is toggled.
 * - **selectedValues**: array of currently selected checkbox values.
 */
export interface CheckBoxGroupContextType {
    /**
     * Callback to update the selected values
     * @param vals - new array of selected values
     */
    onValueChange: (vals: Array<string | number>) => void;
    /** Array of currently selected checkbox values */
    selectedValues: Array<string | number>;
}

/**
 * React Context for managing checkbox group state.
 * Provides `selectedValues` and `onValueChange` to nested `CheckBox` components.
 */
export const CheckBoxGroupContext = createContext<CheckBoxGroupContextType | null>(null);

/**
 * Hook to access the current `CheckBoxGroupContext`.
 * Should only be used inside components wrapped by a `CheckBoxGroup`.
 *
 * @returns The current checkbox group context or `null` if not inside a group.
 */
export const useCheckBoxGroupContext = () => useContext(CheckBoxGroupContext);
