/**
 * CustomThemeExample
 *
 * This screen demonstrates how to define and use **custom themes**.
 *
 * Demonstrates:
 * - Extending a built-in theme (`defaultLightTheme`) and overriding values
 * - Defining a completely custom dark theme
 * - Switching between custom themes with a toggle
 * - Applying custom theme colors, spacing, and fonts in components
 *
 * Purpose:
 * - Show developers how to **personalize UI themes** for their brand or product.
 * - Make it clear that built-in themes are just a starting point.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React, { useState } from "react";
import { View, StyleSheet, Switch } from "react-native";
import {
    ThemeProvider,
    useTheme,
    defaultLightTheme,
    Text,
    createTheme,
    defaultSpacing,
} from "@geekyhawks/react-native-ui-components";

// 1. Define custom themes

// Light theme extending defaultLightTheme
const customLightTheme = createTheme({
    ...defaultLightTheme,
    fontFamily: "Courier", // Override built-in font
    colors: {
        ...defaultLightTheme.colors,
        background: "#FFF8E7", // Override built-in key
        text: "#4A2C2A",       // Override built-in key
        border: "#E6C9A8",     // Override built-in key
        primary: "#FF8C42",    // Override built-in key
        accent: "#FF0000",     // 🔑 New custom key (not in default theme)
    },
    spacing: {
        ...defaultSpacing,
        xxl: 50, // 🔑 New custom key (not in default theme)
    }
});


// Dark theme defined completely from scratch
const customDarkTheme = createTheme({
    fontFamily: "Courier New", // Override built-in font, can be different font than light theme
    colors: {
        background: "#1A1A40",   // Override built-in key
        text: "#EAEAEA",         // Override built-in key
        border: "#3D3D70",       // Override built-in key
        primary: "#8C52FF",      // Override built-in key
        error: "#fa5252",        // Override built-in key
        muted: "#ced4da",        // Override built-in key
        secondary: "#adb5bd",    // Override built-in key
        accent: "#FFFF00",       // 🔑 New custom key (not in default theme)
    },
    spacing: {
        none: 0,   // Override built-in key
        xs: 4,     // Override built-in key
        sm: 6,     // Override built-in key
        md: 12,    // Override built-in key
        lg: 18,    // Override built-in key
        xl: 24,    // Override built-in key
        xxl: 50,   // 🔑 New custom key (not in default theme)
    },
});


// 2. Component that consumes theme
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
                shadowOpacity: 0.2,
                shadowRadius: 6,
                elevation: 3,
                margin: theme.spacing.xxl, // Custom Key
                width: "80%",
            }}
        >
            <Text
                variant="h1"
                style={{
                    color: theme.colors.accent, // Custom Key
                    fontFamily: theme.fontFamily,
                    textAlign: "center",
                }}
            >
                Custom Theme
            </Text>
            <Text
                style={{
                    color: theme.colors.text,
                    fontFamily: theme.fontFamily,
                    marginTop: theme.spacing.md,
                    textAlign: "center",
                }}
            >
                This box uses custom theme colors, fonts, and spacing 🎨
            </Text>
        </View>
    );
}

// 3. Main app that toggles between custom themes
export default function CustomThemeExample() {
    // For demo purposes, toggle dark mode manually
    // In real apps: const isDarkMode = useColorScheme() === "dark";
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <ThemeProvider theme={isDarkMode ? customDarkTheme : customLightTheme}>
            <View style={styles.container}>
                {/* Toggle Switch for Custom Dark Mode */}
                <View style={styles.toggleContainer}>
                    <Text style={{ color: "#000 " }}>Dark Mode (Custom):</Text>
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
