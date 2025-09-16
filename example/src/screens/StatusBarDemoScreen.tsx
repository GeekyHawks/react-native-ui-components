/**
 * StatusBarDemoScreen
 *
 * This screen serves as a **demo launcher** for exploring different variations
 * of the `StatusBar` component from `@geekyhawks/react-native-ui-components`.
 *
 * Features:
 * - Provides navigation buttons to dedicated demo screens:
 *   - Default
 *   - Light
 *   - Dark
 *   - Transparent
 *   - Custom
 *   - Translucent
 * - Uses the library's `Button` component for navigation.
 * - Keeps this screen simple as an **entry point** to multiple focused examples.
 *
 * Purpose:
 * - Act as a central hub for trying out all `StatusBar` examples.
 * - Help users quickly access both **basic usage** and **advanced customizations** 
 *   in separate, focused demo screens.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Button } from "@geekyhawks/react-native-ui-components";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../../App";

export default function StatusBarDemoScreen() {
    const navigation = useNavigation<NavigationProp>();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Button onPress={() => navigation.navigate("DefaultStatusBar")}
                style={styles.button}>
                Default
            </Button>
            <Button onPress={() => navigation.navigate("LightStatusBar")}
                style={styles.button}>
                Light
            </Button>
            <Button onPress={() => navigation.navigate("DarkStatusBar")}
                style={styles.button}>
                Dark
            </Button>
            <Button onPress={() => navigation.navigate("TransparentStatusBar")}
                style={styles.button}>
                Transparent
            </Button>
            <Button onPress={() => navigation.navigate("CustomStatusBar")}
                style={styles.button}>
                Custom
            </Button>
            <Button onPress={() => navigation.navigate("TranslucentStatusBar")}
                style={styles.button}>
                Translucent
            </Button>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: "stretch",
    },
    button: {
        marginVertical: 8,
    },
});
