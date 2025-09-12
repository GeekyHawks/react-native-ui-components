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
    /** Style for the outer container wrapping the spinner */
    containerStyle?: StyleProp<ViewStyle>;
    /** Override indicator size */
    size?: number | "small" | "large";
    /** Override indicator color */
    color?: ColorValue;
    /** Choose from default or custom variants */
    variant?: DefaultActivityIndicatorVariants | (string & {});
    /** Optional loading text */
    text?: string;
    /** Position of text relative to spinner */
    textPosition?: "left" | "right" | "top" | "bottom";
    /** Style for text */
    textStyle?: StyleProp<TextStyle>;
}

const ActivityIndicator: React.FC<Props> = ({
    containerStyle,
    size,
    color,
    variant = "default",
    text,
    textPosition = "right",
    textStyle,
}) => {
    const { theme, activityIndicatorVariants } = useTheme();
    const variantConfig = activityIndicatorVariants[variant] || {};

    // Resolve theme-driven color
    const resolvedColor = resolveThemeColor(
        color ?? variantConfig.color ?? "primary",
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
                        color={resolvedColor}
                    />
                    {text ? <Text style={[{ marginLeft: isHorizontal ? 8 : 0, marginTop: !isHorizontal ? 4 : 0 }, textStyle]}>{text}</Text> : null}
                </>
            ) : (
                <>
                    {text ? <Text style={[{ marginRight: isHorizontal ? 8 : 0, marginBottom: !isHorizontal ? 4 : 0 }, textStyle]}>{text}</Text> : null}
                    <RNActivityIndicator
                        size={size ?? variantConfig.size ?? "large"}
                        color={resolvedColor}
                    />
                </>
            )}
        </View>
    );
};

export default ActivityIndicator;
