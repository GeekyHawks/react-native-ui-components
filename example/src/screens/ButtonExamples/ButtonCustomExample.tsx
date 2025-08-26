/**
 * ButtonCustomExample
 *
 * This screen demonstrates how to use the `Button` component with **custom themes**,
 * including light and dark variants, custom sizes, shapes, and color schemes.
 *
 * Demonstrates usage of the following props and features:
 * - `size` / `shape`: Custom button sizes and shapes
 * - `colorScheme`: Apply different colors based on theme
 * - `leftIcon` / `rightIcon`: Adding icons to buttons
 * - `containerStyle` / `textStyle`: Override styles per button
 * - Theme integration: Switching between light and dark custom themes
 *
 * Purpose:
 * - Help users understand **advanced customization** of buttons
 *   using custom themes, variants, and icons.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Switch, View } from "react-native";
import { ThemeProvider, Text, Theme, ButtonSizeVariants, ButtonShapeVariants, Button } from "@geekyhawks/react-native-ui-components";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@react-native-vector-icons/material-icons";

// Example custom font; replace with any font of your choice
const customFonts = "Courier";

/**
 * Custom light theme
 * You can customize colors and optionally use a different fontFamily than the dark theme.
 */
const customLightTheme: Theme = {
    fontFamily: customFonts,
    colors: {
        text: "#4B0082",
        background: "#FFF0F5",
        primary: "#FF6347",
        secondary: "#4B0082",
        error: "#FF0000",
        border: "#dee2e6",
        muted: "#6c757d",
    },
};

/**
 * Custom dark theme
 * You can customize colors and optionally use a different fontFamily than the light theme.
 */
const customDarkTheme: Theme = {
    fontFamily: customFonts,
    colors: {
        text: "#FFD700",
        background: "#2F4F4F",
        primary: "#FFA07A",
        secondary: "#FFD700",
        error: "#FF6B6B",
        border: "#333333",
        muted: "#AAAAAA",
    }
};

/**
 * Custom button size variants to override default styles like font size, padding.
 * Use these with the `Button` component via the `size` prop.
 */
const customButtonSizeVariants: ButtonSizeVariants = {
    bigButton: { container: { paddingVertical: 18, paddingHorizontal: 24 }, text: { fontSize: 18 } },
};

/**
* Custom button shape variants to override default styles like border radius.
* Use these with the `Button` component via the `shape` prop.
*/
const customButtonShapeVariants: ButtonShapeVariants = {
    rounded: { borderRadius: 20 },
};

export function ButtonCustomExample() {
    // For testing/demo purposes, we control dark mode manually here.
    // In real projects, you can use: const isDarkMode = useColorScheme() === "dark";
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <>
            {/* For single theme: wrap with <ThemeProvider theme={customLightTheme} /> */}
            {/* For light/dark custom themes: wrap with <ThemeProvider theme={isDarkMode ? customDarkTheme : customLightTheme} /> */}
            <ThemeProvider
                theme={isDarkMode ? customDarkTheme : customLightTheme}
                buttonSizeVariants={customButtonSizeVariants}
                buttonShapeVariants={customButtonShapeVariants}
            >
                <SafeAreaView
                    style={[
                        styles.container,
                        { backgroundColor: isDarkMode ? customDarkTheme.colors.background : customLightTheme.colors.background }
                    ]}
                >
                    <View style={styles.toggleContainer}>
                        <Text>Dark Mode:</Text>
                        <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
                    </View>

                    <ScrollView contentContainerStyle={{ gap: 16 }}>

                        {/* Button with custom size and shape */}
                        <Button size="bigButton" shape="rounded">
                            Custom Button
                        </Button>

                        {/* Button with custom size, shape and colorScheme */}
                        <Button size="bigButton" shape="rounded" colorScheme="secondary">
                            Secondary
                        </Button>

                        {/* Button with custom size, colorScheme and left icon */}
                        <Button
                            size="bigButton"
                            colorScheme="secondary"
                            onPress={() => console.log("Pressed!")}
                            containerStyle={{ marginTop: 10 }}
                            leftIcon={
                                <Image
                                    source={require("../../assets/press-button.png")}
                                    tintColor={isDarkMode ? "#000000" : "#FFFFFF"}
                                    style={{ width: 20, height: 20, marginRight: 6 }}
                                />
                            }
                        >
                            Left Icon
                        </Button>

                        {/* Outline Button with custom shape, colorScheme and right icon */}
                        <Button
                            shape="rounded"
                            variant="outline"
                            colorScheme="secondary"
                            containerStyle={{ marginTop: 20 }}
                            animation="scale"
                            rightIcon={
                                <Image
                                    source={require("../../assets/send.png")}
                                    tintColor={isDarkMode ? customDarkTheme.colors.secondary : customLightTheme.colors.secondary}
                                    style={{ width: 20, height: 20, marginRight: 6 }}
                                />
                            }
                        >
                            Right Icon
                        </Button>

                        {/* Button with custom theme and MaterialIcon */}
                        {/* Make sure MaterialIcons is setup before using */}
                        <Button leftIcon={<MaterialIcons name="home" color="white" size={20} />}>
                            Left Material Icon
                        </Button>
                    </ScrollView>
                </SafeAreaView>
            </ThemeProvider>
        </>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    toggleContainer: { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: 8, marginBottom: 16 },
    scrollContainer: { gap: 16, paddingBottom: 24 },
});
