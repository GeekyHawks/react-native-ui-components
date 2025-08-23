/**
 * Text Variants
 *
 * Defines default text styles such as `body`, `h1`, `h2`, and `caption`.
 * Users can create custom variants or override existing ones to standardize
 * typography across the app.
 *
 * Author: Geeky Hawks FZE LLC
 */

import { TextStyle } from 'react-native';

/**
 * TextVariant
 *
 * Defines the style properties for a single text variant.
 * It is a partial React Native TextStyle, so you can override
 * only the properties you need.
 */
export type TextVariant = Partial<TextStyle>;

/**
 * TextVariants
 *
 * Represents a collection of named text variants.
 * Keys are variant names (e.g., 'body', 'h1', or custom names),
 * and values are the corresponding TextVariant styles.
 */
export type TextVariants = Record<string, TextVariant>;

/**
 * defaultTextVariants
 *
 * Predefined text variants with font size, weight, and style.
 * 
 * - These are the default variants available: "body", "h1", "h2", "caption".
 * - You can provide additional custom variants through the ThemeProvider.
 */
export type DefaultTextVariants = 'body' | 'h1' | 'h2' | 'caption';

export const defaultTextVariants: TextVariants = {
    body: { fontSize: 16 },
    h1: { fontSize: 24, fontWeight: '700' },
    h2: { fontSize: 20, fontWeight: '600' },
    caption: { fontSize: 12 },
};
