/**
 * CheckBoxCustomExample
 *
 * Demonstrates **custom themed** CheckBoxes with light/dark variants and custom colors/sizes.
 *
 * Features:
 * - Controlled state
 * - Custom `color` and `size` variants
 * - Dark/light mode switching
 * - Custom label styles
 *
 * Author: Geeky Hawks FZE LLC
 */

import React, { useState } from "react";
import { ScrollView, StyleSheet, Switch, View } from "react-native";
import { CheckBox, ThemeProvider, createTheme, Text, defaultLightTheme, defaultSpacing } from "@geekyhawks/react-native-ui-components";
import { SafeAreaView } from "react-native-safe-area-context";

// Example custom font; replace with any font of your choice
const customFonts = "Courier";

const customLightTheme = createTheme({
    ...defaultLightTheme,
    colors: {
        ...defaultLightTheme.colors,
        primary: "#FF6347",
        secondary: "#4B0082",
        background: "#FFF0F5",
        text: "#4B0082",
    },
    fontFamily: "Courier",
});

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

export function CheckBoxCustomExample() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [selectedValues, setSelectedValues] = useState<Array<string | number>>([]);

    return (
        <ThemeProvider theme={isDarkMode ? customDarkTheme : customLightTheme}>
            <SafeAreaView
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
                    <Text>Custom CheckBoxes</Text>
                    <View style={styles.row}>
                        <CheckBox
                            value="option1"
                            label="Primary"
                            color="primary"
                            size="md"
                            selectedValues={selectedValues}
                            onChange={(val, checked) => setSelectedValues(prev => checked ? [...prev, val] : prev.filter(v => v !== val))}
                            labelTextStyle={{ fontSize: 16 }}
                        />
                        <CheckBox
                            value="option2"
                            label="Secondary"
                            color="secondary"
                            size="lg"
                            selectedValues={selectedValues}
                            onChange={(val, checked) => setSelectedValues(prev => checked ? [...prev, val] : prev.filter(v => v !== val))}
                            labelTextStyle={{ fontSize: 18 }}
                        />
                        <CheckBox
                            value="option3"
                            label="Disabled"
                            disabled
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    scrollContainer: { gap: 16, paddingBottom: 24 },
    toggleContainer: { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: 8, marginBottom: 16 },
    row: { flexDirection: "row", gap: 16, flexWrap: "wrap" },
});
