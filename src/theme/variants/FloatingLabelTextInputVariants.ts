/**
 * FloatingLabelTextInput Style Variants
 *
 * Defines reusable visual styles for text inputs with floating labels,
 * such as `outline` and `underline`. Users can extend or override these
 * variants to maintain consistent styling across the app.
 *
 * Author: Geeky Hawks FZE LLC
 */

import { ViewStyle, TextStyle } from "react-native";

/**
 * FloatingLabelTextInputStyleVariant
 *
 * Defines the style properties for a single floating label text input variant.
 * - **container**: styles applied to the wrapper `View`
 * - **input**: styles applied directly to the `TextInput`
 * - **label**: styles applied to the floating label
 */
export type FloatingLabelTextInputStyleVariant = {
    container?: ViewStyle;
    input?: TextStyle;
    label?: TextStyle;
};

/**
 * FloatingLabelTextInputStyleVariants
 *
 * Represents a collection of named floating label input style variants.
 * Keys are variant names (e.g., "outline", "underline", or custom),
 * and values are the corresponding `FloatingLabelTextInputStyleVariant`.
 */
export type FloatingLabelTextInputStyleVariants = Record<string, FloatingLabelTextInputStyleVariant>;

/**
 * DefaultFloatingLabelTextInputStyles
 *
 * Predefined style variant names available out-of-the-box:
 * - "outline": bordered input with rounded corners and floating label
 * - "underline": single bottom border with floating label
 */
export type DefaultFloatingLabelTextInputStyles = "outline" | "underline";

/**
 * defaultFloatingLabelTextInputStyleVariants
 *
 * Default implementation of style variants for floating label text inputs.
 * These can be overridden or extended using the ThemeProvider.
 */
export const defaultFloatingLabelTextInputStyleVariants: FloatingLabelTextInputStyleVariants = {
    outline: {
        container: {
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            paddingHorizontal: 12,
            justifyContent: "center",
            minHeight: 48,
        },
        input: {},
        label: {
            left: 12,
        },
    },
    underline: {
        container: {
            borderBottomWidth: 1,
            borderColor: "#ccc",
            justifyContent: "center",
            minHeight: 40,
        },
        input: {},
        label: {
            left: 0,
        },
    },
};

/**
 * FloatingLabelTextInput Size Variants
 *
 * Defines reusable size options for floating label text inputs, controlling
 * font size, padding, and label font size. Users can customize or extend these
 * for consistent sizing across the app.
 */

/**
 * FloatingLabelTextInputSizeVariant
 *
 * Defines the style properties for a single size option.
 * - **fontSize**: font size inside the text input
 * - **paddingVertical**: vertical spacing inside the container
 * - **labelFontSize**: font size of the floating label
 */
export type FloatingLabelTextInputSizeVariant = {
    fontSize: number;
    paddingVertical: number;
    labelFontSize: number;
};

/**
 * FloatingLabelTextInputSizeVariants
 *
 * Represents a collection of named size variants.
 * Keys are size names (e.g., "sm", "md", "lg", or custom),
 * and values are the corresponding `FloatingLabelTextInputSizeVariant`.
 */
export type FloatingLabelTextInputSizeVariants = Record<string, FloatingLabelTextInputSizeVariant>;

/**
 * DefaultFloatingLabelTextInputSizes
 *
 * Predefined size options available out-of-the-box:
 * - "sm": small input with compact font and label
 * - "md": medium input (default) with balanced spacing
 * - "lg": larger input with bigger font and label
 */
export type DefaultFloatingLabelTextInputSizes = "sm" | "md" | "lg";

/**
 * defaultFloatingLabelTextInputSizeVariants
 *
 * Default implementation of size variants for floating label text inputs.
 * These can be overridden or extended using the ThemeProvider.
 */
export const defaultFloatingLabelTextInputSizeVariants: FloatingLabelTextInputSizeVariants = {
    sm: { fontSize: 14, paddingVertical: 6, labelFontSize: 11 },
    md: { fontSize: 16, paddingVertical: 8, labelFontSize: 12 },
    lg: { fontSize: 18, paddingVertical: 10, labelFontSize: 14 },
};
