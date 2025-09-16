/**
 * AppBarMinimalExample
 *
 * This screen shows **minimal examples** of the `AppBar` component.
 *
 * Demonstrates usage of the following props:
 * - `title`: Displaying a simple title
 * - `leftIcon` / `rightIcon`: Adding icons or actions
 * - `variant`: Default styling options (solid, outline, etc. if supported)
 * - `elevated`: Showing shadow/elevation effect
 * - `colorScheme`: Switching between predefined color schemes
 *
 * Purpose:
 * - Provide a **quick-start / beginner-friendly example**
 *   without any custom theme or advanced configurations.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React from "react";
import { StyleSheet, ScrollView, View, Image } from "react-native";
import { AppBar, ThemeProvider, Text } from "@geekyhawks/react-native-ui-components";

export function AppBarMinimalExample() {
    return (
        <ThemeProvider>
            <View style={styles.container}>
                <ScrollView
                    contentContainerStyle={styles.scrollContainer}
                    showsVerticalScrollIndicator={false}
                >

                    <Text style={{ marginTop: 16 }}>Default AppBar</Text>
                    <AppBar title="Home" />

                    <Text>With SubTitle</Text>
                    <AppBar title="Title" subTitle="Sub Title" />

                    <Text>Only SubTitle</Text>
                    <AppBar subTitle="Sub Title" />

                    <Text>Elevated</Text>
                    <AppBar
                        title="Elevated AppBar"
                        variant="elevated"
                    />

                    <Text>Transparent</Text>
                    <AppBar
                        title="Transparent AppBar"
                        variant="transparent"
                    />

                    <Text>Back Button</Text>
                    <AppBar
                        title="Back Button"
                        leftIcon={
                            <Image
                                source={require("../../assets/back.png")}
                                style={{ width: 20, height: 20, marginRight: 6 }}
                            />
                        }
                        onLeftIconPress={() => {
                            console.log("back pressed")
                        }}
                    />

                    <Text>Only Back Button</Text>
                    <AppBar
                        variant="transparent"
                        leftIcon={
                            <Image
                                source={require("../../assets/back.png")}
                                style={{ width: 20, height: 20, marginRight: 6 }}
                            />
                        }
                        onLeftIconPress={() => {
                            console.log("back pressed")
                        }}
                    />

                    <Text>With Left & Right Icons</Text>
                    <AppBar
                        title="Login"
                        leftIcon={
                            <Image
                                source={require("../../assets/press-button.png")}
                                style={{ width: 20, height: 20, marginRight: 6 }}
                            />
                        }
                        onLeftIconPress={() => {
                            console.log("left icon pressed")
                        }}
                        rightIcon={
                            <Image
                                source={require("../../assets/send.png")}
                                style={{ width: 20, height: 20, marginRight: 6 }}
                            />
                        }
                        onRightIconPress={() => {
                            console.log("right icon pressed")
                        }}
                    />

                    <Text>Custom Colors</Text>
                    <AppBar
                        title="Custom"
                        titleTextStyle={{ color: "red" }}
                        subTitle="SubTitle"
                        subTitleTextStyle={{ color: "yellow" }}
                        containerStyle={{ backgroundColor: "black" }}
                        leftIcon={
                            <Image
                                source={require("../../assets/send.png")}
                                style={{ width: 20, height: 20 }}
                            />
                        }
                        leftIconStyle={{ backgroundColor: "red" }}
                        rightIcon={
                            <Image
                                source={require("../../assets/send.png")}
                                style={{ width: 20, height: 20 }}
                            />
                        }
                        rightIconStyle={{ backgroundColor: "red" }}
                    />
                </ScrollView>
            </View>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    scrollContainer: { gap: 16, paddingBottom: 24 },
});
