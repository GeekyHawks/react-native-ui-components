/**
 * ActivityIndicatorMinimalExample
 *
 * This screen shows **minimal examples** of the `ActivityIndicator` component.
 *
 * Demonstrates usage of the following props:
 * - `size`: Control indicator size (e.g., "small", "large").
 * - `variant`: Showcase different built-in variants (e.g., "default", "small", "large").
 * - `text` / `textPosition`: Display text alongside the indicator in different positions.
 * - `color`: Customize the spinner color.
 * - `textColor`: Customize the accompanying text color.
 *
 * Purpose:
 * - Provide a **quick-start / beginner-friendly example** of `ActivityIndicator`
 *   without requiring advanced configuration or custom themes.
 * - Show how to combine loading animations with optional descriptive text.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React from "react";
import { ActivityIndicator, Text, ThemeProvider } from "@geekyhawks/react-native-ui-components";
import { ScrollView, StyleSheet, View } from "react-native";

export function ActivityIndicatorMinimalExample() {
    return (
        <>
            {/* Wrap components with ThemeProvider to apply default styling */}
            <ThemeProvider>
                <View style={styles.container}>
                    <ScrollView
                        contentContainerStyle={styles.scrollContainer}
                        showsVerticalScrollIndicator={false}>

                        <Text style={{ marginTop: 16 }}>
                            Sizes
                        </Text>
                        <View style={styles.row}>
                            <ActivityIndicator size={"small"} />
                            <ActivityIndicator size={"large"} />
                        </View>

                        <Text>
                            Variants
                        </Text>
                        <View style={styles.row}>
                            <ActivityIndicator variant="default" />
                            <ActivityIndicator variant="small" />
                            <ActivityIndicator variant="large" />
                        </View>

                        <Text>
                            With Text
                        </Text>
                        <ActivityIndicator text="Right" />
                        <ActivityIndicator text="Left" textPosition="left" />
                        <ActivityIndicator text="Top" textPosition="top" />
                        <ActivityIndicator text="Bottom" textPosition="bottom" />

                        <Text>
                            Custom Color
                        </Text>
                        <ActivityIndicator color={"red"} />
                        <ActivityIndicator color={"red"} text="Loading..." textColor={"red"} />

                    </ScrollView>
                </View>
            </ThemeProvider>
        </>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, paddingHorizontal: 16 },
    scrollContainer: { gap: 16, paddingBottom: 24 },
    row: { flexDirection: "row", gap: 10 }
});
