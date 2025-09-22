/**
 * CheckBoxLightDarkExample
 *
 * Demonstrates how `CheckBox` adapts to **light/dark themes**.
 *
 * Features:
 * - Controlled checkboxes
 * - Color adaptation using `color` prop
 * - Manual dark/light mode switching
 *
 * Author: Geeky Hawks FZE LLC
 */

import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Switch } from "react-native";
import { CheckBox, ThemeProvider, Text, defaultLightTheme, defaultDarkTheme } from "@geekyhawks/react-native-ui-components";
import { SafeAreaView } from "react-native-safe-area-context";

export function CheckBoxLightDarkExample() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [selectedValues, setSelectedValues] = useState<Array<string | number>>([]);

    return (
        <ThemeProvider theme={isDarkMode ? defaultDarkTheme : defaultLightTheme}>
            <SafeAreaView
                style={[
                    styles.container,
                    { backgroundColor: isDarkMode ? defaultDarkTheme.colors.background : defaultLightTheme.colors.background }
                ]}
            >
                <View style={styles.toggleContainer}>
                    <Text>Dark Mode:</Text>
                    <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
                </View>

                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Text>Theme-aware CheckBoxes</Text>
                    <View style={styles.row}>
                        <CheckBox
                            value="option1"
                            label="Primary"
                            color="primary"
                            selectedValues={selectedValues}
                            onChange={(val, checked) => setSelectedValues(prev => checked ? [...prev, val] : prev.filter(v => v !== val))}
                        />
                        <CheckBox
                            value="option2"
                            label="Secondary"
                            color="secondary"
                            selectedValues={selectedValues}
                            onChange={(val, checked) => setSelectedValues(prev => checked ? [...prev, val] : prev.filter(v => v !== val))}
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
