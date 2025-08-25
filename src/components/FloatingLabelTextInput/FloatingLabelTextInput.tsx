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
    ActivityIndicator,
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
 * - **label**: text for the floating label
 * - **variant**: choose style variant ("outline" | "underline")
 * - **size**: choose size variant ("sm" | "md" | "lg")
 * - **error**: optional error message to display below the input
 * - **errorPosition**: alignment of error text ("left" | "center" | "right")
 * - **helperText**: optional helper text to show below the input
 * - **disabled / loading**: disable input or show loading state
 * - **secureTextEntry**: toggle password visibility
 * - **multiline / numberOfLines**: enable multi-line text entry
 * 
 * All standard React Native `TextInputProps` can also be applied.
 */
export interface Props extends RNTextInputProps {
    label: string;

    /**
     * Variants
     *
     * Choose from default style variants:
     * - "outline": bordered box input with floating label
     * - "underline": single underline input with floating label
     */
    variant?: DefaultFloatingLabelTextInputStyles | (string & {});

    /**
     * Sizes
     *
     * Choose from default size variants:
     * - "sm": small font, compact spacing
     * - "md": medium font and spacing (default)
     * - "lg": large font, more padding, larger label
     */
    size?: DefaultFloatingLabelTextInputSizes | (string & {});

    fullWidth?: boolean;

    containerStyle?: StyleProp<ViewStyle>;
    inputContainerStyle?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<TextStyle>;
    labelStyle?: StyleProp<TextStyle>;

    error?: string;
    /** Error text alignment */
    errorPosition?: "left" | "center" | "right";
    helperText?: string;

    secureTextEntry?: boolean;
    passwordToggleIcons?: {
        show?: React.ReactNode;
        hide?: React.ReactNode;
    };

    disabled?: boolean;
    loading?: boolean;
}

/**
 * FloatingLabelTextInput
 *
 * A customizable wrapper around React Native's `TextInput` with a floating label.
 * Applies default styleVariants, sizeVariants, theme colors, error/helper text handling,
 * and supports multiline input.
 */
const FloatingLabelTextInput: React.FC<Props> = ({
    label,
    variant = "outline",
    size = "md",
    fullWidth = true,
    containerStyle,
    inputContainerStyle,
    inputStyle,
    labelStyle,
    error,
    errorPosition = "left",
    helperText,
    secureTextEntry,
    passwordToggleIcons,
    disabled = false,
    loading = false,
    style,
    accessible = true,
    accessibilityLabel,
    accessibilityState,
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

    // Adjusted label position (vertically centered when unfocused)
    const labelY = labelAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [
            sizeVariant.paddingVertical +
            sizeVariant.fontSize / 2 -
            sizeVariant.labelFontSize / 2,
            -8,
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
                    },
                    fullWidth && { width: "100%" },
                    inputContainerStyle,
                ]}
            >
                {/* Floating Label */}
                <Animated.Text
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
                </Animated.Text>

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
