/**
 * TextLightDarkThemeExample
 *
 * Demonstrates the `Text` component with light and dark themes.
 *
 * Features:
 * - Toggle between light and dark mode using a Switch component.
 * - Shows how text variants ("body", "h1", "h2", "caption") adapt to different themes.
 * - Illustrates dynamic theming using the `ThemeProvider` and default themes from the library.
 *
 * Purpose:
 * - Help users understand how to apply light/dark themes to text components.
 * - Provides an interactive example for theme-aware styling.
 * 
 * Author: Geeky Hawks FZE LLC
 */

import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Switch } from "react-native";
import { ThemeProvider, Text, defaultDarkTheme, defaultLightTheme } from "@geekyhawks/react-native-ui-components";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TextLightDarkThemeExample() {
    // For testing/demo purposes, we control dark mode manually here.
    // In real projects, you can use: const isDarkMode = useColorScheme() === "dark";
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <>
            {/* Using default light/dark themes; see Custom Example for theme customization */}
            <ThemeProvider theme={isDarkMode ? defaultDarkTheme : defaultLightTheme}>
                <SafeAreaView style={[styles.container, {
                    // Set background color based on current theme (light or dark)
                    backgroundColor: isDarkMode ? defaultDarkTheme.colors.background
                        : defaultLightTheme.colors.background
                }]}>
                    <View style={styles.toggleContainer}>
                        <Text>Dark Mode:</Text>
                        <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
                    </View>
                    <ScrollView contentContainerStyle={styles.scrollContainer}>

                        {/* This is default body text */}
                        <Text>Hello, World!</Text>

                        {/* h1 */}
                        <Text variant="h1">Heading 1</Text>

                        {/* h2 */}
                        <Text variant="h2">Heading 2</Text>

                        {/* body */}
                        <Text variant="body">Body text example</Text>

                        {/* caption */}
                        <Text variant="caption">Caption text</Text>

                        {/* Custom color based on theme */}
                        <Text color={isDarkMode ? "#FFAA00" : "#FF0000"}>My Styled Text</Text>

                        {/* Custom Font, you can pass any custom font */}
                        <Text fontFamily="Courier">
                            Courier Font
                        </Text>

                    </ScrollView>
                </SafeAreaView>
            </ThemeProvider>
        </>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    scrollContainer: { gap: 16, paddingBottom: 24 },
    toggleContainer: { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: 8, marginBottom: 16 },
});
