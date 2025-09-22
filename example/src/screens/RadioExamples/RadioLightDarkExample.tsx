/**
 * RadioLightDarkExample
 *
 * This screen demonstrates how the `Radio` component adapts to **light and dark themes**.
 *
 * Demonstrates usage of the following props:
 * - `value` / `selectedValue`: Current selected radio
 * - `onChange`: Callback for selection changes
 * - `color`: Theme-aware color variants
 * - `disabled`: Disabled state
 * - Theme integration: Shows switching between light and dark modes dynamically
 *
 * Purpose:
 * - Help users understand how to **dynamically style radios** for light/dark themes
 *   and how to apply custom colors when needed.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Switch } from "react-native";
import { Radio, defaultDarkTheme, defaultLightTheme, Text, ThemeProvider } from "@geekyhawks/react-native-ui-components";
import { SafeAreaView } from "react-native-safe-area-context";

export function RadioLightDarkExample() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string | number>("option1");

    return (
        <ThemeProvider theme={isDarkMode ? defaultDarkTheme : defaultLightTheme}>
            <SafeAreaView
                style={[
                    styles.container,
                    {
                        backgroundColor: isDarkMode
                            ? defaultDarkTheme.colors.background
                            : defaultLightTheme.colors.background,
                    },
                ]}
            >
                <View style={styles.toggleContainer}>
                    <Text>Dark Mode:</Text>
                    <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
                </View>
                <ScrollView contentContainerStyle={styles.scrollContainer}>

                    <Text>Default Radios</Text>
                    <View style={styles.row}>
                        <Radio
                            value="option1"
                            selectedValue={selectedValue}
                            onChange={setSelectedValue}
                            label="Option 1"
                        />
                        <Radio
                            value="option2"
                            selectedValue={selectedValue}
                            onChange={setSelectedValue}
                            label="Option 2"
                        />
                        <Radio
                            value="option3"
                            selectedValue={selectedValue}
                            onChange={setSelectedValue}
                            label="Option 3"
                        />
                    </View>

                    <Text>Theme-Aware Colors</Text>
                    <View style={styles.row}>
                        <Radio
                            value="option4"
                            selectedValue={selectedValue}
                            onChange={setSelectedValue}
                            label="Primary"
                            color={isDarkMode ? "text" : "primary"}
                        />
                        <Radio
                            value="option5"
                            selectedValue={selectedValue}
                            onChange={setSelectedValue}
                            label="Secondary"
                            color={isDarkMode ? "text" : "secondary"}
                        />
                    </View>

                    <Text>Disabled Radios</Text>
                    <View style={styles.row}>
                        <Radio
                            value="option6"
                            selectedValue={selectedValue}
                            onChange={setSelectedValue}
                            label="Disabled"
                            disabled
                        />
                        <Radio
                            value="option7"
                            selectedValue={selectedValue}
                            onChange={setSelectedValue}
                            label="Disabled Selected"
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
    toggleContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: 8,
        marginBottom: 16,
    },
    row: { flexDirection: "row", gap: 16, flexWrap: "wrap" },
});
