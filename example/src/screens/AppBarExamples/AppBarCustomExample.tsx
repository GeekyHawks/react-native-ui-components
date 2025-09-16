/**
 * AppBarCustomExample
 *
 * This screen demonstrates how to use the `AppBar` component with **custom themes**,
 * including light and dark variants, custom fonts, colors, and icons.
 *
 * Demonstrates usage of the following props and features:
 * - `title` / `subTitle`: Display text in the AppBar
 * - `leftIcon` / `rightIcon`: Icons displayed on left or right
 * - `variant`: default, transparent, elevated
 * - Theme integration: Switching between light and dark custom themes
 * - Custom styles: Override titleTextStyle, subTitleTextStyle, containerStyle, left/right icon styles
 *
 * Purpose:
 * - Help users understand **advanced customization** of AppBar
 *   using custom themes, variants, and icons.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Switch, View } from "react-native";
import { AppBar, ThemeProvider, createTheme, defaultLightTheme, Text, defaultSpacing } from "@geekyhawks/react-native-ui-components";

// Example custom font
const customFonts = "Courier";

/**
 * Custom light theme
 */
const customLightTheme = createTheme({
    ...defaultLightTheme,
    fontFamily: customFonts,
    colors: {
        text: "#4B0082",
        background: "#FFF0F5",
        primary: "#FF6347",
        secondary: "#4B0082",
        error: "#FF0000",
        border: "#dee2e6",
        muted: "#6c757d",
        surface: "#f2f2f7",
        onSurface: "#111111",
        onPrimary: "#ffffff",
        onSecondary: "#ffffff",
    },
});

/**
 * Custom dark theme
 */
const customDarkTheme = createTheme({
    fontFamily: customFonts,
    colors: {
        text: "#FFD700",
        background: "#2F4F4F",
        primary: "#FFA07A",
        secondary: "#FFD700",
        error: "#FF6B6B",
        border: "#333333",
        muted: "#AAAAAA",
        surface: "#1c1c1e",
        onSurface: "#ffffff",
        onPrimary: "#2F4F4F",
        onSecondary: "#2F4F4F",
    },
    spacing: {
        ...defaultSpacing,
        xxl: 40, // Custom Spacing
    },
});

export function AppBarCustomExample() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const theme = isDarkMode ? customDarkTheme : customLightTheme;

    return (
        <ThemeProvider theme={theme}>
            <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
                <View style={styles.toggleContainer}>
                    <Text>Dark Mode:</Text>
                    <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
                </View>
                <ScrollView contentContainerStyle={styles.scrollContainer}>

                    {/* Default AppBar with custom font */}
                    <AppBar title="Custom Title" titleTextStyle={{ fontFamily: customFonts, fontSize: 20 }} />

                    {/* AppBar with subtitle */}
                    <AppBar
                        title="Main Title"
                        subTitle="Custom Subtitle"
                        titleTextStyle={{ fontFamily: customFonts, fontSize: 18, color: theme.colors.text }}
                        subTitleTextStyle={{ fontFamily: customFonts, fontSize: 14, color: theme.colors.secondary }}
                    />

                    {/* AppBar with left icon */}
                    <AppBar
                        title="Left Icon"
                        leftIcon={<Image source={require("../../assets/back.png")} style={{ width: 24, height: 24 }} />}
                    />

                    {/* AppBar with right icon */}
                    <AppBar
                        title="Right Icon"
                        rightIcon={<Image source={require("../../assets/send.png")} style={{ width: 24, height: 24 }} />}
                    />

                    {/* AppBar with both icons */}
                    <AppBar
                        title="Both Icons"
                        leftIcon={<Image source={require("../../assets/back.png")} style={{ width: 24, height: 24 }} />}
                        rightIcon={<Image source={require("../../assets/send.png")} style={{ width: 24, height: 24 }} />}
                        titleTextStyle={{ fontSize: 18, fontWeight: "bold" }}
                    />

                    {/* AppBar with elevated variant */}
                    <AppBar
                        title="Elevated Variant"
                        variant="elevated"
                        leftIcon={<Image source={require("../../assets/back.png")} style={{ width: 24, height: 24 }} />}
                        rightIcon={<Image source={require("../../assets/send.png")} style={{ width: 24, height: 24 }} />}
                        titleTextStyle={{ color: theme.colors.primary }}
                    />
                </ScrollView>
            </View>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    toggleContainer: { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: 8, marginVertical: 16 },
    scrollContainer: { gap: 16, paddingBottom: 24 },
});
