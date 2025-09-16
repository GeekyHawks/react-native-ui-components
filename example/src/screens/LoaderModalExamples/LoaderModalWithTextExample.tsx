/**
 * LoaderModalWithTextExample
 *
 * This screen shows how to use the `LoaderModal` component **with text support**.
 *
 * Demonstrates usage of the following props:
 * - `modalVisible`: Controls whether the loader modal is shown or hidden.
 * - `text`: Displays a message inside the modal.
 * - `textPosition`: Sets the text position relative to the loader (e.g., bottom).
 * - `textColor`: Customizes the color of the displayed text.
 *
 * Purpose:
 * - Help users understand how to **enhance the loader modal with text**
 *   for clearer user feedback during loading states.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React from "react";
import { View } from "react-native";
import { LoaderModal } from "@geekyhawks/react-native-ui-components";

export function LoaderModalWithTextExample(props: any) {
    return (
        <View style={{ flex: 1 }}>
            <LoaderModal
                modalVisible={props.showModal}
                text="Please wait..."
                textPosition="bottom"
                textColor={"white"} />
        </View>
    )
}
