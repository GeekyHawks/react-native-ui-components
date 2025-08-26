/**
 * TextDemoScreen
 *
 * This screen demonstrates the usage of the `Text` component from
 * the `@geekyhawks/react-native-ui-components` library.
 *
 * Features:
 * - Provides three example variations for learning and exploration:
 *   1. Minimal: Shows basic usage with default text variants.
 *   2. Light/Dark: Demonstrates how the component adapts to light and dark themes.
 *   3. Custom: Showcases custom themes and custom text variants.
 * - Uses the library's `Button` component to switch between examples.
 * - Renders the selected example dynamically based on user selection.
 *
 * Purpose:
 * - Help users understand both **basic usage** and **advanced customization**
 *   of the Text component in a clean, interactive way.
 * 
 * Author: Geeky Hawks FZE LLC
 */

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@geekyhawks/react-native-ui-components";
import TextMinimalExample from "./TextExamples/TextMinimalExample";
import TextLightDarkThemeExample from "./TextExamples/TextLightDarkThemeExample";
import TextCustomExample from "./TextExamples/TextCustomExample";

export default function TextDemoScreen() {
    const [selectedExample, setSelectedExample] = useState<"minimal" | "lightDark" | "custom">("minimal");

    const renderExample = () => {
        switch (selectedExample) {
            case "minimal":
                return <TextMinimalExample />;
            case "lightDark":
                return <TextLightDarkThemeExample />;
            case "custom":
                return <TextCustomExample />;
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
