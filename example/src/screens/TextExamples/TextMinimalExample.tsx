/**
 * TextMinimalExample.tsx
 *
 * This screen shows **minimal examples** of the `Text` component.
 *
 * Demonstrates usage of the following props:
 * - `variant`: Default variants like "body", "h1", "h2", "caption"
 * - `color`: Optional text color
 * - `fontFamily`: Optional font family
 * - `style`: Additional styles
 *
 * Purpose:
 * - Provide a **quick-start / beginner-friendly example**
 *   without any custom theme or advanced configurations.
 * 
 * Author: Geeky Hawks FZE LLC
 */

import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ThemeProvider, Text } from "@geekyhawks/react-native-ui-components";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TextMinimalExample() {
    return (
        <>
            {/* Wrap components with ThemeProvider to apply default styling */}
            <ThemeProvider>
                <SafeAreaView style={styles.container}>
                    <ScrollView contentContainerStyle={styles.scrollContainer}>

                        {/* This is default body text */}
                        <Text>Hello, World!</Text>

                        {/* Custom Color Prop */}
                        <Text color="red">
                            Color Prop
                        </Text>

                        {/* Custom Font, you can pass any custom font */}
                        <Text fontFamily="Courier">
                            Courier Font
                        </Text>

                        {/* h1 */}
                        <Text variant="h1">Heading 1</Text>

                        {/* h2 */}
                        <Text variant="h2">Heading 2</Text>

                        {/* body */}
                        <Text variant="body">Body</Text>

                        {/* caption */}
                        <Text variant="caption">Caption text</Text>

                        {/* Custom Designs */}
                        <Text style={{ color: "purple", fontSize: 28, fontWeight: "bold" }}>Styled Text</Text>

                    </ScrollView>
                </SafeAreaView>
            </ThemeProvider>
        </>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    scrollContainer: { gap: 16, paddingBottom: 24 },
});
