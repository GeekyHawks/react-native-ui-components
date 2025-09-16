/**
 * LightStatusBarExample
 *
 * This screen demonstrates the `StatusBar` component with the **light variant** applied.
 *
 * Demonstrates:
 * - Rendering the `StatusBar` using `variant="light"` for light content styling.
 * - Integration with `ThemeProvider` to ensure theme consistency.
 * - Usage alongside `SafeAreaView` for proper layout handling.
 * - A simple `Button` for navigation back to the demo launcher screen.
 *
 * Purpose:
 * - Help users understand how to configure the `StatusBar` for
 *   **light mode / light-themed UIs** using the `variant` prop.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React from "react";
import { ThemeProvider, StatusBar, Button, Text } from "@geekyhawks/react-native-ui-components";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../../../App";
import { StyleSheet } from "react-native";

export function LightStatusBarExample() {
    const navigation = useNavigation<NavigationProp>();

    return (
        <ThemeProvider>
            <StatusBar variant="light" />
            <SafeAreaView edges={["bottom", "left", "right"]}
                style={styles.container}>
                <Text>
                    👆 See the StatusBar above
                </Text>
                <Button
                    onPress={navigation.goBack}
                    fullWidth
                    containerStyle={styles.button}>
                    Go Back
                </Button>
            </SafeAreaView>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", marginTop: 16 },
    button: { marginHorizontal: 16, marginVertical: 16 }
});
