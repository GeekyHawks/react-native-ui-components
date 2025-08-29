/**
 * Button Variants
 *
 * Defines default button size styles such as `sm`, `md`, and `lg`.
 * Users can create custom size variants or override existing ones
 * to maintain consistent button sizing across the app.
 *
 * Author: Geeky Hawks FZE LLC
 */

import { TextStyle, ViewStyle } from "react-native";

/**
 * ButtonSizeVariant
 *
 * Defines the style properties for a single button size.
 * Includes both container styles (layout, padding) and
 * text styles (font size, weight, etc.).
 */
export type ButtonSizeVariant = {
    container: Partial<ViewStyle>;
    text: Partial<TextStyle>;
    iconOnlyContainer?: Partial<ViewStyle>;
};

/**
 * ButtonShapeVariant
 *
 * Defines the style properties for a single button shape.
 * Typically includes values like `borderRadius` to control
 * the roundness or geometry of the button container.
 */
export type ButtonShapeVariant = Partial<ViewStyle>;

/**
 * ButtonSizeVariants
 *
 * Represents a collection of named button size variants.
 * Keys are variant names (e.g., "sm", "md", "lg" or custom),
 * and values are the corresponding ButtonSizeVariant styles.
 */
export type ButtonSizeVariants = Record<DefaultButtonSizes, ButtonSizeVariant> & Record<string, ButtonSizeVariant>;

/**
 * ButtonShapeVariants
 *
 * Represents a collection of named button shape variants.
 * Keys are variant names (e.g., "sm", "md", "lg", "full" or custom),
 * and values are the corresponding ButtonShapeVariant styles.
 */
export type ButtonShapeVariants = Record<DefaultButtonShapes, ButtonShapeVariant> & Record<string, ButtonShapeVariant>;

/**
 * DefaultButtonSizes
 *
 * Predefined button size options available out-of-the-box:
 * - "sm": compact button with smaller font and padding
 * - "md": medium button (default), balanced font and spacing
 * - "lg": large button with bigger font and extra padding
 */
export type DefaultButtonSizes = "sm" | "md" | "lg";

/**
 * defaultButtonSizeVariants
 *
 * Predefined button size variants with standardized padding
 * and font sizes for small, medium, and large buttons.
 *
 * - Default sizes available: "sm", "md", "lg"
 * - You can define additional custom sizes through ThemeProvider
 *   and use them via the `size` prop.
 */
export const defaultButtonSizeVariants: ButtonSizeVariants = {
    sm: {
        container: { paddingVertical: 8, paddingHorizontal: 12 },
        text: { fontSize: 14 },
        iconOnlyContainer: { width: 36, height: 36, borderRadius: 18 },
    },
    md: {
        container: { paddingVertical: 12, paddingHorizontal: 16 },
        text: { fontSize: 16 },
        iconOnlyContainer: { width: 44, height: 44, borderRadius: 22 },
    },
    lg: {
        container: { paddingVertical: 16, paddingHorizontal: 20 },
        text: { fontSize: 18 },
        iconOnlyContainer: { width: 52, height: 52, borderRadius: 26 },
    },
};

/**
 * DefaultButtonShapes
 *
 * Predefined button shape options available out-of-the-box:
 * - "sm": small border radius for subtle rounding
 * - "md": medium border radius (default)
 * - "lg": large border radius for pill-like appearance
 * - "full": fully rounded corners, often used for circular buttons
 */
export type DefaultButtonShapes = "sm" | "md" | "lg" | "full";

/**
 * defaultButtonShapeVariants
 *
 * Predefined button shape variants with standardized `borderRadius`
 * values for small, medium, large, and fully rounded (pill/circle) buttons.
 *
 * - Default shapes available: "sm", "md", "lg", "full"
 * - You can define additional custom shapes through ThemeProvider
 *   and use them via the `shape` prop.
 */
export const defaultButtonShapeVariants: ButtonShapeVariants = {
    sm: { borderRadius: 4 },
    md: { borderRadius: 8 },
    lg: { borderRadius: 16 },
    full: { borderRadius: 9999 },
};
