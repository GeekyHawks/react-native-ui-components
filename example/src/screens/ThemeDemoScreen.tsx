/**
 * ThemeDemoScreen
 *
 * This screen demonstrates the usage of theming utilities from
 * the `@geekyhawks/react-native-ui-components` library.
 *
 * Features:
 * - Provides three example variations for learning and exploration:
 *   1. Single Theme: Shows basic usage with a single applied theme.
 *   2. Light/Dark Theme: Demonstrates switching between light and dark themes.
 *   3. Custom Theme: Showcases creating a completely custom theme with
 *      custom colors, spacing, and text variants.
 * - Uses the library's `Button` component to switch between examples.
 * - Renders the selected example dynamically based on user selection.
 *
 * Purpose:
 * - Help users understand how to apply, switch, and customize themes
 *   using the library’s built-in tools in a clean, interactive way.
 * 
 * Author: Geeky Hawks FZE LLC
 */

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@geekyhawks/react-native-ui-components";
import SingleThemeExample from "./ThemeExamples/SingleThemeExample";
import LightDarkThemeExample from "./ThemeExamples/LightDarkThemeExample";
import CustomThemeExample from "./ThemeExamples/CustomThemeExample";

export default function ThemeDemoScreen() {
    const [selectedExample, setSelectedExample] = useState<"single" | "lightDark" | "custom">("single");

    const renderExample = () => {
        switch (selectedExample) {
            case "single":
                return <SingleThemeExample />;
            case "lightDark":
                return <LightDarkThemeExample />;
            case "custom":
                return <CustomThemeExample />;
        }
    };

    return (
        <SafeAreaView edges={["bottom", "left", "right"]} style={styles.container}>
            <View style={styles.tabContainer}>
                <Button onPress={() => setSelectedExample("single")}>
                    Single
                </Button>
                <Button onPress={() => setSelectedExample("lightDark")}>
                    Light/Dark
                </Button>
                <Button onPress={() => setSelectedExample("custom")}>
                    Custom
                </Button>
            </View>
            {renderExample()}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 8,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
});
