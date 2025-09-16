/**
 * AppBarLightDarkExample
 *
 * This screen demonstrates how the `AppBar` component adapts to **light and dark themes**.
 *
 * Demonstrates usage of the following props:
 * - `variant`: default, transparent, elevated
 * - `title` / `subTitle`: Display text in the AppBar
 * - `leftIcon` / `rightIcon`: Icons displayed on left or right
 * - Theme integration: Shows switching between light and dark modes using a toggle
 *
 * Purpose:
 * - Help users understand how to **dynamically style AppBar** for light/dark themes
 *   and how to apply custom colors or icons when needed.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Switch, Image } from "react-native";
import { AppBar, defaultDarkTheme, defaultLightTheme, Text, ThemeProvider } from "@geekyhawks/react-native-ui-components";

export function AppBarLightDarkExample() {
    // For testing/demo purposes, we control dark mode manually here.
    // In real projects, you can use: const isDarkMode = useColorScheme() === "dark";
    const [isDarkMode, setIsDarkMode] = useState(false);
    const theme = isDarkMode ? defaultDarkTheme : defaultLightTheme;

    return (
        <>
            <ThemeProvider theme={theme}>
                <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
                    <View style={styles.toggleContainer}>
                        <Text>Dark Mode:</Text>
                        <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
                    </View>
                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                        {/* Default AppBars */}
                        <AppBar title="Default" />
                        <AppBar title="Transparent" variant="transparent" />
                        <AppBar title="Elevated" variant="elevated" />

                        {/* AppBars with Icons */}
                        <AppBar
                            title="Left Icon"
                            leftIcon={<Image source={require("../../assets/back.png")} style={{ width: 24, height: 24 }} />}
                        />
                        <AppBar
                            title="Right Icon"
                            rightIcon={<Image source={require("../../assets/send.png")} style={{ width: 24, height: 24 }} />}
                        />
                        <AppBar
                            title="Both Icons"
                            leftIcon={<Image source={require("../../assets/back.png")} style={{ width: 24, height: 24 }} />}
                            rightIcon={<Image source={require("../../assets/send.png")} style={{ width: 24, height: 24 }} />}
                        />

                        {/* AppBars with Subtitles */}
                        <AppBar
                            title="Main Title"
                            subTitle="Subtitle here"
                            leftIcon={<Image source={require("../../assets/back.png")} style={{ width: 24, height: 24 }} />}
                        />
                        <AppBar
                            title="Another Title"
                            subTitle="Secondary text"
                            variant="elevated"
                        />
                    </ScrollView>
                </View>
            </ThemeProvider>
        </>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    scrollContainer: { gap: 16, paddingBottom: 24 },
    toggleContainer: { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: 8, marginVertical: 16 }
});
