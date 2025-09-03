/**
 * Button
 *
 * A customizable wrapper around React Native's `Pressable` component.
 * Provides built-in support for variants, sizes, color schemes, loading states,
 * and optional left/right icons.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React, { useRef } from "react";
import {
    Pressable,
    PressableProps,
    StyleProp,
    StyleSheet,
    TextStyle,
    View,
    ViewStyle,
    ActivityIndicator,
    Animated
} from "react-native";
import { DefaultButtonShapes, DefaultButtonSizes, useTheme } from "../../theme";
import Text from "../Text";

/**
 * Props for custom Button component
 *
 * - **animation**: choose press feedback animation (`scale`, `opacity`, `shadow`, `scaleOpacity`, `none`)
 * - **children**: content of the button (text)
 * - **colorScheme**: choose color from theme palette
 * - **containerStyle**: style for the outer container
 * - **disabled**: disable the button
 * - **fontFamily**: font family for the button text
 * - **fullWidth**: make the button expand to fill its parent’s width
 * - **leftIcon / rightIcon**: optional icons before or after text
 * - **loading**: show loading indicator instead of text
 * - **loadingIndicator**: custom loading indicator node
 * - **loadingText**: optional loading text
 * - **loadingTextPosition**: Position of loading text (`left`, `right`)
 * - **loadingTextStyle**: optional loading text style
 * - **onPress**: callback for button press
 * - **shape**: choose corner radius from theme-defined `buttonShapeVariants`
 * - **size**: choose size from theme-defined `buttonSizeVariants`
 * - **textStyle**: style for the text inside the button
 * - **variant**: choose button style (`solid`, `outline`, `ghost`)
 *
 * All standard React Native `PressableProps` can also be applied.
 */
export interface Props extends PressableProps {
    /** Press feedback animation (`scale`, `opacity`, `shadow`, `scaleOpacity`, `none`) */
    animation?: "scale" | "opacity" | "shadow" | "scaleOpacity" | "none";
    /**
     * buttonStyle - Style for the inner button surface
     * Example: background color, border radius, shadow, padding
     */
    buttonStyle?: StyleProp<ViewStyle>;
    /** Content of the button (text) */
    children?: string;
    /** Optional color from theme palette */
    colorScheme?: keyof ReturnType<typeof useTheme>["theme"]["colors"];
    /** 
     * containerStyle - Style for the outer container
     * Example: layout-related styles like flex, margin, alignment
     */
    containerStyle?: StyleProp<ViewStyle>;
    /** Disable the button */
    disabled?: boolean;
    /** Optional font family for the button text */
    fontFamily?: string;
    /** Make the button expand to fill parent width */
    fullWidth?: boolean;
    /** Icon to show before text */
    leftIcon?: React.ReactNode;
    /** Style for the left icon container */
    leftIconStyle?: StyleProp<ViewStyle>;
    /** Loading indicator shown instead of text */
    loading?: boolean;
    /** Custom loading indicator node */
    loadingIndicator?: React.ReactNode;
    /** Optional loading text */
    loadingText?: string;
    /** Position of loading text (`left`, `right`) */
    loadingTextPosition?: "left" | "right";
    /** Loading text style */
    loadingTextStyle?: StyleProp<TextStyle>;
    /** Callback for button press */
    onPress?: () => void;
    /** Icon to show after text */
    rightIcon?: React.ReactNode;
    /** Style for the right icon container */
    rightIconStyle?: StyleProp<ViewStyle>;
    /**
     * Shape
     *
     * Choose from default shapes (`"sm" | "md" | "lg" | "full"`)
     * or provide the name of a custom shape defined in ThemeProvider.
     */
    shape?: DefaultButtonShapes | (string & {});
    /**
     * Size
     *
     * Choose from default sizes (`"sm" | "md" | "lg"`)
     * or provide the name of a custom size defined in ThemeProvider.
     */
    size?: DefaultButtonSizes | (string & {});
    /** Style for the text inside the button */
    textStyle?: StyleProp<TextStyle>;
    /** Variant style of the button (`solid`, `outline`, `ghost`) */
    variant?: "solid" | "outline" | "ghost";
}

/**
 * Button
 *
 * A customizable wrapper around React Native's `Pressable`.
 * Applies default button variants, sizeVariants, theme colors,
 * and supports loading and icon states.
 */
const Button: React.FC<Props> = ({
    accessibilityHint,
    accessibilityLabel,
    animation = "scale",
    buttonStyle,
    children,
    colorScheme = "primary",
    containerStyle,
    disabled = false,
    fontFamily,
    fullWidth = false,
    leftIcon,
    leftIconStyle,
    loading = false,
    loadingIndicator,
    loadingText,
    loadingTextPosition = "right",
    loadingTextStyle,
    onPress,
    rightIcon,
    rightIconStyle,
    shape = "md",
    size = "md",
    textStyle,
    variant = "solid",
    ...rest
}) => {
    const { theme, buttonSizeVariants, buttonShapeVariants, textVariants } = useTheme();
    const colors = theme.colors;

    const backgroundColor =
        variant === "solid" ? colors[colorScheme] : "transparent";

    const borderColor =
        variant === "outline" ? colors[colorScheme] : "transparent";

    const textColor =
        variant === "solid" ? colors.background : colors[colorScheme];

    const sizeVariant = buttonSizeVariants[size] || buttonSizeVariants.md;
    const shapeVariant = buttonShapeVariants[shape] || buttonShapeVariants.md;

    const hasText = !!children;
    const hasLeft = !!leftIcon;
    const hasRight = !!rightIcon;
    const isIconOnly = !hasText && (hasLeft !== hasRight);

    const scaleAnim = useRef(new Animated.Value(1)).current;
    const opacityAnim = useRef(new Animated.Value(1)).current;
    const shadowAnim = useRef(new Animated.Value(2)).current;

    const handlePressIn = () => {
        if (animation === "scale" || animation === "scaleOpacity") {
            Animated.spring(scaleAnim, {
                toValue: 0.96,
                useNativeDriver: true,
                speed: 50,
                bounciness: 0,
            }).start();
        }
        if (animation === "opacity" || animation === "scaleOpacity") {
            Animated.timing(opacityAnim, {
                toValue: 0.6,
                duration: 150,
                useNativeDriver: true,
            }).start();
        }
        if (animation === "shadow") {
            Animated.timing(shadowAnim, {
                toValue: 8,
                duration: 150,
                useNativeDriver: false,
            }).start();
        }
    };

    const handlePressOut = () => {
        if (animation === "scale" || animation === "scaleOpacity") {
            Animated.spring(scaleAnim, {
                toValue: 1,
                useNativeDriver: true,
                speed: 20,
                bounciness: 6,
            }).start();
        }
        if (animation === "opacity" || animation === "scaleOpacity") {
            Animated.timing(opacityAnim, {
                toValue: 1,
                duration: 150,
                useNativeDriver: true,
            }).start();
        }
        if (animation === "shadow") {
            Animated.timing(shadowAnim, {
                toValue: 2,
                duration: 150,
                useNativeDriver: false,
            }).start();
        }
    };

    const shadowStyle = {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: shadowAnim },
        shadowOpacity: shadowAnim.interpolate({
            inputRange: [2, 8],
            outputRange: [0.2, 0.35],
        }),
        shadowRadius: shadowAnim.interpolate({
            inputRange: [2, 8],
            outputRange: [2, 6],
        }),
        elevation: shadowAnim,
    };

    return (
        <Pressable
            onPress={onPress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            disabled={disabled || loading}
            accessibilityRole="button"
            accessibilityLabel={accessibilityLabel || (typeof children === "string" ? children : "Button")}
            accessibilityHint={accessibilityHint}
            style={[
                { alignSelf: fullWidth ? "stretch" : "flex-start" },
                containerStyle,
            ]}
            {...rest}
        >
            <Animated.View
                style={[
                    styles.base,
                    { backgroundColor, borderColor },
                    isIconOnly && !fullWidth
                        ? sizeVariant.iconOnlyContainer || sizeVariant.container
                        : sizeVariant.container,
                    shapeVariant,
                    (animation === "scale" || animation === "scaleOpacity") && {
                        transform: [{ scale: scaleAnim }],
                    },
                    (animation === "opacity" || animation === "scaleOpacity") && {
                        opacity: opacityAnim,
                    },
                    animation === "shadow" && shadowStyle,
                    disabled && styles.disabled,
                    buttonStyle,
                ]}
            >
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    {loading ? (
                        <View
                            style={{
                                position: "absolute",
                                flexDirection: loadingTextPosition === "left" ? "row-reverse" : "row",
                                alignItems: "center",
                                gap: 8,
                            }}
                        >
                            {loadingIndicator ? (
                                loadingIndicator
                            ) : (
                                <>
                                    <ActivityIndicator color={textColor} />
                                    {loadingText ? (
                                        <Text
                                            color={textColor}
                                            style={[
                                                textVariants.caption,
                                                fontFamily ? { fontFamily } : {},
                                                loadingTextStyle
                                            ]}
                                        >
                                            {loadingText}
                                        </Text>
                                    ) : null}
                                </>
                            )}
                        </View>
                    ) : null}

                    <View
                        style={[
                            styles.content,
                            loading && { opacity: 0 },
                        ]}
                    >
                        {leftIcon && (
                            <View style={leftIconStyle}>
                                {leftIcon}
                            </View>
                        )}

                        {!!children && (
                            <Text
                                color={textColor}
                                style={[
                                    styles.text,
                                    sizeVariant.text,
                                    fontFamily ? { fontFamily } : {},
                                    textStyle,
                                ]}
                            >
                                {children}
                            </Text>
                        )}

                        {rightIcon && (
                            <View style={rightIconStyle}>
                                {rightIcon}
                            </View>
                        )}
                    </View>
                </View>
            </Animated.View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    base: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    text: {
        fontWeight: "600",
    },
    disabled: {
        opacity: 0.5,
    },
});

export default Button;
