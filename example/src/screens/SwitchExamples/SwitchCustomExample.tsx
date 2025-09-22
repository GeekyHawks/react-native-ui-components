/**
 * SwitchCustomExample
 *
 * This screen demonstrates **advanced customization** of the `Switch` component,
 * including light and dark themes, custom colors, labels, and disabled states.
 *
 * Demonstrates usage of the following:
 * - `color`: Custom track and thumb colors
 * - `label` / `labelTextStyle`: Custom labels
 * - `disabled`: Disabled state styling
 * - Theme integration: Switching between light and dark custom themes
 *
 * Purpose:
 * - Help users understand **advanced customization** of Switch components
 *   with themes, colors, and labels.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Switch as RNSwitch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    ThemeProvider,
    Switch,
    Text,
    createTheme,
    defaultLightTheme,
    defaultSpacing,
} from "@geekyhawks/react-native-ui-components";

// Example custom font
const customFont = "Courier";

// Custom light theme
const customLightTheme = createTheme({
    ...defaultLightTheme,
    fontFamily: customFont,
    colors: {
        ...defaultLightTheme.colors,
        primary: "#FF6347",
        secondary: "#4B0082",
        surface: "#f0f0f0",
        onPrimary: "#ffffff",
        onSecondary: "#ffffff",
    },
});

// Custom dark theme
const customDarkTheme = createTheme({
    fontFamily: customFont,
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

export function SwitchCustomExample() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [switch1, setSwitch1] = useState(false);
    const [switch2, setSwitch2] = useState(true);
    const [switch3, setSwitch3] = useState(false);

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
                    <RNSwitch value={isDarkMode} onValueChange={setIsDarkMode} />
                </View>

                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Text>Custom Color Switches</Text>

                    <Switch
                        value={switch1}
                        onValueChange={setSwitch1}
                        label="Primary Color"
                        color="primary"
                    />

                    <Switch
                        value={switch2}
                        onValueChange={setSwitch2}
                        label="Secondary Color"
                        color="secondary"
                    />

                    <Text>Disabled Switch</Text>
                    <Switch
                        value={switch3}
                        onValueChange={setSwitch3}
                        label="Disabled Switch"
                        color="primary"
                        disabled
                    />

                    <Text>Custom Label Style</Text>
                    <Switch
                        value={switch1}
                        onValueChange={setSwitch1}
                        label="Custom Label"
                        labelTextStyle={{ color: isDarkMode ? "#FFD700" : "#4B0082", fontWeight: "bold" }}
                        color="secondary"
                    />

                    <Text>Standalone Light/Dark Behavior</Text>
                    <Switch
                        value={switch2}
                        onValueChange={setSwitch2}
                        label="Dynamic Color"
                        color={isDarkMode ? "secondary" : "primary"}
                    />
                </ScrollView>
            </SafeAreaView>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    toggleContainer: { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: 8, marginBottom: 16 },
    scrollContainer: { gap: 16, paddingBottom: 24 },
});
