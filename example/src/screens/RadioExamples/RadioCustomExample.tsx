/**
 * RadioCustomExample
 *
 * This screen demonstrates how to use the `Radio` component with **custom themes**,
 * including light and dark variants, custom sizes, colors, and layout options.
 *
 * Demonstrates usage of the following props and features:
 * - `size` / `color` / `labelStyle`: Custom radio sizes, colors, and text styles
 * - `disabled`: Disabled radios
 * - `selectedValue` / `onChange`: Controlled selection state
 * - Theme integration: Switching between light and dark custom themes
 *
 * Purpose:
 * - Help users understand **advanced customization** of radios
 *   using custom themes, colors, and layout options.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React, { useState } from "react";
import { ScrollView, StyleSheet, Switch, View, Text as RNText } from "react-native";
import { ThemeProvider, Radio, defaultLightTheme, createTheme, defaultSpacing, Text } from "@geekyhawks/react-native-ui-components";
import { SafeAreaView } from "react-native-safe-area-context";

// Example custom font; replace with any font of your choice
const customFonts = "Courier";

/**
 * Custom light theme for demonstration
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
        xxl: 40, // Custom spacing
    },
});

export function RadioCustomExample() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string | number>("option1");

    return (
        <ThemeProvider theme={isDarkMode ? customDarkTheme : customLightTheme}>
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
                    <Text>Custom Radios</Text>
                    <View style={styles.row}>
                        <Radio
                            value="option1"
                            selectedValue={selectedValue}
                            onChange={setSelectedValue}
                            label="Primary"
                            color={isDarkMode ? customDarkTheme.colors.primary : customLightTheme.colors.primary}
                        />
                        <Radio
                            value="option2"
                            selectedValue={selectedValue}
                            onChange={setSelectedValue}
                            label="Secondary"
                            color={isDarkMode ? customDarkTheme.colors.secondary : customLightTheme.colors.secondary}
                        />
                        <Radio
                            value="option3"
                            selectedValue={selectedValue}
                            onChange={setSelectedValue}
                            label="Error"
                            color={isDarkMode ? customDarkTheme.colors.error : customLightTheme.colors.error}
                        />
                    </View>

                    <Text>Disabled Radios</Text>
                    <View style={styles.row}>
                        <Radio
                            value="option4"
                            selectedValue={selectedValue}
                            onChange={setSelectedValue}
                            label="Disabled"
                            disabled
                        />
                        <Radio
                            value="option5"
                            selectedValue={selectedValue}
                            onChange={setSelectedValue}
                            label="Disabled Selected"
                            disabled
                        />
                    </View>

                    <Text>Custom Label Styles</Text>
                    <View style={styles.row}>
                        <Radio
                            value="option6"
                            selectedValue={selectedValue}
                            onChange={setSelectedValue}
                            label="Custom Label"
                            labelTextStyle={{
                                fontSize: 16,
                                fontFamily: customFonts,
                                color: isDarkMode ? "#FFD700" : "#4B0082",
                            }}
                        />
                        <Radio
                            value="option7"
                            selectedValue={selectedValue}
                            onChange={setSelectedValue}
                            label="Large Label"
                            labelTextStyle={{
                                fontSize: 20,
                                fontFamily: customFonts,
                                color: isDarkMode ? "#FFA07A" : "#FF6347",
                            }}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    toggleContainer: { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: 8, marginBottom: 16 },
    scrollContainer: { gap: 16, paddingBottom: 24 },
    row: { flexDirection: "row", gap: 16, flexWrap: "wrap" },
});
