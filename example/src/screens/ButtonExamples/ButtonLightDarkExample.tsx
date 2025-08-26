/**
 * ButtonLightDarkExample
 *
 * This screen demonstrates how the `Button` component adapts to **light and dark themes**.
 *
 * Demonstrates usage of the following props:
 * - `variant`: Solid, Outline, Ghost
 * - `colorScheme`: Changing button colors based on theme
 * - `containerStyle` / `textStyle`: Custom colors per button
 * - Theme integration: Shows switching between light and dark modes using a toggle
 *
 * Purpose:
 * - Help users understand how to **dynamically style buttons** for light/dark themes
 *   and how to apply custom colors when needed.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Switch } from "react-native";
import { Button, defaultDarkTheme, defaultLightTheme, Text, ThemeProvider } from "@geekyhawks/react-native-ui-components";
import { SafeAreaView } from "react-native-safe-area-context";

export function ButtonLightDarkExample() {
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

                        {/* Default Behaviour for Light / Dark mode change */}
                        <View style={styles.row}>

                            {/* Default Button, Solid variant  */}
                            <Button>Solid</Button>

                            {/* Outline Button */}
                            <Button variant="outline">Outline</Button>

                            {/* Ghost Button */}
                            <Button variant="ghost">Ghost</Button>

                        </View>

                        {/* Custom Behaviour for Light / Dark mode change */}
                        <View style={styles.row}>

                            {/* Change color scheme for solid button */}
                            <Button
                                colorScheme={isDarkMode ? "text" : "primary"}>
                                Solid
                            </Button>

                            {/* Change color scheme for outline button */}
                            <Button
                                colorScheme={isDarkMode ? "text" : "primary"}
                                variant="outline">
                                Outline
                            </Button>

                            {/* Change containerStyle, textStyle */}
                            <Button
                                containerStyle={{ backgroundColor: isDarkMode ? "#333333" : "#FF6347" }}
                                textStyle={{ color: isDarkMode ? "#FAFAFA" : "#ffffff" }}>
                                Custom
                            </Button>

                        </View>
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
    row: { flexDirection: "row", gap: 10 }
});
