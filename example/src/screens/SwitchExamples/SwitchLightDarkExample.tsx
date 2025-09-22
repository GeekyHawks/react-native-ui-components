/**
 * SwitchLightDarkExample
 *
 * This screen demonstrates how the `Switch` component adapts to **light and dark themes**.
 *
 * Demonstrates usage of:
 * - `value` / `onValueChange`
 * - Light/Dark theme integration
 * - Optional labels
 *
 * Purpose:
 * - Help users understand dynamic theming for switches.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Switch as RNSwitch } from "react-native";
import { ThemeProvider, Switch, Text, defaultLightTheme, defaultDarkTheme } from "@geekyhawks/react-native-ui-components";
import { SafeAreaView } from "react-native-safe-area-context";

export function SwitchLightDarkExample() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [switchValue, setSwitchValue] = useState(false);

    return (
        <ThemeProvider theme={isDarkMode ? defaultDarkTheme : defaultLightTheme}>
            <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? defaultDarkTheme.colors.background : defaultLightTheme.colors.background }]}>
                
                <View style={styles.toggleContainer}>
                    <Text>Dark Mode:</Text>
                    <RNSwitch value={isDarkMode} onValueChange={setIsDarkMode} />
                </View>

                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Text>Themed Switch</Text>
                    <Switch
                        value={switchValue}
                        onValueChange={setSwitchValue}
                        label="Toggle me"
                    />

                    <Text>Disabled Themed Switch</Text>
                    <Switch
                        value={true}
                        onValueChange={() => {}}
                        label="Disabled"
                        disabled
                    />
                </ScrollView>
            </SafeAreaView>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    scrollContainer: { gap: 16, paddingBottom: 24 },
    toggleContainer: { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: 8, marginBottom: 16 },
});
