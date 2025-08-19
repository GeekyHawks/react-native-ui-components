/**
 * Example App
 *
 * Demonstrates usage of the `@geekyhawks/react-native-ui-components` library,
 * including the `ThemeProvider` and custom `Text` component with text variants.
 *
 * Shows how to:
 * - Wrap the app with `ThemeProvider`
 * - Apply a custom theme
 * - Use default and custom text variants
 *
 * Author: Geeky Hawks FZE LLC
 */

import React from 'react';
import { Image, ScrollView, StatusBar, useColorScheme, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {
  ThemeProvider,
  Text,
  defaultTextVariants,
  defaultLightTheme,
  defaultDarkTheme,
  Theme,
  TextVariants,
  Button,
  ButtonSizeVariants,
  ButtonShapeVariants
} from '@geekyhawks/react-native-ui-components';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';

export default function App() {
  const isDarkMode = useColorScheme() === "dark";

  // 1️⃣ Minimal Example
  const minimalExample = (
    <ThemeProvider>
      <SafeAreaView
        style={{
          flex: 1,
          padding: 16,
          backgroundColor: defaultLightTheme.colors.background,
        }}
      >
        <Text>Hello World (default text)</Text>
        <Button onPress={() => console.log("Pressed!")}>
          Default Button
        </Button>
      </SafeAreaView>
    </ThemeProvider>
  );

  // 2️⃣ Light / Dark Example
  const lightDarkExample = (
    <ThemeProvider theme={isDarkMode ? defaultDarkTheme : defaultLightTheme}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={
          isDarkMode
            ? defaultDarkTheme.colors.background
            : defaultLightTheme.colors.background
        }
      />
      <SafeAreaView
        style={{
          flex: 1,
          padding: 16,
          backgroundColor: isDarkMode
            ? defaultDarkTheme.colors.background
            : defaultLightTheme.colors.background,
        }}
      >
        <ScrollView contentContainerStyle={{ gap: 16 }}>
          <Text variant="h1">Heading (h1)</Text>
          <Text variant="h2">Subheading (h2)</Text>
          <Text variant="body">Body text</Text>
          <Text variant="caption">Caption text</Text>

          <View style={{ gap: 12 }}>
            <Button>Solid</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button fullWidth>Full Width</Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );

  // 3️⃣ Custom Example
  const customTheme: Theme = {
    fontFamily: "Roboto",
    colors: {
      text: "#222222",
      background: "#FAFAFA",
      primary: "#FF6347",
      secondary: "#4B0082",
      error: "#FF0000",
    },
  };

  const customTextVariants: TextVariants = {
    ...defaultTextVariants,
    body: { fontSize: 20 },
    customTitle: {
      fontSize: 22,
      fontStyle: "italic",
      color: "#4B0082",
    },
  };

  const customButtonSizeVariants: ButtonSizeVariants = {
    bigButton: {
      container: { paddingVertical: 18, paddingHorizontal: 24 },
      text: { fontSize: 18 },
    },
  };

  const customButtonShapeVariants: ButtonShapeVariants = {
    rounded: {
      borderRadius: 20,
    },
  };

  const customExample = (
    <ThemeProvider
      theme={customTheme}
      textVariants={customTextVariants}
      buttonSizeVariants={customButtonSizeVariants}
      buttonShapeVariants={customButtonShapeVariants}
    >
      <SafeAreaView
        style={{
          flex: 1,
          padding: 16,
          backgroundColor: customTheme.colors.background,
        }}
      >
        <ScrollView contentContainerStyle={{ gap: 16 }}>
          <Text variant="body">Custom Body Text</Text>
          <Text variant="customTitle">Custom Title Variant</Text>

          <Button size="bigButton" shape="rounded" colorScheme="secondary">
            Custom Button
          </Button>

          <Button
            size="bigButton"
            shape="rounded"
            colorScheme="secondary"
            loading
          >
            Loading Button
          </Button>

          <Button
            size="md"
            variant="solid"
            colorScheme="secondary"
            onPress={() => console.log('Pressed!')}
            containerStyle={{ marginTop: 10 }}
            leftIcon={
              <Image
                source={require("./src/assets/press-button.png")}
                tintColor={"white"}
                style={{ width: 20, height: 20, marginRight: 6 }}
              />
            }
            animation="shadow"
          >
            Left Icon
          </Button>

          <Button
            size="sm"
            variant="outline"
            colorScheme="secondary"
            containerStyle={{ marginTop: 20 }}
            animation="scale"
            rightIcon={
              <Image
                source={require("./src/assets/send.png")}
                tintColor={"#4B0082"}
                style={{ width: 20, height: 20, marginRight: 6 }}
              />
            }
          >
            Right Icon
          </Button>

          {/* Make sure to setup MaterialIcons (or your preferred icon library) before using */}
          <Button
            leftIcon={<MaterialIcons name="home" color="white" size={20} />}
          >
            Left Material Icon
          </Button>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );

  // 👇 Toggle which example to display
  const exampleToShow: string = "custom"; // "minimal" | "lightDark" | "custom"

  return (
    <SafeAreaProvider>
      {exampleToShow === "minimal"
        ? minimalExample
        : exampleToShow === "lightDark"
          ? lightDarkExample
          : customExample}
    </SafeAreaProvider>
  );
}
