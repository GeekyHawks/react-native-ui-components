/**
 * LoaderModalDemoScreen
 *
 * This screen demonstrates the usage of the `LoaderModal` component from
 * the `@geekyhawks/react-native-ui-components` library.
 *
 * Features:
 * - Shows how to trigger a loader modal programmatically.
 * - Demonstrates auto-dismiss behavior by hiding the modal after 3 seconds.
 * - Uses the library's `Button` component to open the loader modal.
 * - Integrates with `LoaderModalMinimalExample` and `LoaderModalWithTextExample` for rendering the modal UI.
 *
 * Purpose:
 * - Help users understand how to **display and dismiss a loading modal**
 *   in a clean and controlled way.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@geekyhawks/react-native-ui-components";
import { LoaderModalMinimalExample } from "./LoaderModalExamples/LoaderModalMinimalExample";
import { LoaderModalWithTextExample } from "./LoaderModalExamples/LoaderModalWithTextExample";

export default function LoaderModalDemoScreen() {
    const [showModal, setShowModal] = useState(false);
    const [showModalWithText, setShowModalWithText] = useState(false);

    useEffect(() => {
        if (showModal) {
            setTimeout(() => {
                setShowModal(false);
            }, 3000)
        }
    }, [showModal]);

    useEffect(() => {
        if (showModalWithText) {
            setTimeout(() => {
                setShowModalWithText(false);
            }, 3000)
        }
    }, [showModalWithText]);

    return (
        <SafeAreaView edges={["bottom", "left", "right"]} style={styles.container}>
            <View style={styles.tabContainer}>
                <Button onPress={() => setShowModal(true)}>
                    Show Loader Modal (3 Seconds)
                </Button>

                <Button onPress={() => setShowModalWithText(true)}>
                    Show Loader Modal With Text (3 Seconds)
                </Button>
            </View>
            <LoaderModalMinimalExample
                showModal={showModal} />
            <LoaderModalWithTextExample
                showModal={showModalWithText} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabContainer: {
        padding: 8,
        gap: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
});
