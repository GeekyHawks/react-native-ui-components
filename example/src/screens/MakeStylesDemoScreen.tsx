/**
 * MakeStylesDemoScreen
 *
 * This screen demonstrates the usage of `makeStyles` from
 * the `@geekyhawks/react-native-ui-components` library.
 *
 * Features:
 * - Provides three example variations for learning and exploration:
 *   1. Basic Example: Shows how to define and use theme-aware styles
 *      using `makeStyles` instead of inline styles.
 *   2. Light/Dark Example: Demonstrates how styles adapt automatically
 *      when toggling between the built-in light and dark themes.
 *   3. Custom Light/Dark Example: Shows how to create your own custom
 *      light and dark themes and apply them with `makeStyles`.
 *
 * Purpose:
 * - Help users understand how to create reusable, theme-aware styles
 *   using `makeStyles` in a clean, centralized way.
 * - Illustrates both built-in and fully customized theme scenarios.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@geekyhawks/react-native-ui-components";
import MakeStylesExample from "./MakeStylesExamples/MakeStylesExample";
import MakeStylesLightDarkExample from "./MakeStylesExamples/MakeStylesLightDarkExample";
import MakeStylesCustomExample from "./MakeStylesExamples/MakeStylesCustomExample";

export default function MakeStylesDemoScreen() {
    const [selectedExample, setSelectedExample] = useState<"basic" | "lightDark" | "custom">("basic");

    const renderExample = () => {
        switch (selectedExample) {
            case "basic":
                return <MakeStylesExample />;
            case "lightDark":
                return <MakeStylesLightDarkExample />;
            case "custom":
                return <MakeStylesCustomExample />;
        }
    };

    return (
        <SafeAreaView edges={["bottom", "left", "right"]} style={styles.container}>
            <View style={styles.tabContainer}>
                <Button onPress={() => setSelectedExample("basic")}>
                    Basic
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
