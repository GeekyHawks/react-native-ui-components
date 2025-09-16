/**
 * AppBarDemoScreen
 *
 * This screen demonstrates the usage of the `AppBar` component from
 * the `@geekyhawks/react-native-ui-components` library.
 *
 * Features:
 * - Provides three example variations for learning and exploration:
 *   1. Minimal: Shows basic usage with default app bar styles.
 *   2. Light/Dark: Demonstrates how the component adapts to light and dark themes.
 *   3. Custom: Showcases custom themes, variants, and icon usage.
 * - Uses the library's `Button` component to switch between examples.
 * - Renders the selected example dynamically based on user selection.
 *
 * Purpose:
 * - Help users understand both **basic usage** and **advanced customization**
 *   of the AppBar component in a clean, interactive way.
 * 
 * Author: Geeky Hawks FZE LLC
 */

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@geekyhawks/react-native-ui-components";
import { AppBarMinimalExample } from "./AppBarExamples/AppBarMinimalExample";
import { AppBarLightDarkExample } from "./AppBarExamples/AppBarLightDarkExample";
import { AppBarCustomExample } from "./AppBarExamples/AppBarCustomExample";

export default function AppBarDemoScreen() {
    const [selectedExample, setSelectedExample] = useState<"minimal" | "lightDark" | "custom">("minimal");

    const renderExample = () => {
        switch (selectedExample) {
            case "minimal":
                return <AppBarMinimalExample />;
            case "lightDark":
                return <AppBarLightDarkExample />;
            case "custom":
                return <AppBarCustomExample />;
        }
    };

    return (
        <SafeAreaView edges={["bottom", "left", "right"]} style={styles.container}>
            <View style={styles.tabContainer}>
                <Button onPress={() => setSelectedExample("minimal")}>
                    Minimal
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
