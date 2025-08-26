/**
 * ButtonMinimalExample
 *
 * This screen shows **minimal examples** of the `Button` component.
 *
 * Demonstrates usage of the following props:
 * - `variant`: Default variants like "solid", "outline", "ghost"
 * - `size`: Small, Medium, Large
 * - `shape`: Different button shapes
 * - `animation`: Scale, Opacity, Shadow
 * - `leftIcon` / `rightIcon`: Adding icons
 * - `loading` / `disabled` / `fullWidth` states
 * - `colorScheme`: Using predefined color schemes
 *
 * Purpose:
 * - Provide a **quick-start / beginner-friendly example**
 *   without any custom theme or advanced configurations.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React from "react";
import { Button, Text, ThemeProvider } from "@geekyhawks/react-native-ui-components";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import MaterialIcons from "@react-native-vector-icons/material-icons";

export function ButtonMinimalExample() {
    return (
        <>
            {/* Wrap components with ThemeProvider to apply default styling */}
            <ThemeProvider>
                <View style={styles.container}>
                    <ScrollView
                        contentContainerStyle={styles.scrollContainer}
                        showsVerticalScrollIndicator={false}>

                        <Text>
                            Variants
                        </Text>
                        <View style={styles.row}>

                            {/* Default Button, Solid variant  */}
                            <Button
                                onPress={() => console.log("Pressed!")}>
                                Default
                            </Button>

                            {/* Outline Button */}
                            <Button
                                variant="outline"
                                onPress={() => console.log("Pressed!")}>
                                Outline
                            </Button>

                            {/* Ghost Button */}
                            <Button
                                variant="ghost"
                                onPress={() => console.log("Pressed!")}>
                                Ghost
                            </Button>

                        </View>

                        <Text>
                            Animations
                        </Text>
                        <View style={styles.row}>

                            {/* Change Scale Animation */}
                            <Button
                                animation="scale"
                                onPress={() => console.log("Pressed!")}>
                                Scale
                            </Button>

                            {/* Change Opacity Animation */}
                            <Button
                                animation="opacity"
                                onPress={() => console.log("Pressed!")}>
                                Opacity
                            </Button>

                            {/* Change Shadow Animation */}
                            <Button
                                animation="shadow"
                                onPress={() => console.log("Pressed!")}>
                                Shadow
                            </Button>

                        </View>

                        <Text>
                            Icons
                        </Text>
                        <View style={styles.row}>

                            {/* Button with Left Icon */}
                            <Button
                                leftIcon={
                                    <Image
                                        source={require("../../assets/press-button.png")}
                                        tintColor="white"
                                        style={{ width: 20, height: 20, marginRight: 6 }}
                                    />
                                }
                                onPress={() => console.log("Pressed!")}>
                                Left
                            </Button>

                            {/* Button with Right Icon */}
                            <Button
                                rightIcon={
                                    <Image
                                        source={require("../../assets/send.png")}
                                        tintColor="white"
                                        style={{ width: 20, height: 20, marginLeft: 6 }}
                                    />
                                }
                                onPress={() => console.log("Pressed!")}>
                                Right
                            </Button>

                            {/* Button with MaterialIcon */}
                            {/* Make sure MaterialIcons is setup before using */}
                            <Button leftIcon={<MaterialIcons name="home" color="white" size={20} />}>
                                Material
                            </Button>
                        </View>

                        <Text>
                            Sizes
                        </Text>
                        <View style={styles.row}>

                            {/* Small Size Button */}
                            <Button
                                size="sm"
                                onPress={() => console.log("Pressed!")}>
                                Small
                            </Button>

                            {/* Medium Size Button */}
                            <Button
                                size="md"
                                onPress={() => console.log("Pressed!")}>
                                Medium
                            </Button>

                            {/* Large Size Button */}
                            <Button
                                size="lg"
                                onPress={() => console.log("Pressed!")}>
                                Large
                            </Button>

                        </View>

                        <Text>
                            Shapes
                        </Text>
                        <View style={styles.row}>

                            {/* Small Border Radius Button */}
                            <Button
                                shape="sm"
                                onPress={() => console.log("Pressed!")}>
                                Small
                            </Button>

                            {/* Medium Border Radius Button */}
                            <Button
                                shape="md"
                                onPress={() => console.log("Pressed!")}>
                                Medium
                            </Button>

                            {/* Large Border Radius Button */}
                            <Button
                                shape="lg"
                                onPress={() => console.log("Pressed!")}>
                                Large
                            </Button>

                            {/* Full Border Radius Button */}
                            <Button
                                shape="full"
                                onPress={() => console.log("Pressed!")}>
                                Full
                            </Button>

                        </View>

                        <Text>
                            States
                        </Text>
                        <View style={styles.row}>

                            {/* Button with Loading state */}
                            <Button
                                loading
                                onPress={() => console.log("Pressed!")}>
                                Loading
                            </Button>

                            {/* Disabled Button */}
                            <Button
                                disabled
                                onPress={() => console.log("Pressed!")}>
                                Disabled
                            </Button>

                            {/* Icon only Button */}
                            <Button
                                leftIcon={
                                    <Image
                                        source={require("../../assets/send.png")}
                                        tintColor="white"
                                        style={{ width: 20, height: 20 }}
                                    />
                                }
                                onPress={() => console.log("Pressed!")}>
                            </Button>

                            {/* Button with different color scheme */}
                            <Button
                                colorScheme="error"
                                onPress={() => console.log("Pressed!")}>
                                Color
                            </Button>

                        </View>

                        <Text>
                            Full Width
                        </Text>

                        {/* Full Width Button */}
                        <Button
                            fullWidth
                            onPress={() => console.log("Pressed!")}>
                            Full Width
                        </Button>

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
