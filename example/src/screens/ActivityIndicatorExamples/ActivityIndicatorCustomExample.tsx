/**
 * ActivityIndicatorCustomExample
 *
 * This screen demonstrates how to use the `ActivityIndicator` component with **custom themes**,
 * including light and dark variants, custom sizes, variants, and text options.
 *
 * Demonstrates usage of the following props and features:
 * - `size`: Custom indicator sizes (e.g., "small", "large")
 * - `variant`: Different built-in variants ("default", "small", "large")
 * - `text` / `textPosition`: Adding descriptive text in different positions around the indicator
 * - `color` / `textColor`: Override spinner and label colors
 * - Theme integration: Switching between **custom light and dark themes**
 *
 * Purpose:
 * - Help users understand **advanced customization** of activity indicators
 *   using custom themes, variants, and text positioning.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React, { useState } from "react";
import { ScrollView, StyleSheet, Switch, View } from "react-native";
import {
    ThemeProvider, Text, createTheme, defaultSpacing, defaultLightTheme, ActivityIndicator
} from "@geekyhawks/react-native-ui-components";

// Example custom font; replace with any font of your choice
const customFonts = "Courier";

/**
 * Custom light theme
 * You can customize colors and optionally use a different fontFamily than the dark theme.
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
 * You can customize colors and optionally use a different fontFamily than the light theme.
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

export function ActivityIndicatorCustomExample() {
    // For testing/demo purposes, we control dark mode manually here.
    // In real projects, you can use: const isDarkMode = useColorScheme() === "dark";
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <>
            {/* For single theme: wrap with <ThemeProvider theme={customLightTheme} /> */}
            {/* For light/dark custom themes: wrap with <ThemeProvider theme={isDarkMode ? customDarkTheme : customLightTheme} /> */}
            <ThemeProvider
                theme={isDarkMode ? customDarkTheme : customLightTheme}>
                <View
                    style={[
                        styles.container,
                        { backgroundColor: isDarkMode ? customDarkTheme.colors.background : customLightTheme.colors.background }
                    ]}
                >
                    <View style={styles.toggleContainer}>
                        <Text>Dark Mode:</Text>
                        <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
                    </View>

                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                        <Text>
                            Sizes
                        </Text>
                        <View style={styles.row}>
                            <ActivityIndicator size={"small"} />
                            <ActivityIndicator size={"large"} />
                        </View>

                        <Text>
                            Variants
                        </Text>
                        <View style={styles.row}>
                            <ActivityIndicator variant="default" />
                            <ActivityIndicator variant="small" />
                            <ActivityIndicator variant="large" />
                        </View>

                        <Text>
                            With Text
                        </Text>
                        <ActivityIndicator text="Right" />
                        <ActivityIndicator text="Left" textPosition="left" />
                        <ActivityIndicator text="Top" textPosition="top" />
                        <ActivityIndicator text="Bottom" textPosition="bottom" />
                    </ScrollView>
                </View>
            </ThemeProvider>
        </>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    toggleContainer: { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: 8, marginBottom: 16 },
    scrollContainer: { gap: 16, paddingBottom: 24 },
    row: { flexDirection: "row", gap: 10 }
});
