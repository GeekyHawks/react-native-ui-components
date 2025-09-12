/**
 * LoaderModal
 *
 * A themed modal component used to indicate loading states.
 * - Displays a centered spinner and optional text (delegated to ActivityIndicator).
 * - Supports theme-driven styling via variants.
 * - Commonly used for blocking UI interactions while data loads.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React from "react";
import {
    Modal,
    View,
    StyleProp,
    ViewStyle,
    TextStyle,
    ColorValue,
} from "react-native";
import { useTheme } from "../../theme/ThemeContext";
import { resolveThemeColor } from "../../theme/utils/resolveThemeColor";
import { DefaultLoaderModalVariants } from "../../theme";
import ActivityIndicator from "../ActivityIndicator/ActivityIndicator";

/**
 * Props for LoaderModal component
 *
 * - **modalVisible**: controls visibility of the modal.
 * - **variant**: choose from default (`default`, `light`, `dark`)
 *   or a custom variant defined in the `ThemeProvider`.
 * - **text**: optional text displayed with the spinner (delegated to ActivityIndicator).
 * - **textStyle**: override style for text (excluding color).
 * - **textPosition**: position of text relative to spinner.
 * - **textColor**: override text color (default: white on dark background).
 * - **color**: override spinner color (matches ActivityIndicator API).
 * - **size**: override spinner size (matches ActivityIndicator API).
 * - **containerStyle**: override outer modal wrapper style.
 * - **contentStyle**: override inner content wrapper style.
 */
export interface Props {
    /** Override spinner color */
    color?: ColorValue;
    /** Override outer container style */
    containerStyle?: StyleProp<ViewStyle>;
    /** Override inner content style */
    contentStyle?: StyleProp<ViewStyle>;
    /** Controls visibility of the modal */
    modalVisible: boolean;
    /** Override spinner size */
    size?: number | "small" | "large";
    /** Optional text displayed alongside the spinner */
    text?: string;
    /** Override style for the text */
    textStyle?: StyleProp<TextStyle>;
    /** Position of text relative to the spinner */
    textPosition?: "left" | "right" | "top" | "bottom";
    /** Override text color */
    textColor?: ColorValue;
    /** Choose from default or custom modal variants */
    variant?: DefaultLoaderModalVariants | (string & {});
}

/**
 * LoaderModal
 *
 * - Renders a modal overlay with a spinner and optional text.
 * - Delegates spinner + text rendering to ActivityIndicator.
 * - Uses theme-based variants for container, content, and spinner styling.
 * - `textColor` is resolved via theme for easy dark/light adaptation.
 */
const LoaderModal: React.FC<Props> = ({
    modalVisible,
    variant = "default",
    text,
    textStyle,
    textPosition = "right",
    textColor,
    color,
    size,
    containerStyle,
    contentStyle,
}) => {
    const { theme, loaderModalVariants } = useTheme();
    const variantConfig = loaderModalVariants[variant] || {};

    // Resolve spinner and text colors from theme or props
    const resolvedSpinnerColor = resolveThemeColor(
        color ?? variantConfig.color ?? "primary",
        theme
    );

    const resolvedTextColor = resolveThemeColor(
        textColor ?? variantConfig.textColor ?? "primary",
        theme
    );

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
        >
            {/* Outer container */}
            <View style={[variantConfig.container, containerStyle]}>
                {/* Inner content wrapper */}
                <View style={[variantConfig.content, contentStyle]}>
                    <ActivityIndicator
                        variant="default"
                        size={size ?? "large"}
                        color={resolvedSpinnerColor}
                        containerStyle={variantConfig.indicatorContainer}
                        text={text}
                        textColor={resolvedTextColor}
                        textStyle={[variantConfig.text, textStyle]}
                        textPosition={textPosition}
                    />
                </View>
            </View>
        </Modal>
    );
};

export default LoaderModal;
