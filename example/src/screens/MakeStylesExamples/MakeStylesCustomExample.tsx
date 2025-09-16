/**
 * MakeStylesCustomExample
 *
 * Demonstrates how to use `makeStyles` with custom light and dark themes.
 *
 * Features:
 * - Defines custom colors, spacing, and text variants for both light and dark modes.
 * - Uses a Switch to toggle between custom light and dark themes interactively.
 * - Applies `ThemeProvider` to propagate the active theme across the UI.
 * - Uses `makeStyles` to generate theme-aware styles that adapt automatically.
 *
 * Purpose:
 * - Help users understand how to integrate `makeStyles` with fully customized
 *   theme objects, beyond the built-in light/dark themes.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React, { useState } from "react";
import { View, Text, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider, createTheme, defaultLightTheme, defaultSpacing, makeStyles } from "@geekyhawks/react-native-ui-components";

export default function MakeStylesCustomExample() {
    // For testing/demo purposes, we control dark mode manually here.
    // In real projects, you can use: const isDarkMode = useColorScheme() === "dark";
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <ThemeProvider theme={isDarkMode ? customDarkTheme : customLightTheme}>
            <InnerExample isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </ThemeProvider>
    );
}

function InnerExample({ isDarkMode, setIsDarkMode }: { isDarkMode: boolean; setIsDarkMode: (v: boolean) => void }) {
    const styles = useStyles(); // ✅ inside ThemeProvider → always uses active theme

    return (
        <SafeAreaView style={styles.container}>
            {/* Toggle Switch */}
            <View style={styles.toggleContainer}>
                <Text style={{ color: isDarkMode ? "#f5f5f5" : "#111" }}>Dark Mode:</Text>
                <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
            </View>

            <View style={styles.box}>
                <Text style={styles.text}>
                    Theme-aware styles adapt to light & dark 🎨
                </Text>
            </View>
        </SafeAreaView>
    );
}

/* ------------------ Custom Themes ------------------ */

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
        accent: "#FFFF00",     // 🔑 New custom key (not in default theme)
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
        surface: "#1c1c1e",      // Override built-in key
        onSurface: "#ffffff",    // Override built-in key
        onPrimary: "#2F4F4F",    // Override built-in key
        onSecondary: "#2F4F4F",  // Override built-in key
        accent: "#FF0000",       // 🔑 New custom key (not in default theme)
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

/* ------------------ Local Styles ------------------ */

// Define theme-aware styles
const useStyles = makeStyles((theme) => ({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.background,
    },
    toggleContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: theme.spacing.xxl, // Custom Key
    },
    label: {
        color: theme.colors.text,
        marginRight: 8,
    },
    box: {
        padding: theme.spacing.md,
        borderWidth: 2,
        borderColor: theme.colors.primary,
        borderRadius: 8,
        backgroundColor: theme.colors.secondary,
        marginHorizontal: theme.spacing.xl,
    },
    text: {
        fontFamily: theme.fontFamily,
        color: theme.colors.accent, // Custom Key
        fontSize: 16,
    },
}));
