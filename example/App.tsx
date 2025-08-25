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
  TextInput,
  FloatingLabelTextInput
} from '@geekyhawks/react-native-ui-components';

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
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ gap: 16 }}>
          <Text>Hello World (default text)</Text>

          <TextInput placeholder="Default Input" label="Default" />

          <TextInput
            placeholder="Underline Input"
            label="Underline"
            variant="underline"
          />

          <TextInput
            placeholder="Filled Input with error"
            label="Filled"
            variant="filled"
            error="Invalid input"
            errorPosition="right"
          />

          <TextInput
            label="Password"
            placeholder="Enter password"
            secureTextEntry
            passwordToggleIcons={{
              show: (
                <Image
                  source={require("./src/assets/show-password.png")}
                  style={{ width: 20, height: 20, tintColor: "#007bff" }}
                  resizeMode="contain"
                />
              ),
              hide: (
                <Image
                  source={require("./src/assets/hide-password.png")}
                  style={{ width: 20, height: 20, tintColor: "#007bff" }}
                  resizeMode="contain"
                />
              ),
            }}
          />

          <TextInput
            label="Bio"
            placeholder="Write something about yourself..."
            multiline
            numberOfLines={4}
          />

          <FloatingLabelTextInput
            label="Email Address"
            variant="outline"
            helperText="We will never share your email"
            keyboardType="email-address"
            autoCapitalize="none"
            size="lg"
          />

          <Button onPress={() => console.log("Pressed!")} fullWidth>
            Default Button
          </Button>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );

  // 2️⃣ Light / Dark Theme Example
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
          <Text variant="h1">Heading</Text>
          <Text variant="body">Body text example</Text>

          <View style={{ gap: 12 }}>
            <Button>Solid</Button>
            <Button variant="outline">Outline</Button>
            <Button fullWidth>Full Width</Button>
          </View>

          <TextInput placeholder="Default Input" label="Default" />

          <FloatingLabelTextInput
            label="Email Address"
            variant="outline"
            helperText="We will never share your email"
            keyboardType="email-address"
            autoCapitalize="none"
            size="lg"
          />
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );

  // 3️⃣ Custom Theme Example
  const customTheme: Theme = {
    fontFamily: "Roboto",
    colors: {
      text: "#222222",
      background: "#FAFAFA",
      primary: "#FF6347",
      secondary: "#4B0082",
      error: "#FF0000",
      border: "#dee2e6",
      muted: "#6c757d",
    },
  };

  const customTextVariants: TextVariants = {
    ...defaultTextVariants,
    body: { fontSize: 20 },
    customTitle: { fontSize: 22, fontStyle: "italic", color: "#4B0082" },
  };

  const customExample = (
    <ThemeProvider theme={customTheme} textVariants={customTextVariants}>
      <SafeAreaView
        style={{
          flex: 1,
          padding: 16,
          backgroundColor: customTheme.colors.background,
        }}
      >
        <ScrollView contentContainerStyle={{ gap: 16 }}>
          <Text variant="body">Custom Body Text</Text>
          <Text variant="customTitle">Custom Title</Text>

          <Button size="bigButton" shape="rounded" colorScheme="secondary">
            Custom Button
          </Button>

          <Button
            size="md"
            variant="solid"
            colorScheme="secondary"
            leftIcon={
              <Image
                source={require("./src/assets/press-button.png")}
                style={{ width: 20, height: 20, marginRight: 6 }}
              />
            }
          >
            Left Icon
          </Button>

          <TextInput placeholder="Default Input" label="Default" />

          <FloatingLabelTextInput
            label="Email Address"
            variant="outline"
            helperText="We will never share your email"
            keyboardType="email-address"
            autoCapitalize="none"
            size="lg"
          />
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
