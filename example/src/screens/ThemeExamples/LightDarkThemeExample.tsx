/**
 * LightDarkThemeExample
 *
 * This screen demonstrates how to switch between **Light** and **Dark** themes
 * using the built-in `defaultLightTheme` and `defaultDarkTheme`.
 *
 * Demonstrates:
 * - Wrapping your app with `ThemeProvider` and dynamically switching themes
 * - Using a toggle (`Switch`) to simulate dark mode (for demo purposes)
 * - Applying theme-driven styles that automatically adapt to light/dark mode
 *
 * Purpose:
 * - Show how apps can easily support **light/dark theme switching**
 *   without changing component code.
 *
 * Notes:
 * - In real projects, you may use `useColorScheme()` from React Native
 *   to automatically detect system theme instead of a manual toggle.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React, { useState } from "react";
import { View, StyleSheet, Switch } from "react-native";
import {
    ThemeProvider,
    useTheme,
    defaultLightTheme,
    defaultDarkTheme,
    Text,
} from "@geekyhawks/react-native-ui-components";

// 1. A component that consumes theme values
function ThemedBox() {
    const { theme } = useTheme();

    return (
        <View
            style={{
                backgroundColor: theme.colors.background,
                padding: theme.spacing.lg,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: theme.colors.border,
                shadowColor: theme.colors.text,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 2,
                margin: theme.spacing.md,
                width: "80%",
            }}
        >
            <Text
                variant="h1"
                style={{
                    color: theme.colors.text,
                    fontFamily: theme.fontFamily,
                    textAlign: "center",
                }}
            >
                Example
            </Text>
            <Text
                style={{
                    color: theme.colors.text,
                    fontFamily: theme.fontFamily,
                    marginTop: theme.spacing.md,
                    textAlign: "center",
                }}
            >
                This box adapts to Light and Dark themes 🎨
            </Text>
        </View>
    );
}

// 2. Main app that controls the theme
export default function LightDarkThemeExample() {
    // For demo purposes, toggle dark mode manually
    // In real apps: const isDarkMode = useColorScheme() === "dark";
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <ThemeProvider theme={isDarkMode ? defaultDarkTheme : defaultLightTheme}>
            <View style={styles.container}>
                {/* Toggle Switch for Dark Mode */}
                <View style={styles.toggleContainer}>
                    <Text style={{ color: "#000" }}>Dark Mode:</Text>
                    <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
                </View>

                {/* Themed Box (adapts automatically) */}
                <ThemedBox />
            </View>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    toggleContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
});
