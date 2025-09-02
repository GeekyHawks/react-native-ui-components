/**
 * TextInput
 *
 * A customizable wrapper around React Native's `TextInput` component.
 * Provides support for predefined style variants (outline, filled, underline),
 * size variants (sm, md, lg), and theme integration.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React, { useEffect, useRef, useState } from "react";
import {
    ActivityIndicator,
    Animated,
    TextInput as RNTextInput,
    TextInputProps as RNTextInputProps,
    StyleProp,
    ViewStyle,
    TextStyle,
    TouchableOpacity,
    View
} from "react-native";
import { DefaultTextInputSizes, DefaultTextInputStyles, useTheme } from "../../theme";
import Text from "../Text";

/**
 * Props for custom TextInput component
 *
 * - **containerStyle**: style for the outermost container (margin, flex, etc.)
 * - **disabled / loading**: disable input or show loading state
 * - **error**: optional error message to display below the input
 * - **errorPosition**: alignment of error text ("left" | "center" | "right")
 * - **errorTextStyle**: style for error text
 * - **fullWidth**: make input expand to fill parent width
 * - **helperText**: optional helper text to show below the input
 * - **helperTextStyle**: style for helper text
 * - **inputContainerStyle**: style for the inner input container (border, padding, etc.)
 * - **inputStyle**: style for the actual TextInput
 * - **label**: label for the input field
 * - **labelStyle**: style for the label
 * - **leftIcon / rightIcon**: optional React nodes rendered inside the input
 * - **loading**: show a loading indicator
 * - **multiline / numberOfLines**: enable multi-line text entry
 * - **passwordToggleIcons**: icons for password toggle, if not passed then default "Show"/"Hide" will be shown
 * - **secureTextEntry**: show text as secure (password)
 * - **size**: choose size variant ("sm" | "md" | "lg")
 * - **style**: style prop for the TextInput itself
 * - **variant**: choose style variant ("outline" | "filled" | "underline")
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
    label?: string;
    /** Style for the label */
    labelStyle?: StyleProp<TextStyle>;
    /** Optional icon rendered on the left side */
    leftIcon?: React.ReactNode;
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
    /** Text Color for the Placeholder */
    placeholderTextColor?: string;
    /** Optional icon rendered on the right side */
    rightIcon?: React.ReactNode;
    /** Show text as secure (password) */
    secureTextEntry?: boolean;
    /**
     * Sizes
     *
     * Choose from default size variants:
     * - "sm": small text input (compact)
     * - "md": medium text input (default)
     * - "lg": large text input (spacious)
     */
    size?: DefaultTextInputSizes | (string & {});
    /** Style prop for the TextInput itself */
    style?: StyleProp<TextStyle>;
    /**
     * Variants
     *
     * Choose from default style variants:
     * - "outline": bordered box input
     * - "filled": filled background input
     * - "underline": single underline input
     */
    variant?: DefaultTextInputStyles | (string & {});
}

/**
 * TextInput
 *
 * A customizable wrapper around React Native's `TextInput`.
 * Applies default styleVariants, sizeVariants, theme colors, and error/helper text handling.
 */
const TextInput: React.FC<Props> = ({
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
    leftIcon,
    loading = false,
    multiline = false,
    numberOfLines = 1,
    passwordToggleIcons,
    placeholderTextColor,
    rightIcon,
    secureTextEntry,
    size = "md",
    style,
    variant = "outline",
    ...rest
}) => {
    const { theme, textInputStyleVariants, textInputSizeVariants } = useTheme();
    const [isFocused, setFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const AnimatedText = Animated.createAnimatedComponent(Text);

    const sizeVariant = textInputSizeVariants[size] || textInputSizeVariants.md;
    const styleVariant = textInputStyleVariants[variant] || textInputStyleVariants.outline;
    const isError = !!error;

    const focusAnim = useRef(new Animated.Value(0)).current;

    // Animate border color
    const borderColor = focusAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [
            (styleVariant.container?.borderColor || theme.colors.border) as string,
            (isError ? theme.colors.error : theme.colors.primary) as string,
        ],
    });

    // Animate label color
    const labelColor = focusAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [
            theme.colors.text,
            isError ? theme.colors.error : theme.colors.primary,
        ],
    });

    const containerBackgroundColor = styleVariant.container?.backgroundColor ?? "transparent";

    // Animated style
    const containerStyles = [
        styleVariant.container,
        {
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: containerBackgroundColor,
        },
        { borderColor, opacity: disabled ? 0.6 : 1 } as any,
        fullWidth && { width: "100%" },
        inputContainerStyle,
    ];

    useEffect(() => {
        Animated.timing(focusAnim, {
            toValue: isFocused || isError ? 1 : 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
    }, [isFocused, isError]);

    return (
        <View
            style={[{ width: fullWidth ? "100%" : undefined }, containerStyle]}
            accessible={accessible}
            accessibilityLabel={label || rest.placeholder}
            accessibilityState={{ disabled, ...(error ? { invalid: true } : {}) } as any}
        >
            {label ? (
                <AnimatedText
                    variant="body"
                    style={[
                        { marginBottom: 4, fontWeight: "bold" },
                        { color: labelColor as any },
                        labelStyle,
                    ]}
                >
                    {label}
                </AnimatedText>
            ) : null}

            <Animated.View style={[{ flexDirection: "row", alignItems: "center" }, containerStyles]}>
                {leftIcon ? <View style={{ marginRight: 8 }}>{leftIcon}</View> : null}

                <RNTextInput
                    {...rest}
                    style={[
                        { flex: 1, color: theme.colors.text, fontFamily: theme.fontFamily },
                        {
                            fontSize: sizeVariant.fontSize,
                            paddingVertical: sizeVariant.paddingVertical,
                            minHeight: multiline
                                ? (sizeVariant.fontSize + sizeVariant.paddingVertical * 2) * (numberOfLines || 1)
                                : undefined,
                        },
                        styleVariant.input,
                        fontFamily ? { fontFamily } : {},
                        multiline && { textAlignVertical: "top" },
                        inputStyle,
                    ]}
                    secureTextEntry={secureTextEntry && !showPassword}
                    placeholderTextColor={placeholderTextColor ?? theme.colors.muted}
                    editable={!disabled && !loading}
                    multiline={multiline}
                    numberOfLines={numberOfLines}
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
                {!loading && secureTextEntry ? (
                    <TouchableOpacity
                        onPress={() => setShowPassword((prev) => !prev)}
                        style={{ marginLeft: 8 }}
                    >
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

                {rightIcon ? <View style={{ marginLeft: 8 }}>{rightIcon}</View> : null}

                {loading && (
                    <ActivityIndicator
                        size="small"
                        color={theme.colors.primary}
                        style={{ marginLeft: 8 }}
                    />
                )}
            </Animated.View>

            {isError ? (
                <Text
                    variant="caption"
                    color={theme.colors.error}
                    style={[{ marginTop: 4, textAlign: errorPosition }, errorTextStyle]}
                >
                    {error}
                </Text>
            ) : helperText ? (
                <Text
                    variant="caption"
                    color={theme.colors.muted}
                    style={[{ marginTop: 4 }, helperTextStyle]}
                >
                    {helperText}
                </Text>
            ) : null}
        </View>
    );
};

export default TextInput;
