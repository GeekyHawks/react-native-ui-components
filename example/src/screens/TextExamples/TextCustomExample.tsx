/**
 * TextCustomExample
 *
 * Demonstrates the `Text` component with a **custom theme** and **custom text variants**.
 *
 * Features:
 * - Uses a custom theme with specific colors and font family (Roboto).
 * - Shows how to define and apply custom text variants, including `customTitle`.
 * - Renders all text variants ("body", "h1", "h2", "caption", "customTitle") for preview.
 *
 * Purpose:
 * - Helps users understand how to customize both theme and text variants
 *   beyond the default examples.
 * 
 * Author: Geeky Hawks FZE LLC
 */

import React, { useState } from "react";
import { ScrollView, StyleSheet, Switch, View } from "react-native";
import { ThemeProvider, Text, TextVariants, defaultTextVariants, createTheme, defaultSpacing, defaultLightTheme } from "@geekyhawks/react-native-ui-components";
import { SafeAreaView } from "react-native-safe-area-context";

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
    },
    spacing: {
        ...defaultSpacing,
        xxl: 40, // Custom Spacing
    },
});

/**
 * Custom text variants to override default styles like font size, color, or fontStyle.
 * Use these with the `Text` component via the `variant` prop.
 */
const customTextVariants: TextVariants = {
    ...defaultTextVariants,
    body: { fontSize: 20 }, // larger body text
    myVariant: { fontSize: 22, fontStyle: "italic", color: "#4B0082", fontWeight: "bold" }, // custom variant
};

export default function TextCustomExample() {
    // For testing/demo purposes, we control dark mode manually here.
    // In real projects, you can use: const isDarkMode = useColorScheme() === "dark";
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <>
            {/* For single theme: wrap with <ThemeProvider theme={customLightTheme} /> */}
            {/* For light/dark custom themes: wrap with <ThemeProvider theme={isDarkMode ? customDarkTheme : customLightTheme} /> */}
            <ThemeProvider
                theme={isDarkMode ? customDarkTheme : customLightTheme}
                textVariants={customTextVariants}
            >
                <SafeAreaView
                    style={[
                        styles.container,
                        { backgroundColor: isDarkMode ? customDarkTheme.colors.background : customLightTheme.colors.background },
                    ]}
                >
                    <View style={styles.toggleContainer}>
                        <Text>Dark Mode:</Text>
                        <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
                    </View>

                    <ScrollView contentContainerStyle={styles.scrollContainer}>

                        {/* Default body text */}
                        <Text>Hello, World!</Text>

                        {/* h1 */}
                        <Text variant="h1">Heading 1</Text>

                        {/* h2 */}
                        <Text variant="h2">Heading 2</Text>

                        {/* caption */}
                        <Text variant="caption">Caption text</Text>

                        {/* custom variant */}
                        <Text variant="myVariant">My Custom Variant</Text>

                    </ScrollView>
                </SafeAreaView>
            </ThemeProvider>
        </>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    toggleContainer: { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: 8, marginBottom: 16 },
    scrollContainer: { gap: 16, paddingBottom: 24 },
});
