import React, { useRef, useState } from "react";
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

export interface Props extends RNTextInputProps {
    label?: string;
    helperText?: string;
    error?: string;
    errorPosition?: "left" | "center" | "right";

    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;

    variant?: DefaultTextInputStyles | (string & {});
    size?: DefaultTextInputSizes | (string & {});

    fullWidth?: boolean;

    /** Style for the outermost container (margin, flex, etc.) */
    containerStyle?: StyleProp<ViewStyle>;
    /** Style for the inner input container (border, padding, etc.) */
    inputContainerStyle?: StyleProp<ViewStyle>;

    inputStyle?: StyleProp<TextStyle>;
    labelStyle?: StyleProp<TextStyle>;
    helperTextStyle?: StyleProp<TextStyle>;
    errorTextStyle?: StyleProp<TextStyle>;

    secureTextEntry?: boolean;

    /** Icons for password toggle, if not passed then Default Text "Show"/"Hide" will be shown */
    passwordToggleIcons?: {
        show?: React.ReactNode; // To show password
        hide?: React.ReactNode; // To hide password
    };

    loading?: boolean;
    disabled?: boolean;
    multiline?: boolean;
    numberOfLines?: number;
}

const TextInput: React.FC<Props> = ({
    label,
    helperText,
    error,
    errorPosition = "left",
    leftIcon,
    rightIcon,
    variant = "outline",
    size = "md",
    fullWidth = true,
    containerStyle,
    inputContainerStyle,
    inputStyle,
    labelStyle,
    helperTextStyle,
    errorTextStyle,
    secureTextEntry,
    passwordToggleIcons,
    loading = false,
    disabled = false,
    multiline = false,
    numberOfLines = 1,
    style,
    ...rest
}) => {
    const { theme, textInputStyleVariants, textInputSizeVariants } = useTheme();
    const [isFocused, setFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const focusAnim = useRef(new Animated.Value(0)).current;

    const sizeVariant = textInputSizeVariants[size] || textInputSizeVariants.md;
    const styleVariant = textInputStyleVariants[variant] || textInputStyleVariants.outline;
    const isError = !!error;

    const AnimatedText = Animated.createAnimatedComponent(Text);

    // Animate border color
    React.useEffect(() => {
        Animated.timing(focusAnim, {
            toValue: isFocused || isError ? 1 : 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
    }, [isFocused, isError]);

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

    // Animated style
    const containerStyles = [
        styleVariant.container,
        { borderColor, opacity: disabled ? 0.6 : 1 } as any,
        fullWidth && { width: "100%" },
        inputContainerStyle,
    ];

    return (
        <View
            style={[{ width: fullWidth ? "100%" : undefined }, containerStyle]}
            accessible={true}
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
                        { flex: 1, color: theme.colors.text },
                        {
                            fontSize: sizeVariant.fontSize,
                            paddingVertical: sizeVariant.paddingVertical,
                            minHeight: multiline
                                ? (sizeVariant.fontSize + sizeVariant.paddingVertical * 2) * (numberOfLines || 1)
                                : undefined,
                        },
                        styleVariant.input,
                        inputStyle,
                        multiline && { textAlignVertical: "top" },
                    ]}
                    secureTextEntry={secureTextEntry && !showPassword}
                    placeholderTextColor={theme.colors.muted}
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
