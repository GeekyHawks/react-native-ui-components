/**
 * FloatingLabelDemoScreen
 *
 * This screen demonstrates the usage of the `FloatingLabelTextInput` component from
 * the `@geekyhawks/react-native-ui-components` library.
 *
 * Features:
 * - Provides three example variations for learning and exploration:
 *   1. Minimal: Shows basic usage with floating labels and default variants.
 *   2. Light/Dark: Demonstrates how the floating label and input adapt to light and dark themes.
 *   3. Custom: Showcases custom themes, animations, and input variants with floating labels.
 * - Highlights usage of props such as `label`, `placeholder`, `variant`, `helperText`, 
 *   `error`, `secureTextEntry`, `passwordToggleIcons`, `multiline`, `disabled`, 
 *   `loading`, and custom styles.
 * - Demonstrates smooth floating label animation when the input is focused or has a value.
 * - Renders the selected example dynamically based on user selection.
 *
 * Purpose:
 * - Help users understand both **basic usage** and **advanced customization**
 *   of the FloatingLabelTextInput component in an interactive, visual way.
 * 
 * Author: Geeky Hawks FZE LLC
 */

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@geekyhawks/react-native-ui-components";
import { FloatingLabelMinimalExample } from "./FloatingLabelTextInputExamples/FloatingLabelMinimalExample";
import { FloatingLabelLightDarkExample } from "./FloatingLabelTextInputExamples/FloatingLabelLightDarkExample";
import { FloatingLabelCustomExample } from "./FloatingLabelTextInputExamples/FloatingLabelCustomExample";

export default function FloatingLabelDemoScreen() {
    const [selectedExample, setSelectedExample] = useState<"minimal" | "lightDark" | "custom">("minimal");

    const renderExample = () => {
        switch (selectedExample) {
            case "minimal":
                return <FloatingLabelMinimalExample />;
            case "lightDark":
                return <FloatingLabelLightDarkExample />;
            case "custom":
                return <FloatingLabelCustomExample />;
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
