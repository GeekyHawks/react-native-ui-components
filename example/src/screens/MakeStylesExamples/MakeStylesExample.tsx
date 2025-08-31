/**
 * MakeStylesExample
 *
 * This screen shows a **minimal example** of using `makeStyles`.
 *
 * Demonstrates:
 * - Defining reusable styles with `makeStyles`
 * - Consuming theme values (colors, spacing, fontFamily)
 * - Applying styles in a component
 *
 * Purpose:
 * - Teach how to **encapsulate theme-aware styles**
 * - Avoid inline styles by centralizing logic
 *
 * Author: Geeky Hawks FZE LLC
 */

import React from "react";
import { View } from "react-native";
import { ThemeProvider, defaultLightTheme, Text, makeStyles } from "@geekyhawks/react-native-ui-components";

// 1. Create styles with `makeStyles`
const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.colors.background,
        padding: theme.spacing.lg,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: theme.colors.border,
        margin: theme.spacing.md,
    },
    heading: {
        color: theme.colors.primary,
        fontFamily: theme.fontFamily,
        fontSize: 22,
        textAlign: "center",
        marginBottom: theme.spacing.sm,
    },
    body: {
        color: theme.colors.text,
        fontFamily: theme.fontFamily,
        textAlign: "center",
    },
}));

// 2. Component that uses the styles
function ThemedCard() {
    const styles = useStyles(); // ✅ inside ThemeProvider → always uses active theme

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Styled with makeStyles 🎨</Text>
            <Text style={styles.body}>
                This component is fully theme-aware without inline styles.
            </Text>
        </View>
    );
}

// 3. Wrap with ThemeProvider (default theme)
export default function MakeStylesExample() {
    return (
        <ThemeProvider theme={defaultLightTheme}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ThemedCard />
            </View>
        </ThemeProvider>
    );
}
