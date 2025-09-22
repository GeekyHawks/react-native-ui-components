/**
 * RadioMinimalExample
 *
 * This screen shows **minimal examples** of the `Radio` component.
 *
 * Demonstrates usage of the following props:
 * - `value`: Unique value for each radio option
 * - `selectedValue`: Currently selected value
 * - `onChange`: Callback triggered when a radio is selected
 * - `disabled`: Disable interaction
 * - `label`: Optional label text
 * - `color`, `size`: Theme-based or custom styling
 * - `containerStyle`, `labelTextStyle`: Optional style overrides
 *
 * Purpose:
 * - Provide a **quick-start / beginner-friendly example**
 *   without any custom theme or advanced configurations.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { Radio, ThemeProvider } from "@geekyhawks/react-native-ui-components";

export function RadioMinimalExample() {
    const [selectedValue, setSelectedValue] = useState<string | number>("option5");

    return (
        <ThemeProvider>
            <View style={styles.container}>
                <ScrollView
                    contentContainerStyle={styles.scrollContainer}
                    showsVerticalScrollIndicator={false}
                >
                    <Text>Default Radios</Text>
                    <View style={styles.row}>
                        <Radio
                            value="option1"
                            selectedValue={selectedValue}
                            onChange={setSelectedValue}
                            label="Option 1"
                        />
                        <Radio
                            value="option2"
                            selectedValue={selectedValue}
                            onChange={setSelectedValue}
                            label="Option 2"
                        />
                        <Radio
                            value="option3"
                            selectedValue={selectedValue}
                            onChange={setSelectedValue}
                            label="Option 3"
                        />
                    </View>

                    <Text>Disabled Radios</Text>
                    <View style={styles.row}>
                        <Radio
                            value="option4"
                            selectedValue={selectedValue}
                            onChange={setSelectedValue}
                            label="Disabled"
                            disabled
                        />
                        <Radio
                            value="option5"
                            selectedValue={selectedValue}
                            onChange={setSelectedValue}
                            label="Disabled Selected"
                            disabled
                        />
                    </View>

                    <Text>Custom Colors & Sizes</Text>
                    <View style={styles.row}>
                        <Radio
                            value="option6"
                            selectedValue={selectedValue}
                            onChange={setSelectedValue}
                            label="Primary Small"
                            color="primary"
                            size="sm"
                        />
                        <Radio
                            value="option7"
                            selectedValue={selectedValue}
                            onChange={setSelectedValue}
                            label="Secondary Large"
                            color="secondary"
                            size="lg"
                        />
                    </View>

                    <Text>Custom Styles</Text>
                    <View style={styles.row}>
                        <Radio
                            value="option8"
                            selectedValue={selectedValue}
                            onChange={setSelectedValue}
                            label="Styled Container"
                            containerStyle={{ padding: 8, borderWidth: 1, borderColor: "#ddd", borderRadius: 8 }}
                            labelTextStyle={{ color: "purple", fontWeight: "bold" }}
                        />
                    </View>
                </ScrollView>
            </View>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, paddingHorizontal: 16 },
    scrollContainer: { gap: 16, paddingBottom: 24 },
    row: { flexDirection: "row", gap: 16, flexWrap: "wrap" },
});
