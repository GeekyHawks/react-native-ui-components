/**
 * TranslucentStatusBarExample
 *
 * This screen demonstrates the usage of the `StatusBar` component with the
 * `translucent` and `hideAppBar` props enabled.
 *
 * Demonstrates usage of the following props:
 * - `translucent`: Makes the status bar transparent, allowing content to render behind it.
 * - `hideAppBar`: Hides the default AppBar, so content begins directly under the status bar area.
 *
 * Behavior:
 * - On both iOS and Android, the content (e.g., the orange text block) appears
 *   underneath the status bar.
 * - Because `SafeAreaView` omits the `"top"` edge in this example, the UI does
 *   not automatically adjust for the status bar height. Adding `"top"` would
 *   keep content below it.
 *
 * Purpose:
 * - Help users understand how to use a translucent status bar and what effect
 *   it has on layout across iOS and Android.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React from "react";
import { ThemeProvider, StatusBar, Button, Text } from "@geekyhawks/react-native-ui-components";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../../../App";
import { StyleSheet } from "react-native";

export function TranslucentStatusBarExample() {
    const navigation = useNavigation<NavigationProp>();

    return (
        <ThemeProvider>
            <StatusBar translucent hideAppBar />
            <SafeAreaView edges={["bottom", "left", "right"]}
                style={styles.container}>
                <Text style={{ backgroundColor: "orange", width: "100%", marginStart: 16 }}>
                    No Status Bar
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
