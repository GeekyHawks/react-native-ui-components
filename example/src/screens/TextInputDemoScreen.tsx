/**
 * TextInputDemoScreen
 *
 * This screen demonstrates the usage of the `TextInput` component from
 * the `@geekyhawks/react-native-ui-components` library.
 *
 * Features:
 * - Provides three example variations for learning and exploration:
 *   1. Minimal: Shows basic usage with default input styles and variants.
 *   2. Light/Dark: Demonstrates how the component adapts to light and dark themes.
 *   3. Custom: Showcases custom themes, fonts, and custom input variants.
 * - Highlights usage of props such as `label`, `placeholder`, `variant`, 
 *   `helperText`, `error`, `secureTextEntry`, `passwordToggleIcons`, `multiline`, 
 *   `disabled`, `loading`, and custom styles.
 * - Renders the selected example dynamically based on user selection.
 *
 * Purpose:
 * - Help users understand both **basic usage** and **advanced customization**
 *   of the TextInput component in a clear, interactive way.
 * 
 * Author: Geeky Hawks FZE LLC
 */

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@geekyhawks/react-native-ui-components";
import { TextInputMinimalExample } from "./TextInputExamples/TextInputMinimalExample";
import { TextInputLightDarkExample } from "./TextInputExamples/TextInputLightDarkExample";
import { TextInputCustomExample } from "./TextInputExamples/TextInputCustomExample";

export default function TextInputDemoScreen() {
    const [selectedExample, setSelectedExample] = useState<"minimal" | "lightDark" | "custom">("minimal");

    const renderExample = () => {
        switch (selectedExample) {
            case "minimal":
                return <TextInputMinimalExample />;
            case "lightDark":
                return <TextInputLightDarkExample />;
            case "custom":
                return <TextInputCustomExample />;
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
