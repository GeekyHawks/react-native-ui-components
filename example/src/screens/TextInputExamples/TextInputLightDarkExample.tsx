/**
 * TextInputLightDarkExample
 *
 * This screen demonstrates how the `TextInput` component adapts to **light and dark themes**.
 *
 * Demonstrates usage of:
 * - Theme integration: Switching between light and dark using a toggle
 * - `colorScheme` and `backgroundColor` changes automatically
 *
 * Author: Geeky Hawks FZE LLC
 */

import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Switch, KeyboardAvoidingView, Platform } from "react-native";
import { ThemeProvider, Text, defaultDarkTheme, defaultLightTheme, TextInput } from "@geekyhawks/react-native-ui-components";

export function TextInputLightDarkExample() {
    // For testing/demo purposes, we control dark mode manually here.
    // In real projects, you can use: const isDarkMode = useColorScheme() === "dark";
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <>
            {/* Using default light/dark themes; see Custom Example for theme customization */}
            <ThemeProvider theme={isDarkMode ? defaultDarkTheme : defaultLightTheme}>
                <KeyboardAvoidingView
                    style={[styles.container, {
                        // Set background color based on current theme (light or dark)
                        backgroundColor: isDarkMode ? defaultDarkTheme.colors.background
                            : defaultLightTheme.colors.background,
                    }]}
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                    keyboardVerticalOffset={Platform.OS === 'ios' ? 120 : 0}>

                    <View style={styles.toggleContainer}>
                        <Text>Dark Mode:</Text>
                        <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
                    </View>

                    <ScrollView
                        contentContainerStyle={{ gap: 16 }}
                        showsVerticalScrollIndicator={false}
                        keyboardShouldPersistTaps={"handled"}>

                        {/* Default TextInput */}
                        <TextInput
                            label="Default"
                            placeholder="Default InputText"
                        />

                        {/* Underline TextInput */}
                        <TextInput
                            label="Underline"
                            placeholder="Underline Example"
                            variant="underline"
                        />

                        {/* Filled TextInput */}
                        <TextInput
                            label="Filled"
                            placeholder="Filled Example"
                            variant="filled"
                        />

                        {/* Custom Colors TextInput */}
                        <TextInput
                            label="Custom"
                            placeholder="Custom Example"
                            placeholderTextColor={isDarkMode ? "red" : "brown"}
                            labelStyle={{ color: isDarkMode ? "orange" : "slateblue" }}
                            inputStyle={{ color: isDarkMode ? "tan" : "coral" }}
                            fontFamily={"Courier"}
                        />
                    </ScrollView>
                </KeyboardAvoidingView>
            </ThemeProvider>
        </>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    scrollContainer: { gap: 16, paddingBottom: 24 },
    toggleContainer: { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: 8, marginBottom: 16 },
});
