/**
 * Text
 *
 * A customizable wrapper around React Native's `Text` component.
 * Applies default library styles and supports style overrides.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React from "react";
import { Text as RNText, TextProps, TextStyle } from "react-native";
import { useTheme } from "../../theme/ThemeContext";
import { DefaultTextVariants } from "../../theme";

/**
 * Props for custom Text component
 *
 * - **color**: override theme text color
 * - **fontFamily**: override theme font
 * - **variant**: select text variant from default or custom
 * 
 * All standard React Native `TextProps` can also be applied.
 */
export interface Props extends TextProps {
    /** Optional color for the text */
    color?: string;
    /** Optional font family for the text */
    fontFamily?: string;
    /**
     * Variant
     *
     * Choose from default variants ("body" | "h1" | "h2" | "caption")
     * or provide a custom variant defined in ThemeProvider.
     */
    variant?: DefaultTextVariants | (string & {});
}

/**
 * Text
 *
 * A customizable wrapper around React Native's `Text`.
 * Applies default textVariants, theme fontFamily, and theme color.
 */
const Text: React.FC<Props> = ({
    children,
    color,
    fontFamily,
    style,
    variant = "body",
    ...rest
}) => {
    const { theme, textVariants } = useTheme();

    const variantStyle: Partial<TextStyle> = textVariants[variant] || {};

    return (
        <RNText
            {...rest}
            style={[
                { fontFamily: theme.fontFamily, color: theme.colors.text }, // theme defaults
                variantStyle,                                               // variant overrides theme
                fontFamily ? { fontFamily } : {},                           // prop overrides variant
                color ? { color } : {},                                     // prop overrides variant
                style,                                                       // inline style overrides everything
            ]}
        >
            {children}
        </RNText>
    );
};

export default Text;
