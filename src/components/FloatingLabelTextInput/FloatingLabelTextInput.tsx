/**
 * FloatingLabelTextInput
 *
 * A text input with a floating label that animates above the field
 * when focused or when a value is present. Supports style variants,
 * size variants, multiline input, and theme integration.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React, { useRef, useState, useEffect } from "react";
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
 * - **fullWidth**: make input expand to full width
 * - **helperText**: optional helper text to show below the input
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
    /** Make input expand to fill parent width */
    fullWidth?: boolean;
    /** Optional helper text below the input */
    helperText?: string;
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
    fullWidth = true,
    helperText,
    inputContainerStyle,
    inputStyle,
    label,
    labelStyle,
    loading = false,
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

    const AnimatedText = Animated.createAnimatedComponent(Text);

    const [isFocused, setFocused] = useState(false);
    const [value, setValue] = useState(rest.value?.toString() || "");
    const [showPassword, setShowPassword] = useState(false);

    const labelAnim = useRef(new Animated.Value(value ? 1 : 0)).current;

    const sizeVariant =
        floatingLabelTextInputSizeVariants[size] || floatingLabelTextInputSizeVariants.md;
    const styleVariant =
        floatingLabelTextInputStyleVariants[variant] ||
        floatingLabelTextInputStyleVariants.outline;

    const isError = !!error;
    const hasText = value.length > 0;

    // Animate label up/down
    useEffect(() => {
        Animated.timing(labelAnim, {
            toValue: isFocused || hasText ? 1 : 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
    }, [isFocused, hasText]);

    const containerHeight = Number(styleVariant.container?.minHeight ?? 48);
    const labelY = labelAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [
            (containerHeight / 2 - sizeVariant.fontSize / 2) - (sizeVariant.paddingVertical / 2),
            -8
        ],
    });

    const labelFontSize = labelAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [sizeVariant.fontSize, sizeVariant.labelFontSize],
    });

    const labelColor = labelAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [
            theme.colors.muted,
            isError ? theme.colors.error : theme.colors.primary,
        ],
    });

    return (
        <View
            style={[{ width: fullWidth ? "100%" : undefined }, containerStyle]}
            accessible={accessible}
            accessibilityLabel={label || rest.placeholder}
            accessibilityState={{ disabled, ...(error ? { invalid: true } : {}) } as any}>
            <View
                style={[
                    styleVariant.container,
                    {
                        opacity: disabled ? 0.6 : 1,
                        flexDirection: "row",
                        alignItems: rest.multiline ? "flex-start" : "center",
                        borderColor: variant === "outline"
                            ? isError
                                ? theme.colors.error
                                : styleVariant.container?.borderColor || theme.colors.muted
                            : undefined,
                        borderBottomColor: variant === "underline"
                            ? isError
                                ? theme.colors.error
                                : styleVariant.container?.borderColor || theme.colors.muted
                            : undefined,
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
                            top: labelY,
                            fontSize: labelFontSize as any,
                            color: labelColor as any,
                            ...(variant === "outline"
                                ? {
                                    backgroundColor: theme.colors.background,
                                }
                                : {}),
                        },
                        styleVariant.label,
                        labelStyle,
                    ]}
                >
                    {label}
                </AnimatedText>

                <RNTextInput
                    {...rest}
                    multiline={rest.multiline}
                    numberOfLines={rest.numberOfLines}
                    style={[
                        {
                            flex: 1,
                            color: theme.colors.text,
                            fontSize: sizeVariant.fontSize,
                            paddingVertical: sizeVariant.paddingVertical,
                            textAlignVertical: rest.multiline ? "top" : "center",
                            minHeight: rest.multiline
                                ? (rest.numberOfLines ?? 3) * (sizeVariant.fontSize + sizeVariant.paddingVertical * 1.5)
                                : undefined,
                        },
                        styleVariant.input,
                        inputStyle,
                        style,
                    ]}
                    secureTextEntry={secureTextEntry && !showPassword}
                    placeholder={""} // placeholder handled by floating label
                    placeholderTextColor={theme.colors.muted}
                    editable={!disabled && !loading}
                    value={value}
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
                            <Text variant="caption" color={theme.colors.primary}>
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
            </View>

            {/* Error / helper text */}
            {isError ? (
                <Text
                    variant="caption"
                    color={theme.colors.error}
                    style={{ marginTop: 4, textAlign: errorPosition }}
                >
                    {error}
                </Text>
            ) : helperText ? (
                <Text
                    variant="caption"
                    color={theme.colors.muted}
                    style={{ marginTop: 4 }}
                >
                    {helperText}
                </Text>
            ) : null}
        </View>
    );
};

export default FloatingLabelTextInput;
