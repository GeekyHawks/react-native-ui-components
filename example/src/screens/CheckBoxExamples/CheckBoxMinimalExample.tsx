/**
 * CheckBoxMinimalExample
 *
 * Shows **minimal usage** of the `CheckBox` component.
 *
 * Demonstrates:
 * - Standalone checkboxes using `value` and `selectedValues`
 * - `label` prop
 * - `disabled` state
 *
 * Author: Geeky Hawks FZE LLC
 */

import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { CheckBox, ThemeProvider, Text } from "@geekyhawks/react-native-ui-components";

export function CheckBoxMinimalExample() {
    const [selectedValues, setSelectedValues] = useState<Array<string | number>>([]);

    return (
        <ThemeProvider>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text>Standalone CheckBoxes</Text>
                <View style={styles.row}>
                    <CheckBox
                        value="option1"
                        label="Option 1"
                        selectedValues={selectedValues}
                        onChange={(val, checked) => {
                            setSelectedValues(prev => checked ? [...prev, val] : prev.filter(v => v !== val));
                        }}
                    />
                    <CheckBox
                        value="option2"
                        label="Option 2"
                        selectedValues={selectedValues}
                        onChange={(val, checked) => {
                            setSelectedValues(prev => checked ? [...prev, val] : prev.filter(v => v !== val));
                        }}
                    />
                    <CheckBox
                        value="option3"
                        label="Disabled"
                        disabled
                    />
                </View>
            </ScrollView>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    scrollContainer: { gap: 16, padding: 16 },
    row: { flexDirection: "row", gap: 16, flexWrap: "wrap" },
});
