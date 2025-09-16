/**
 * TransparentStatusBarExample
 *
 * This screen demonstrates the usage of the `StatusBar` component with
 * the `transparent` variant.
 *
 * Demonstrates usage of the following props:
 * - `variant="transparent"`: Renders the status bar with a fully transparent background,
 *   allowing the app's content or background to show through.
 * - `barStyle="dark-content"`: Ensures the icons and text within the status bar remain
 *   visible on light backgrounds.
 *
 * Behavior:
 * - The status bar area itself is transparent, blending seamlessly with the app background.
 * - Because `SafeAreaView` omits the `"top"` edge, the content is rendered under the status bar.
 *   Adding `"top"` would push content below it if desired.
 *
 * Purpose:
 * - Provide a clear example of how to use a transparent status bar and configure
 *   its icon/text color for readability.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React from "react";
import { ThemeProvider, StatusBar, Button, Text } from "@geekyhawks/react-native-ui-components";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../../../App";
import { StyleSheet } from "react-native";

export function TransparentStatusBarExample() {
    const navigation = useNavigation<NavigationProp>();

    return (
        <ThemeProvider>
            <StatusBar variant="transparent" barStyle="dark-content" />
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
