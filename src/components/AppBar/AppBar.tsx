/**
 * AppBar
 *
 * A customizable application top bar component.
 * - Supports theme-based variants (`default`, `transparent`, `elevated`)
 *   or custom variants defined in the `ThemeProvider`.
 * - Provides optional left icon, right icon, centered title and optional subTitle.
 * - Ensures title (+ subTitle if provided) always remain horizontally centered regardless of icons.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React from "react";
import {
    View,
    StyleProp,
    ViewStyle,
    TextStyle,
    Pressable,
} from "react-native";
import { useTheme } from "../../theme/ThemeContext";
import { DefaultAppBarVariants } from "../../theme";
import { Text } from "../Text";
import { resolveThemeColor } from "../../theme/utils/resolveThemeColor";

/**
 * Props for custom AppBar component
 *
 * - **containerStyle**: optional override styles for the app bar container.
 * - **leftIcon**: custom icon to display on the left.
 * - **leftIconStyle**: override styles for left icon container.
 * - **onLeftIconPress**: callback when left icon is pressed.
 * - **onRightIconPress**: callback when right icon is pressed.
 * - **rightIcon**: custom icon to display on the right.
 * - **rightIconStyle**: override styles for right icon container.
 * - **subTitle**: optional text displayed below the title.
 * - **subTitleTextStyle**: optional override styles for the subtitle text.
 * - **title**: text to display as the title (centered by default).
 * - **titleTextStyle**: optional override styles for the title text.
 * - **variant**: choose from default (`default`, `transparent`, `elevated`)
 *   or a custom variant defined in the `ThemeProvider`.
 */
export interface Props {
    /** Style for the outer container */
    containerStyle?: StyleProp<ViewStyle>;
    /** Custom left icon (before title) */
    leftIcon?: React.ReactNode;
    /** Style for the left icon container */
    leftIconStyle?: StyleProp<ViewStyle>;
    /** Click handler for left icon */
    onLeftIconPress?: () => void;
    /** Click handler for right icon */
    onRightIconPress?: () => void;
    /** Custom right icon (after title) */
    rightIcon?: React.ReactNode;
    /** Style for the right icon container */
    rightIconStyle?: StyleProp<ViewStyle>;
    /** Optional Sub Title text to display in the center */
    subTitle?: string;
    /** Style for the sub title text */
    subTitleTextStyle?: StyleProp<TextStyle>;
    /** Title text to display in the center */
    title?: string;
    /** Style for the title text */
    titleTextStyle?: StyleProp<TextStyle>;
    /** Choose from default or custom app bar variants */
    variant?: DefaultAppBarVariants | (string & {});
}

/**
 * AppBar
 *
 * Renders a themed top application bar.
 * - Left section: optional left icon.
 * - Center section: title, always horizontally centered.
 * - Right section: optional right icon.
 *
 * Uses `resolveThemeColor` to map theme tokens (e.g., `primary`, `onPrimary`)
 * into actual color values from the active theme.
 */
const AppBar: React.FC<Props> = ({
    containerStyle,
    leftIcon,
    leftIconStyle,
    onLeftIconPress,
    onRightIconPress,
    rightIcon,
    rightIconStyle,
    subTitle,
    subTitleTextStyle,
    title,
    titleTextStyle,
    variant = "default",
}) => {
    const { theme, appBarVariants } = useTheme();
    const variantConfig = appBarVariants[variant] || {};

    // Resolve theme-driven colors
    const resolvedContainer = {
        ...variantConfig.container,
        backgroundColor: resolveThemeColor(variantConfig.container?.backgroundColor, theme),
    };

    const resolvedTitle = {
        ...variantConfig.title,
        color: resolveThemeColor(variantConfig.title?.color, theme),
    };

    const resolvedSubTitle = {
        ...variantConfig.subTitle,
        color: resolveThemeColor(variantConfig.subTitle?.color, theme),
    };

    return (
        <View style={[resolvedContainer, containerStyle]}>
            {/* Left Section */}
            <View style={{ minWidth: 48, justifyContent: "center", alignItems: "flex-start" }}>
                {leftIcon ? (
                    <Pressable
                        onPress={onLeftIconPress}
                        style={({ pressed }) => [
                            variantConfig.leftIcon?.container,
                            leftIconStyle,
                            pressed && { opacity: 0.6 },
                        ]}
                    >
                        {leftIcon}
                    </Pressable>
                ) : null}
            </View>

            {/* Title + SubTitle */}
            <View
                style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    alignItems: "center",
                    justifyContent: "center",
                }}
                pointerEvents="none"
            >
                {(title || subTitle) ? (
                    <View style={{ alignItems: "center" }}>
                        {title ? (
                            <Text
                                style={[
                                    { fontFamily: theme.fontFamily },
                                    resolvedTitle,
                                    titleTextStyle,
                                ]}
                            >
                                {title}
                            </Text>
                        ) : null}
                        {subTitle ? (
                            <Text
                                style={[
                                    { fontFamily: theme.fontFamily },
                                    resolvedSubTitle,
                                    subTitleTextStyle,
                                ]}
                            >
                                {subTitle}
                            </Text>
                        ) : null}
                    </View>
                ) : null}
            </View>

            {/* Right Section */}
            <View style={{ minWidth: 48, justifyContent: "center", alignItems: "flex-end" }}>
                {rightIcon ? (
                    <Pressable
                        onPress={onRightIconPress}
                        style={({ pressed }) => [
                            variantConfig.rightIcon?.container,
                            rightIconStyle,
                            pressed && { opacity: 0.6 },
                        ]}
                    >
                        {rightIcon}
                    </Pressable>
                ) : null}
            </View>
        </View>
    );
};

export default AppBar;
