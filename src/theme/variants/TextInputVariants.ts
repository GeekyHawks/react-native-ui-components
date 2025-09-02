/**
 * TextInput Style Variants
 *
 * Defines reusable visual styles for text inputs, such as `outline`, `filled`,
 * and `underline`. Users can extend or override these variants to maintain
 * consistent input styling across the app.
 *
 * Author: Geeky Hawks FZE LLC
 */

import { TextStyle, ViewStyle } from "react-native";

/**
 * TextInputStyleVariant
 *
 * Defines the style properties for a single text input variant.
 * - **container**: styles applied to the wrapper `View`
 * - **input**: styles applied directly to the `TextInput`
 */
export type TextInputStyleVariant = {
    container?: ViewStyle;
    input?: TextStyle;
};

/**
 * TextInputStyleVariants
 *
 * Represents a collection of named text input style variants.
 * Keys are variant names (e.g., "outline", "filled", "underline", or custom),
 * and values are the corresponding `TextInputStyleVariant`.
 */
export type TextInputStyleVariants = Record<DefaultTextInputStyles, TextInputStyleVariant> & Record<string, TextInputStyleVariant>;

/**
 * DefaultTextInputStyles
 *
 * Predefined style variant names available out-of-the-box:
 * - "outline": bordered input with rounded corners
 * - "filled": filled background with border
 * - "underline": single bottom border only
 */
export type DefaultTextInputStyles = "outline" | "filled" | "underline";

/**
 * defaultTextInputStyleVariants
 *
 * Default implementation of style variants for text inputs.
 * These can be overridden or extended using the ThemeProvider.
 */
export const defaultTextInputStyleVariants: TextInputStyleVariants = {
    outline: {
        container: {
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            paddingHorizontal: 12,
        },
        input: {},
    },
    filled: {
        container: {
            backgroundColor: "#3A3A3A",
            borderRadius: 8,
            paddingHorizontal: 12,
            borderWidth: 1,
            borderColor: "#ccc",
        },
        input: {
            color: "#FFFFFF",
        },
    },
    underline: {
        container: {
            borderBottomWidth: 1,
            borderColor: "#ccc",
        },
        input: {},
    },
};

/**
 * TextInput Size Variants
 *
 * Defines reusable size options for text inputs, controlling font size
 * and vertical padding. Users can customize or extend these for consistent
 * sizing across the app.
 */

/**
 * TextInputSizeVariant
 *
 * Defines the style properties for a single size option.
 * - **fontSize**: font size inside the text input
 * - **paddingVertical**: vertical spacing inside the container
 */
export type TextInputSizeVariant = {
    fontSize: number;
    paddingVertical: number;
};

/**
 * TextInputSizeVariants
 *
 * Represents a collection of named size variants.
 * Keys are size names (e.g., "sm", "md", "lg", or custom),
 * and values are the corresponding `TextInputSizeVariant`.
 */
export type TextInputSizeVariants = Record<DefaultTextInputSizes, TextInputSizeVariant> & Record<string, TextInputSizeVariant>;

/**
 * DefaultTextInputSizes
 *
 * Predefined size options available out-of-the-box:
 * - "sm": small font and compact padding
 * - "md": medium font and spacing (default)
 * - "lg": larger font with extra padding
 */
export type DefaultTextInputSizes = "sm" | "md" | "lg";

/**
 * defaultTextInputSizeVariants
 *
 * Default implementation of size variants for text inputs.
 * These can be overridden or extended using the ThemeProvider.
 */
export const defaultTextInputSizeVariants: TextInputSizeVariants = {
    sm: { fontSize: 14, paddingVertical: 6 },
    md: { fontSize: 16, paddingVertical: 8 },
    lg: { fontSize: 18, paddingVertical: 10 },
};
