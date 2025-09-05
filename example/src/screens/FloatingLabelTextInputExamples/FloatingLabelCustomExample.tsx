/**
 * FloatingLabelCustomExample
 *
 * This screen demonstrates **custom themed FloatingLabelTextInputs** with:
 * - Custom theme (primary, secondary, background, border colors)
 * - Custom text variants (e.g. italic `customTitle`)
 * - Custom button size and shape variants used alongside inputs
 * - Integration of floating labels in a branded theme
 *
 * Purpose:
 * - Show how floating text inputs can be styled to fit **brand identity**
 * - Illustrate extending base theme with new text/button variants
 * - Provide an example of combining floating inputs with custom UI elements
 *
 * Author: Geeky Hawks FZE LLC
 */

import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Switch, View } from "react-native";
import { ThemeProvider, Text, FloatingLabelTextInput, createTheme, defaultSpacing, defaultLightTheme, FloatingLabelTextInputSizeVariants, defaultFloatingLabelTextInputSizeVariants } from "@geekyhawks/react-native-ui-components";

// Example custom font; replace with any font of your choice
const customFonts = "Courier";

/**
 * Custom light theme
 * You can customize colors and optionally use a different fontFamily than the dark theme.
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
        surface: "#4B0082",
        onSurface: "#FFF0F5",
    },
});

/**
 * Custom dark theme
 * You can customize colors and optionally use a different fontFamily than the light theme.
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
        surface: "#FF6B6B",
        onSurface: "#FFD700",
    },
    spacing: {
        ...defaultSpacing,
        xxl: 40, // Custom Spacing
    },
});

/**
 * Custom floating label text input size variants to override default styles like font size, padding.
 * Use these with the `FloatingLabelTextInput` component via the `size` prop.
 */
const customFloatingSizeVariants: FloatingLabelTextInputSizeVariants = {
    ...defaultFloatingLabelTextInputSizeVariants,  // extend existing ones
    xl: { fontSize: 20, paddingVertical: 14, labelFontSize: 16 },
};

export function FloatingLabelCustomExample() {
    // For testing/demo purposes, we control dark mode manually here.
    // In real projects, you can use: const isDarkMode = useColorScheme() === "dark";
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Select theme based on dark / light mode
    const theme = isDarkMode ? customDarkTheme : customLightTheme;

    return (
        <ThemeProvider theme={theme}
            floatingLabelTextInputSizeVariants={customFloatingSizeVariants}>
            <KeyboardAvoidingView
                style={{
                    flex: 1,
                    padding: 16,
                    backgroundColor: theme.colors.background,
                }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 120 : 0}>

                <View style={styles.toggleContainer}>
                    <Text>Dark Mode:</Text>
                    <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
                </View>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps={"handled"}>

                    {/* Default FloatingLabelTextInput with Custom Font */}
                    <FloatingLabelTextInput
                        label="Custom"
                        variant="outline"
                        size="xl"
                        helperText="Styled with custom theme"
                        containerStyle={{ marginTop: 20 }}
                    />

                    {/* Filled FloatingLabelTextInput */}
                    <FloatingLabelTextInput
                        label="Name"
                        variant="filled"
                        containerStyle={{ marginTop: 20 }}
                    />

                    {/* Underline FloatingLabelTextInput with Custom Font */}
                    <FloatingLabelTextInput
                        label="Custom Username"
                        variant="underline"
                        helperText="Pick a nice username"
                        containerStyle={{ marginTop: 20 }}
                    />

                </ScrollView>
            </KeyboardAvoidingView>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    toggleContainer: { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: 8, marginBottom: 16 },
    scrollContainer: { gap: 16, paddingBottom: 24 },
});
