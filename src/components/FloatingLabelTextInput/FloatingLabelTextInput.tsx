/**
 * FloatingLabelTextInput
 *
 * A text input with a floating label that animates above the field
 * when focused or when a value is present. Supports style variants,
 * size variants, multiline input, and theme integration.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React, { useEffect, useRef, useState } from "react";
import {
    Animated,
    TextInput as RNTextInput,
    TextInputProps as RNTextInputProps,
    StyleProp,
    ViewStyle,
    TextStyle,
    View,
    TouchableOpacity,
    ActivityIndicator
} from "react-native";
import {
    DefaultFloatingLabelTextInputStyles,
    DefaultFloatingLabelTextInputSizes,
    useTheme,
} from "../../theme";
import Text from "../Text";

/**
 * Props for FloatingLabelTextInput component
 *
 * - **containerStyle**: style for the outermost container
 * - **disabled / loading**: disable input or show loading state
 * - **error**: optional error message to display below the input
 * - **errorPosition**: alignment of error text ("left" | "center" | "right")
 * - **errorTextStyle**: style for error text
 * - **fullWidth**: make input expand to full width
 * - **helperText**: optional helper text to show below the input
 * - **helperTextStyle**: style for helper text
 * - **inputContainerStyle**: style for inner input container
 * - **inputStyle**: style for TextInput itself
 * - **label**: text for the floating label
 * - **labelStyle**: style for the label text
 * - **loading**: show loading state
 * - **multiline / numberOfLines**: enable multi-line text entry
 * - **passwordToggleIcons**: icons for show/hide password
 * - **rightIcon / leftIcon**: optional icons
 * - **secureTextEntry**: toggle password visibility
 * - **size**: choose size variant ("sm" | "md" | "lg")
 * - **style**: additional TextStyle
 * - **variant**: choose style variant ("outline" | "underline")
 *
 * All standard React Native `TextInputProps` can also be applied.
 */
export interface Props extends RNTextInputProps {
    /** Style for the outermost container (margin, flex, etc.) */
    containerStyle?: StyleProp<ViewStyle>;
    /** Disable the input */
    disabled?: boolean;
    /** Error message to display below the input */
    error?: string;
    /** Error text alignment */
    errorPosition?: "left" | "center" | "right";
    /** Style for error text */
    errorTextStyle?: StyleProp<TextStyle>;
    /** Optional font family for the input text */
    fontFamily?: string;
    /** Make input expand to fill parent width */
    fullWidth?: boolean;
    /** Optional helper text below the input */
    helperText?: string;
    /** Style for helper text */
    helperTextStyle?: StyleProp<TextStyle>;
    /** Style for the inner input container (border, padding, etc.) */
    inputContainerStyle?: StyleProp<ViewStyle>;
    /** Style for the actual TextInput */
    inputStyle?: StyleProp<TextStyle>;
    /** Label for the input field */
    label: string;
    /** Style for the label */
    labelStyle?: StyleProp<TextStyle>;
    /** Show a loading indicator */
    loading?: boolean;
    /** Support multiple lines */
    multiline?: boolean;
    /** Number of lines for multiline input */
    numberOfLines?: number;
    /** Icons for password toggle, if not passed then Default Text "Show"/"Hide" will be shown */
    passwordToggleIcons?: {
        hide?: React.ReactNode; // To hide password
        show?: React.ReactNode; // To show password
    };
    /** Show text as secure (password) */
    secureTextEntry?: boolean;
    /**
     * Sizes
     *
     * Choose from default size variants:
     * - "sm": small font, compact spacing
     * - "md": medium font and spacing (default)
     * - "lg": large font, more padding, larger label
     */
    size?: DefaultFloatingLabelTextInputSizes | (string & {});
    /** Style prop for the TextInput itself */
    style?: StyleProp<TextStyle>;
    /**
     * Variants
     *
     * Choose from default style variants:
     * - "outline": bordered box input with floating label
     * - "underline": single underline input with floating label
     */
    variant?: DefaultFloatingLabelTextInputStyles | (string & {});
}

/** Animated Text */
const AnimatedText = Animated.createAnimatedComponent(Text);

/**
 * FloatingLabelTextInput
 *
 * A customizable wrapper around React Native's `TextInput` with a floating label.
 * Applies default styleVariants, sizeVariants, theme colors, error/helper text handling,
 * and supports multiline input.
 */
const FloatingLabelTextInput: React.FC<Props> = ({
    accessible = true,
    accessibilityLabel,
    accessibilityState,
    containerStyle,
    disabled = false,
    error,
    errorPosition = "left",
    errorTextStyle,
    fontFamily,
    fullWidth = true,
    helperText,
    helperTextStyle,
    inputContainerStyle,
    inputStyle,
    label,
    labelStyle,
    loading = false,
    multiline = false,
    numberOfLines = 1,
    passwordToggleIcons,
    secureTextEntry,
    size = "md",
    style,
    variant = "outline",
    ...rest
}) => {
    const {
        theme,
        floatingLabelTextInputStyleVariants,
        floatingLabelTextInputSizeVariants,
    } = useTheme();

    const [isFocused, setFocused] = useState(false);
    const [value, setValue] = useState(rest.value?.toString() || "");
    const [showPassword, setShowPassword] = useState(false);

    const sizeVariant =
        floatingLabelTextInputSizeVariants[size] || floatingLabelTextInputSizeVariants.md;
    const styleVariant =
        floatingLabelTextInputStyleVariants[variant] ||
        floatingLabelTextInputStyleVariants.outline;

    const isError = !!error;
    const hasText = value.length > 0;
    const containerHeight = Number(styleVariant.container?.minHeight ?? 48);

    const labelAnim = useRef(new Animated.Value(hasText ? 1 : 0)).current;
    const focusAnim = useRef(new Animated.Value(isFocused || isError ? 1 : 0)).current;

    // Animate label lineHeight so that when shown as placeholder it occupies the full container height
    // and centers vertically. When floating, lineHeight collapses to labelFontSize.
    const labelLineHeight = labelAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [containerHeight, sizeVariant.labelFontSize],
    });

    // Animate font size
    const labelFontSize = labelAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [sizeVariant.fontSize, sizeVariant.labelFontSize],
    });

    // Animate label color
    const labelColor = labelAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [
            theme.colors.muted,
            isError ? theme.colors.error : theme.colors.primary,
        ],
    });

    // Animate border color
    const borderColor = focusAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [
            (styleVariant.container?.borderColor || theme.colors.muted) as string,
            (isError ? theme.colors.error : theme.colors.primary) as string,
        ],
    });

    useEffect(() => {
        Animated.parallel([
            Animated.timing(focusAnim, {
                toValue: isError || isFocused ? 1 : 0,
                duration: 200,
                useNativeDriver: false,
            }),
            Animated.timing(labelAnim, {
                toValue: hasText || isFocused ? 1 : 0,
                duration: 200,
                useNativeDriver: false,
            }),
        ]).start();
    }, [hasText, isError, isFocused]);

    return (
        <View
            style={[{ width: fullWidth ? "100%" : undefined }, containerStyle]}
            accessible={accessible}
            accessibilityLabel={label || rest.placeholder}
            accessibilityState={{ disabled, ...(error ? { invalid: true } : {}) } as any}>
            <Animated.View
                style={[
                    styleVariant.container,
                    {
                        opacity: disabled ? 0.6 : 1,
                        flexDirection: "row",
                        alignItems: multiline ? "flex-start" : "center",
                        borderColor: variant === "outline" ? borderColor : undefined,
                        borderBottomColor: variant === "underline" ? borderColor : undefined,
                    },
                    fullWidth && { width: "100%" },
                    inputContainerStyle,
                ]}
            >
                {/* Floating Label */}
                <AnimatedText
                    style={[
                        {
                            position: "absolute",
                            left: 0,
                            transform: [
                                {
                                    translateY: labelAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, multiline ? -8 : -containerHeight / 2],
                                    }),
                                },
                            ],
                            fontSize: labelFontSize as any,
                            lineHeight: labelLineHeight as any,
                            color: labelColor as any,
                            ...(variant === "outline" && (hasText || isFocused)
                                ? {
                                    backgroundColor: theme.colors.background,
                                }
                                : {}),
                        },
                        styleVariant.label,
                        fontFamily ? { fontFamily } : {},
                        labelStyle,
                    ]}
                >
                    {label}
                </AnimatedText>

                <RNTextInput
                    {...rest}
                    style={[
                        {
                            flex: 1,
                            color: theme.colors.text,
                            fontFamily: theme.fontFamily,
                            fontSize: sizeVariant.fontSize,
                            paddingVertical: sizeVariant.paddingVertical,
                            paddingHorizontal: 0,
                            textAlignVertical: multiline ? "top" : "center",
                            minHeight: multiline
                                ? (sizeVariant.fontSize + sizeVariant.paddingVertical * 2) * (numberOfLines || 1)
                                : undefined,
                        },
                        styleVariant.input,
                        fontFamily ? { fontFamily } : {},
                        inputStyle,
                        style,
                    ]}
                    secureTextEntry={secureTextEntry && !showPassword}
                    placeholder={""} // placeholder handled by floating label
                    editable={!disabled && !loading}
                    multiline={multiline}
                    numberOfLines={numberOfLines}
                    value={rest.value ?? value}
                    onChangeText={(text) => {
                        setValue(text);
                        rest.onChangeText?.(text);
                    }}
                    onFocus={(e) => {
                        setFocused(true);
                        rest.onFocus?.(e);
                    }}
                    onBlur={(e) => {
                        setFocused(false);
                        rest.onBlur?.(e);
                    }}
                />

                {/* Password toggle */}
                {secureTextEntry ? (
                    <TouchableOpacity
                        onPress={() => setShowPassword((prev) => !prev)}>
                        {passwordToggleIcons ? (
                            showPassword
                                ? passwordToggleIcons.hide || null
                                : passwordToggleIcons.show || null
                        ) : (
                            <Text
                                variant="caption"
                                color={theme.colors.primary}
                                style={[
                                    fontFamily ? { fontFamily } : {},
                                ]}>
                                {showPassword ? "Hide" : "Show"}
                            </Text>
                        )}
                    </TouchableOpacity>
                ) : null}

                {loading && (
                    <ActivityIndicator
                        size="small"
                        color={theme.colors.primary} />
                )}
            </Animated.View>

            {/* Error / helper text */}
            {isError ? (
                <Text
                    variant="caption"
                    color={theme.colors.error}
                    style={[
                        { marginTop: 4, textAlign: errorPosition },
                        fontFamily ? { fontFamily } : {},
                        errorTextStyle
                    ]}
                >
                    {error}
                </Text>
            ) : helperText ? (
                <Text
                    variant="caption"
                    color={theme.colors.muted}
                    style={[
                        { marginTop: 4 },
                        fontFamily ? { fontFamily } : {},
                        helperTextStyle
                    ]}
                >
                    {helperText}
                </Text>
            ) : null}
        </View>
    );
};

export default FloatingLabelTextInput;
