/**
 * SingleThemeExample
 *
 * This screen shows a **minimal example** of using theming with the library.
 *
 * Demonstrates:
 * - Wrapping your app with `ThemeProvider` using a built-in theme (e.g. `defaultLightTheme`)
 * - Accessing theme values (colors, spacing, fontFamily) via `useTheme`
 * - Applying theme-driven styles in components
 *
 * Purpose:
 * - Provide a **quick-start / beginner-friendly example**
 *   without creating or overriding custom themes.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React from "react";
import { View, StyleSheet } from "react-native";
import { ThemeProvider, useTheme, defaultLightTheme, Text } from "@geekyhawks/react-native-ui-components";

// 1. Component consuming the theme
function ThemedBox() {
    const { theme } = useTheme();

    return (
        <View
            style={{
                backgroundColor: theme.colors.background,
                padding: theme.spacing.lg,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: theme.colors.border,
                shadowColor: theme.colors.text,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 2,
                margin: theme.spacing.md,
            }}
        >
            <Text
                variant="h1"
                style={{ color: theme.colors.text, fontFamily: theme.fontFamily, textAlign: "center" }}>
                Example
            </Text>
            <Text
                style={{ color: theme.colors.text, fontFamily: theme.fontFamily, marginTop: theme.spacing.md }}>
                This box uses theme colors, spacing, and font styles 🎨
            </Text>
        </View>
    );
}

// 2. Wrap the app in ThemeProvider with a built-in theme
export default function App() {
    return (
        <ThemeProvider theme={defaultLightTheme}>
            <View style={styles.container}>
                <ThemedBox />
            </View>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
