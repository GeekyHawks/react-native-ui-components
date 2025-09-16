/**
 * CustomStatusBarExample
 *
 * This screen shows the usage of the `StatusBar` component with **custom** background color.
 *
 * Demonstrates:
 * - Rendering the `StatusBar` with custom `backgroundColor`.
 * - Integration with `ThemeProvider` to ensure theme consistency.
 * - Usage alongside `SafeAreaView` for proper layout handling.
 * - A simple `Button` for navigation back to the demo launcher screen.
 *
 * Purpose:
 * - Provide the **custom example** of the `StatusBar` component
 *   to show how it looks and behaves out-of-the-box.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React from "react";
import { ThemeProvider, StatusBar, Button, Text } from "@geekyhawks/react-native-ui-components";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../../../App";
import { StyleSheet } from "react-native";

export function CustomStatusBarExample() {
    const navigation = useNavigation<NavigationProp>();

    return (
        <ThemeProvider>
            <StatusBar backgroundColor="red" />
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
