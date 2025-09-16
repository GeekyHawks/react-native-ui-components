/**
 * HomeScreen
 *
 * Serves as the main entry point of the example app.
 * 
 * Features:
 * - Provides navigation buttons to the different component demo screens:
 *   - Theme Demo
 *   - Make Styles Demo
 *   - StatusBar Demo
 *   - AppBar Demo
 *   - Text Component Demo
 *   - Button Component Demo
 *   - TextInput Component Demo
 *   - FloatingLabelTextInput Component Demo
 * - Uses the library's `Button` component for navigation.
 *
 * Purpose:
 * - Allows users to quickly access and explore examples for each UI component.
 * 
 * Author: Geeky Hawks FZE LLC
 */

import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Button } from "@geekyhawks/react-native-ui-components";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../../App";

export default function HomeScreen() {
    const navigation = useNavigation<NavigationProp>();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Button
                style={styles.button}
                onPress={() => navigation.navigate("Theme")}
            >
                Theme
            </Button>

            <Button
                style={styles.button}
                onPress={() => navigation.navigate("Styles")}
            >
                Make Styles
            </Button>

            <Button
                style={styles.button}
                onPress={() => navigation.navigate("StatusBar")}
            >
                StatusBar
            </Button>

            <Button
                style={styles.button}
                onPress={() => navigation.navigate("AppBar")}
            >
                AppBar
            </Button>

            <Button
                style={styles.button}
                onPress={() => navigation.navigate("Text")}
            >
                Text
            </Button>

            <Button
                style={styles.button}
                onPress={() => navigation.navigate("Button")}
            >
                Button
            </Button>

            <Button
                style={styles.button}
                onPress={() => navigation.navigate("TextInput")}
            >
                TextInput
            </Button>

            <Button
                style={styles.button}
                onPress={() => navigation.navigate("FloatingLabelTextInput")}
            >
                FloatingLabelTextInput
            </Button>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        alignItems: "stretch",
    },
    button: {
        marginVertical: 8,
    },
});
