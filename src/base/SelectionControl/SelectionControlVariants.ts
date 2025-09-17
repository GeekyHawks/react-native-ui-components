/**
 * SelectionControl Variants
 *
 * Defines default size and color variants for selection controls
 * such as Radio, Checkbox, and Switch. This ensures consistent
 * sizing and coloring across all related components.
 *
 * Author: Geeky Hawks FZE LLC
 */

import { ViewStyle } from "react-native";
import { ThemeColors } from "../../theme";

/**
 * SelectionControlSizeVariant
 *
 * Defines the style properties for a single control size.
 * Includes outer container size and inner indicator size.
 */
export type SelectionControlSizeVariant = {
    container: Partial<ViewStyle>;
    indicator: Partial<ViewStyle>;
};

/**
 * SelectionControlSizeVariants
 *
 * Represents a collection of named selection control size variants.
 * Keys are variant names (e.g., "sm", "md", "lg" or custom),
 * and values are the corresponding SelectionControlSizeVariant styles.
 */
export type SelectionControlSizeVariants =
    Record<DefaultSelectionControlSizes, SelectionControlSizeVariant> &
    Record<string, SelectionControlSizeVariant>;

/**
 * DefaultSelectionControlSizes
 *
 * Predefined size options available out-of-the-box:
 * - "sm": compact control (e.g., small radios/checkboxes)
 * - "md": medium control (default)
 * - "lg": large control (e.g., big toggles)
 */
export type DefaultSelectionControlSizes = "sm" | "md" | "lg";

/**
 * defaultSelectionControlSizeVariants
 *
 * Predefined control size variants with standardized container and indicator sizes.
 */
export const defaultSelectionControlSizeVariants: SelectionControlSizeVariants = {
    sm: {
        container: { width: 16, height: 16 },
        indicator: { width: 8, height: 8 },
    },
    md: {
        container: { width: 20, height: 20 },
        indicator: { width: 10, height: 10 },
    },
    lg: {
        container: { width: 24, height: 24 },
        indicator: { width: 12, height: 12 },
    },
};

/**
 * ThemeColorValue
 *
 * Represents a color reference that can be either:
 * - a key from the theme’s color palette (`keyof ThemeColors`), or
 * - a custom color string (e.g., hex, rgba, named color).
 *
 * Useful for components that support both theme-based and custom colors.
 */
export type ThemeColorValue = keyof ThemeColors | string;

/**
 * SelectionControlColorVariant
 *
 * Defines the color properties for a single control variant.
 * Usually maps to theme colors for border, background, and indicator.
 */
export interface SelectionControlColorVariant {
    borderColor: ThemeColorValue;
    backgroundColor: ThemeColorValue;
    indicatorColor: ThemeColorValue;
};

/**
 * SelectionControlColorVariants
 *
 * Represents a collection of named color variants.
 */
export type SelectionControlColorVariants =
    Record<DefaultSelectionControlColors, SelectionControlColorVariant> &
    Record<string, SelectionControlColorVariant>;

/**
 * DefaultSelectionControlColors
 *
 * Predefined color options available out-of-the-box:
 * - "primary": themed with primary color
 * - "secondary": themed with secondary color
 * - "error": themed with error color (for validation)
 */
export type DefaultSelectionControlColors = "primary" | "secondary" | "error";

/**
 * defaultSelectionControlColorVariants
 *
 * Predefined control color variants using theme color keys.
 */
export const defaultSelectionControlColorVariants: SelectionControlColorVariants = {
    primary: {
        borderColor: "primary",
        backgroundColor: "surface",
        indicatorColor: "primary",
    },
    secondary: {
        borderColor: "secondary",
        backgroundColor: "surface",
        indicatorColor: "secondary",
    },
    error: {
        borderColor: "error",
        backgroundColor: "surface",
        indicatorColor: "error",
    },
};
