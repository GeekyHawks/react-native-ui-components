/**
 * ActivityIndicatorLightDarkExample
 *
 * This screen demonstrates how the `ActivityIndicator` component adapts to **light and dark themes**.
 *
 * Demonstrates usage of the following props:
 * - `size`: Show different indicator sizes (e.g., "small", "large").
 * - `variant`: Compare different built-in variants (e.g., "default", "small", "large").
 * - `text` / `textPosition`: Add descriptive text alongside the indicator in different positions.
 * - Theme integration: Toggle between light and dark modes using the library’s default themes.
 *
 * Purpose:
 * - Help users understand how to **dynamically style activity indicators** for light/dark themes.
 * - Show how to pair loading animations with optional text for better UX.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Switch } from "react-native";
import { ActivityIndicator, defaultDarkTheme, defaultLightTheme, Text, ThemeProvider } from "@geekyhawks/react-native-ui-components";

export function ActivityIndicatorLightDarkExample() {
    // For testing/demo purposes, we control dark mode manually here.
    // In real projects, you can use: const isDarkMode = useColorScheme() === "dark";
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <>
            {/* Using default light/dark themes; see Custom Example for theme customization */}
            <ThemeProvider theme={isDarkMode ? defaultDarkTheme : defaultLightTheme}>
                <View style={[styles.container, {
                    // Set background color based on current theme (light or dark)
                    backgroundColor: isDarkMode ? defaultDarkTheme.colors.background
                        : defaultLightTheme.colors.background
                }]}>
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
    scrollContainer: { gap: 16, paddingBottom: 24 },
    toggleContainer: { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: 8, marginBottom: 16 },
    row: { flexDirection: "row", gap: 10 }
});
