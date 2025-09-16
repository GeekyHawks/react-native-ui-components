/**
 * LoaderModalMinimalExample
 *
 * This screen shows a **minimal example** of the `LoaderModal` component.
 *
 * Demonstrates usage of the following props:
 * - `modalVisible`: Controls whether the loader modal is shown or hidden.
 *
 * Purpose:
 * - Provide a **beginner-friendly example** of using the loader modal
 *   without any theming or advanced customization.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React from "react";
import { View } from "react-native";
import { LoaderModal } from "@geekyhawks/react-native-ui-components";

export function LoaderModalMinimalExample(props: any) {
    return (
        <View style={{ flex: 1 }}>
            <LoaderModal modalVisible={props.showModal} />
        </View>
    )
}
