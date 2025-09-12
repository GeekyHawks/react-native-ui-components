/**
 * ActivityIndicator
 *
 * A theme-aware wrapper around React Native’s `ActivityIndicator`.
 * - Supports theme-based variants for size and color.
 * - Allows overriding size and color manually.
 * - Variants can be extended or overridden via ThemeProvider.
 * - Optionally shows text (e.g. "Loading...") alongside the spinner.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React from "react";
import {
    View,
    StyleProp,
    ViewStyle,
    TextStyle,
    ColorValue,
    ActivityIndicator as RNActivityIndicator,
} from "react-native";
import { useTheme } from "../../theme/ThemeContext";
import { resolveThemeColor } from "../../theme/utils/resolveThemeColor";
import { DefaultActivityIndicatorVariants } from "../../theme";
import { Text } from "../Text";

/**
 * Props for custom ActivityIndicator component
 *
 * - **containerStyle**: optional override styles for the wrapper container.
 * - **size**: size of the spinner (`'small'`, `'large'`, or numeric value).
 * - **color**: custom spinner color. If omitted, the variant/theme color is used.
 * - **variant**: choose from default (`default`, `primary`, `secondary`)
 *   or a custom variant defined in the `ThemeProvider`.
 */
export interface Props {
    /** Override indicator color */
    color?: ColorValue;
    /** Style for the outer container wrapping the spinner */
    containerStyle?: StyleProp<ViewStyle>;
    /** Override indicator size */
    size?: number | "small" | "large";
    /** Optional loading text */
    text?: string;
    /** Color for loading text */
    textColor?: ColorValue;
    /** Position of text relative to spinner */
    textPosition?: "left" | "right" | "top" | "bottom";
    /** Style for text */
    textStyle?: StyleProp<TextStyle>;
    /** Choose from default or custom variants */
    variant?: DefaultActivityIndicatorVariants | (string & {});
}

/**
 * ActivityIndicator
 *
 * - A themed wrapper around React Native’s `ActivityIndicator`.
 * - Renders a spinner with optional loading text positioned around it.
 * - Supports theme-driven variants for size, color, text color, and container styling.
 * - Text color is resolved via theme tokens or overridden via `textColor` prop.
 * - Allows full customization with containerStyle, textStyle, size, and color props.
 */
const ActivityIndicator: React.FC<Props> = ({
    color,
    containerStyle,
    size,
    text,
    textColor,
    textPosition = "right",
    textStyle,
    variant = "default",
}) => {
    const { theme, activityIndicatorVariants } = useTheme();
    const variantConfig = activityIndicatorVariants[variant] || {};

    // Resolve theme-driven colors
    const resolvedSpinnerColor = resolveThemeColor(
        color ?? variantConfig.color ?? "primary",
        theme
    );

    const resolvedTextColor = resolveThemeColor(
        textColor ?? variantConfig.textColor ?? "text",
        theme
    );

    const isHorizontal = textPosition === "left" || textPosition === "right";
    const flexDirection = isHorizontal ? "row" : "column";
    const renderSpinnerFirst = textPosition === "right" || textPosition === "bottom";

    return (
        <View
            style={[
                { flexDirection, alignItems: "center", justifyContent: "center" },
                variantConfig.container,
                containerStyle,
            ]}
        >
            {renderSpinnerFirst ? (
                <>
                    <RNActivityIndicator
                        size={size ?? variantConfig.size ?? "large"}
                        color={resolvedSpinnerColor}
                    />
                    {text ? (
                        <Text
                            style={[
                                {
                                    color: resolvedTextColor,
                                    marginLeft: isHorizontal ? 8 : 0,
                                    marginTop: !isHorizontal ? 4 : 0,
                                },
                                textStyle,
                            ]}
                        >
                            {text}
                        </Text>
                    ) : null}
                </>
            ) : (
                <>
                    {text ? (
                        <Text
                            style={[
                                {
                                    color: resolvedTextColor,
                                    marginRight: isHorizontal ? 8 : 0,
                                    marginBottom: !isHorizontal ? 4 : 0,
                                },
                                textStyle,
                            ]}
                        >
                            {text}
                        </Text>
                    ) : null}
                    <RNActivityIndicator
                        size={size ?? variantConfig.size ?? "large"}
                        color={resolvedSpinnerColor}
                    />
                </>
            )}
        </View>
    );
};

export default ActivityIndicator;
