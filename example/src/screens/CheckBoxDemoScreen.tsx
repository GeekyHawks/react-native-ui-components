/**
 * CheckBoxDemoScreen
 *
 * This screen demonstrates the usage of the `CheckBox` component from
 * the `@geekyhawks/react-native-ui-components` library.
 *
 * Features:
 * - Provides three example variations for learning and exploration:
 *   1. Minimal: Basic standalone usage with default checkbox.
 *   2. Light/Dark: Shows adaptation to light and dark themes.
 *   3. Custom: Demonstrates custom colors, sizes, and styling.
 * - Uses the library's `CheckBox` component to switch between examples.
 * - Renders the selected example dynamically based on user selection.
 *
 * Purpose:
 * - Help users understand both **basic usage** and **advanced customization**
 *   of the CheckBox component in a clean, interactive way.
 * 
 * Author: Geeky Hawks FZE LLC
 */

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@geekyhawks/react-native-ui-components";
import { CheckBoxMinimalExample } from "./CheckBoxExamples/CheckBoxMinimalExample";
import { CheckBoxLightDarkExample } from "./CheckBoxExamples/CheckBoxLightDarkExample";
import { CheckBoxCustomExample } from "./CheckBoxExamples/CheckBoxCustomExample";

export default function CheckBoxDemoScreen() {
    const [selectedExample, setSelectedExample] = useState<"minimal" | "lightDark" | "custom">("minimal");

    const renderExample = () => {
        switch (selectedExample) {
            case "minimal":
                return <CheckBoxMinimalExample />;
            case "lightDark":
                return <CheckBoxLightDarkExample />;
            case "custom":
                return <CheckBoxCustomExample />;
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
