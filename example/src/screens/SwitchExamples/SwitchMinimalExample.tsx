/**
 * SwitchMinimalExample
 *
 * This screen shows **minimal examples** of the `Switch` component.
 *
 * Demonstrates usage of the following props:
 * - `value`: Boolean state of the switch
 * - `onValueChange`: Callback when toggled
 * - `label`: Optional label displayed next to the switch
 * - `disabled`: Disabled state
 *
 * Purpose:
 * - Provide a **quick-start / beginner-friendly example**
 *   without any custom theme or advanced configurations.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Switch, Text, ThemeProvider } from "@geekyhawks/react-native-ui-components";

export function SwitchMinimalExample() {
    const [switch1, setSwitch1] = useState(false);
    const [switch2, setSwitch2] = useState(true);
    const [switch3, setSwitch3] = useState(false);

    return (
        <ThemeProvider>
            <ScrollView contentContainerStyle={styles.container}>
                <Text>Default Switch</Text>
                <Switch value={switch1} onValueChange={setSwitch1} label="Switch 1" />

                <Text>Initially On</Text>
                <Switch value={switch2} onValueChange={setSwitch2} label="Switch 2" />

                <Text>Disabled Switch</Text>
                <Switch value={switch3} onValueChange={setSwitch3} label="Switch 3" disabled />
            </ScrollView>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: { padding: 16, gap: 16 },
});
