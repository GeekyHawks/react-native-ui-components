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
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {
  ThemeProvider,
  Text,
  defaultTextVariants,
  defaultLightTheme,
  defaultDarkTheme,
  Theme,
  TextVariants,
} from '@geekyhawks/react-native-ui-components';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  // 1️⃣ Minimal usage: uses default theme and text variants
  const minimalExample = (
    <ThemeProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={{ flex: 1, padding: 16, backgroundColor: defaultLightTheme.colors.background }}>
        <Text>Hello, World!</Text>
        <Text style={{ fontSize: 20 }}>Styled Text</Text>
      </SafeAreaView>
    </ThemeProvider>
  );

  // 2️⃣ Default Light/Dark mode: system theme with default variants
  const lightDarkExample = (
    <ThemeProvider theme={isDarkMode ? defaultDarkTheme : defaultLightTheme}>
      <StatusBar
        backgroundColor={isDarkMode ? defaultDarkTheme.colors.background : defaultLightTheme.colors.background}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <SafeAreaView style={{ flex: 1, padding: 16, backgroundColor: isDarkMode ? defaultDarkTheme.colors.background : defaultLightTheme.colors.background }}>
        <Text variant="h1">Heading Text</Text>
        <Text variant="h2">Subheading</Text>
        <Text variant="body">Body Text</Text>
        <Text variant="caption">Caption Text</Text>
        <Text color={isDarkMode ? '#FFAA00' : '#FF0000'}>Conditional Color</Text>
      </SafeAreaView>
    </ThemeProvider>
  );

  // 3️⃣ Custom theme and text variants
  const customTheme: Theme = {
    fontFamily: 'Roboto',
    colors: {
      text: '#222222',
      background: '#FAFAFA',
      primary: '#FF6347',
      secondary: '#4B0082',
      error: '#FF0000',
    },
  };

  const customTextVariants: TextVariants = {
    ...defaultTextVariants,
    body: { fontSize: 26 },
    customTitle: { fontSize: 22, fontStyle: 'italic', color: '#4B0082' },
  };

  const customExample = (
    <ThemeProvider theme={customTheme} textVariants={customTextVariants}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <SafeAreaView style={{ flex: 1, padding: 16, backgroundColor: defaultLightTheme.colors.background }}>
        <Text variant="body">Body Text</Text>
        <Text variant="customTitle">Custom Title</Text>
      </SafeAreaView>
    </ThemeProvider>
  );

  // Toggle which example to render
  const exampleToShow: string = 'minimal'; // 'minimal' | 'lightDark' | 'custom'

  return (
    <SafeAreaProvider>
      {exampleToShow === 'minimal' ? (
        minimalExample
      ) : exampleToShow === 'lightDark' ? (
        lightDarkExample
      ) : (
        customExample
      )}
    </SafeAreaProvider>
  );
}
