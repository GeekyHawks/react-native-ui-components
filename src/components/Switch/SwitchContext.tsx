/**
 * SwitchContext
 *
 * Provides a React Context for managing a group of Switch components.
 * - Stores the currently selected values (multi-select array).
 * - Exposes a callback to update the selected values.
 * - Used internally by `SwitchGroup` and consumed by individual `Switch` components
 *   via the `useSwitchGroupContext` hook.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React, { createContext, useContext } from "react";

/**
 * Shape of the Switch group context value.
 * - **selectedValues**: array of currently selected switch values.
 * - **onValueChange**: callback to update selected values when a switch is toggled.
 */
export interface SwitchGroupContextType {
    /** Array of selected switch values */
    selectedValues: Array<string | number>;
    /**
     * Callback to update selected values
     * @param value - switch value that was toggled
     * @param selected - true if switch is turned on, false if turned off
     */
    onValueChange: (value: string | number, selected: boolean) => void;
}

/**
 * React Context for managing switch group state.
 * Provides `selectedValues` and `onValueChange` to nested Switch components.
 */
export const SwitchGroupContext = createContext<SwitchGroupContextType | null>(null);

/**
 * Hook to access the current `SwitchGroupContext`.
 * Should only be used inside components wrapped by a `SwitchGroup`.
 *
 * @returns The current switch group context or `null` if not inside a group.
 */
export const useSwitchGroupContext = () => useContext(SwitchGroupContext);
