/**
 * MakeStylesLightDarkExample
 *
 * Demonstrates how `makeStyles` integrates seamlessly with light/dark
 * themes. The styles automatically update when the active theme changes.
 *
 * Features:
 * - Switch between light and dark themes using a switch.
 * - Styles (colors, borders, spacing) adapt to the current theme.
 * - Uses theme-aware tokens (`colors`, `spacing`, `fontFamily`).
 *
 * Purpose:
 * - Help users understand how to leverage `makeStyles` with the built-in
 *   `defaultLightTheme` and `defaultDarkTheme` for effortless light/dark
 *   mode support without defining custom themes.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React, { useState } from "react";
import { View, Text, Switch } from "react-native";
import {
    ThemeProvider,
    defaultLightTheme,
    defaultDarkTheme,
    makeStyles,
} from "@geekyhawks/react-native-ui-components";

export default function MakeStylesLightDarkExample() {
    // For testing/demo purposes, we control dark mode manually here.
    // In real projects, you can use: const isDarkMode = useColorScheme() === "dark";
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <ThemeProvider theme={isDarkMode ? defaultDarkTheme : defaultLightTheme}>
            <InnerExample isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </ThemeProvider>
    );
}

function InnerExample({ isDarkMode, setIsDarkMode }: { isDarkMode: boolean; setIsDarkMode: (v: boolean) => void }) {
    const styles = useStyles(); // ✅ inside ThemeProvider → always uses active theme

    return (
        <View style={styles.container}>
            {/* Toggle Switch for Dark Mode */}
            <View style={styles.toggleContainer}>
                <Text style={{ color: styles.label.color }}>Dark Mode:</Text>
                <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
            </View>

            <View style={styles.box}>
                <Text style={styles.text}>
                    Theme-aware styles adapt to light & dark 🎨
                </Text>
            </View>
        </View>
    );
}

// Define theme-aware styles
const useStyles = makeStyles((theme) => ({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.background,
    },
    toggleContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    label: {
        color: theme.colors.text,
        marginRight: 8,
    },
    box: {
        padding: theme.spacing.md,
        borderWidth: 2,
        borderColor: theme.colors.primary,
        borderRadius: 8,
        backgroundColor: theme.colors.secondary,
    },
    text: {
        fontFamily: theme.fontFamily,
        color: theme.colors.text,
        fontSize: 16,
    },
}));
