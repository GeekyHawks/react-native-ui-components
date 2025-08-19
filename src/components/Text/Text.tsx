/**
 * Text
 *
 * A customizable wrapper around React Native's `Text` component.
 * Applies default library styles and supports style overrides.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React from 'react';
import { Text as RNText, TextProps, TextStyle } from 'react-native';
import { useTheme } from "../../theme/ThemeContext";

/**
 * Props for custom Text component
 *
 * - **fontFamily**: override theme font
 * - **color**: override theme text color
 * - **variant**: select text variant from default or custom
 * 
 * All standard React Native `TextProps` can also be applied.
 */
export interface Props extends TextProps {
    fontFamily?: string;
    color?: string;
    variant?: string;
}

/**
 * Text
 *
 * A customizable wrapper around React Native's `Text`.
 * Applies default textVariants, theme fontFamily, and theme color.
 */
const Text: React.FC<Props> = ({
    fontFamily,
    color,
    variant = 'body',
    style,
    children,
    ...rest
}) => {
    const { theme, textVariants } = useTheme();

    const variantStyle: Partial<TextStyle> = textVariants[variant] || {};

    return (
        <RNText
            {...rest}
            style={[
                variantStyle,
                { fontFamily: fontFamily ?? theme.fontFamily, color: color ?? theme.colors.text },
                style,
            ]}
        >
            {children}
        </RNText>
    );
};

export default Text;
