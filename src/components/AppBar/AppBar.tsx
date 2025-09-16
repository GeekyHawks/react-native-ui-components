/**
 * AppBar
 *
 * A customizable application top bar component.
 * - Supports theme-based variants (`default`, `transparent`, `elevated`)
 *   or custom variants defined in the `ThemeProvider`.
 * - Provides optional left icon, right icon, and centered title.
 * - Ensures the title always remains horizontally centered regardless
 *   of whether icons are displayed.
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
 * - **heading**: text to display as the title (centered by default).
 * - **containerStyle**: optional override styles for the app bar container.
 * - **headerTextStyle**: optional override styles for the title text.
 * - **leftIcon**: custom icon to display on the left.
 * - **onLeftIconPress**: callback when left icon is pressed.
 * - **leftIconStyle**: override styles for left icon container.
 * - **rightIcon**: custom icon to display on the right.
 * - **onRightIconPress**: callback when right icon is pressed.
 * - **rightIconStyle**: override styles for right icon container.
 * - **variant**: choose from default (`default`, `transparent`, `elevated`)
 *   or a custom variant defined in the `ThemeProvider`.
 */
export interface Props {
    /** Style for the outer container */
    containerStyle?: StyleProp<ViewStyle>;
    /** Title text to display in the center */
    heading?: string;
    /** Style for the title text */
    headerTextStyle?: StyleProp<TextStyle>;
    /** Custom left icon (before title) */
    leftIcon?: React.ReactNode;
    /** Style for the left icon container */
    leftIconStyle?: StyleProp<ViewStyle>;
    /** Click handler for left icon */
    onLeftIconPress?: () => void;
    /** Custom right icon (after title) */
    rightIcon?: React.ReactNode;
    /** Style for the right icon container */
    rightIconStyle?: StyleProp<ViewStyle>;
    /** Click handler for right icon */
    onRightIconPress?: () => void;
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
    heading,
    containerStyle,
    headerTextStyle,
    leftIcon,
    onLeftIconPress,
    leftIconStyle,
    rightIcon,
    onRightIconPress,
    rightIconStyle,
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

            {/* Title (Always Centered) */}
            <View
                style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    alignItems: "center",
                    justifyContent: "center",
                }}
                pointerEvents="none"
            >
                <Text
                    style={[
                        { fontFamily: theme.fontFamily },
                        resolvedTitle,
                        headerTextStyle,
                    ]}
                >
                    {heading ?? ""}
                </Text>
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
