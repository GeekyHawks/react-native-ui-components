/**
 * ActivityIndicator Variants
 *
 * Defines default configurations for the app’s activity indicator,
 * including size, color, and optional container styles.
 *
 * Developers can override existing variants or add custom ones
 * through the `ThemeProvider` for consistent loading indicators
 * across the app.
 *
 * Author: Geeky Hawks FZE LLC
 */

import { StyleProp, ViewStyle } from "react-native";

/**
 * ActivityIndicatorVariant
 *
 * Represents the configuration for a single activity indicator variant.
 * - `size`: indicator size (number, "small", or "large")
 * - `color`: theme token or color value
 * - `container`: optional wrapper style for the indicator
 */
export type ActivityIndicatorVariant = {
    size?: number | "small" | "large";
    color?: string;
    container?: StyleProp<ViewStyle>;
};

/**
 * ActivityIndicatorVariants
 *
 * Collection of named activity indicator variants.
 * Keys are variant names (e.g., "default", "small", "large" or custom names),
 * and values are the corresponding ActivityIndicatorVariant configurations.
 */
export type ActivityIndicatorVariants = Record<
    DefaultActivityIndicatorVariants,
    ActivityIndicatorVariant
> &
    Record<string, ActivityIndicatorVariant>;

/**
 * DefaultActivityIndicatorVariants
 *
 * Predefined activity indicator configuration options available out-of-the-box:
 * - "default": large spinner with primary color
 * - "small": small spinner with primary color
 * - "large": large spinner with primary color
 */
export type DefaultActivityIndicatorVariants = "default" | "small" | "large";

/**
 * defaultActivityIndicatorVariants
 *
 * Predefined variants with sensible defaults.
 * - These cover the most common cases: default large spinner,
 *   small spinner, and large spinner with theme-aware primary color.
 * - Developers can extend or override them through the ThemeProvider.
 */
export const defaultActivityIndicatorVariants: ActivityIndicatorVariants = {
    default: {
        size: "large",
        color: "primary",
    },
    small: {
        size: "small",
        color: "primary",
    },
    large: {
        size: "large",
        color: "primary",
    },
};
