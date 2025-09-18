/**
 * Switch Variants
 *
 * Defines default switch color styles such as `primary`, `secondary`, `success`, and `error`.
 * Users can create custom color variants or override existing ones
 * to maintain consistent Switch styling across the app.
 *
 * Author: Geeky Hawks FZE LLC
 */

import { ThemeColors } from "../../theme";

/**
 * SwitchColorVariant
 *
 * Defines color properties for a single switch variant.
 * Uses theme tokens instead of hardcoded colors.
 */
export type SwitchColorVariant = {
    /** Track color when switch is ON */
    trackColorOn: keyof ThemeColors | string;
    /** Track color when switch is OFF */
    trackColorOff: keyof ThemeColors | string;
    /** Thumb color */
    thumbColor: keyof ThemeColors | string;
};

/**
 * SwitchColorVariants
 *
 * Represents a collection of named switch color variants.
 * Keys are variant names (e.g., "primary", "secondary", "error" or custom),
 * and values are the corresponding SwitchColorVariant styles.
 */
export type SwitchColorVariants = Record<DefaultSwitchColors, SwitchColorVariant> &
    Record<string, SwitchColorVariant>;

/**
 * DefaultSwitchColors
 *
 * Predefined switch color options available out-of-the-box:
 * - "primary": main interactive switch color
 * - "secondary": secondary interactive switch color
 * - "success": positive/confirmed state color
 * - "error": negative/error state color
 */
export type DefaultSwitchColors = "primary" | "secondary" | "success" | "error";

/**
 * defaultSwitchColorVariants
 *
 * Predefined switch color variants using theme tokens.
 *
 * - Default colors available: "primary", "secondary", "success", "error"
 * - You can define additional custom colors through ThemeProvider
 *   and use them via the `color` prop.
 */
export const defaultSwitchColorVariants: SwitchColorVariants = {
    primary: { trackColorOn: "primary", trackColorOff: "surfaceVariant", thumbColor: "onPrimary" },
    secondary: { trackColorOn: "secondary", trackColorOff: "surfaceVariant", thumbColor: "onSecondary" },
    success: { trackColorOn: "success", trackColorOff: "surfaceVariant", thumbColor: "onSuccess" },
    error: { trackColorOn: "error", trackColorOff: "surfaceVariant", thumbColor: "onError" },
};
