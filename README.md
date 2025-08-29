# Geeky Hawks React Native UI Components

A lightweight and reusable React Native UI components library with `Text`, `TextInput`, `FloatingLabelTextInput`, `Button`, and more — fully typed with TypeScript, theme-ready, and easy to integrate into any React Native project.

✨ Developed & Maintained by [Geeky Hawks](https://www.geekyhawks.com).

[![npm version](https://img.shields.io/npm/v/@geekyhawks/react-native-ui-components.svg)](https://www.npmjs.com/package/@geekyhawks/react-native-ui-components)
[![License](https://img.shields.io/npm/l/@geekyhawks/react-native-ui-components.svg)](LICENSE)


## Features

- Pre-styled, customizable components: **Text**, **Button**, **TextInput**, **FloatingLabelTextInput**, and more coming soon.
- Custom **StatusBar** that *actually* works consistently on iOS and Android (coming soon).
- Built with **TypeScript** for type safety.
- **Theme support** for global customization.
- Lightweight and easy to integrate into existing projects.


## Installation

```bash
# npm
npm install @geekyhawks/react-native-ui-components

# yarn
yarn add @geekyhawks/react-native-ui-components
```

## Available Components

- **Text**: Customizable wrapper around React Native's `Text`.  
- **Button**: Enhanced button component with default styles and theme support.  
- **TextInput**: Styled input field with theme support.  
- **FloatingLabelTextInput**: Input field with floating label.  

Each component supports style overrides and common React Native props.

> 🖌️ All components are **theme-ready** — you can customize fonts, colors, and variants globally using the [ThemeProvider](https://github.com/GeekyHawks/react-native-ui-components/blob/main/docs/Theme.md).

⚠️ **Important:** The `ThemeProvider` should wrap your entire app (usually in `App.tsx`), so that all components can access the theme consistently.

## Quick Usage Examples

```tsx
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider, Text, TextInput, FloatingLabelTextInput, Button } from "@geekyhawks/react-native-ui-components";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <Text>Hello, World!</Text>
        <Text variant="h1">Heading Text</Text>

        <TextInput placeholder="Default Input" label="Default" />

        <FloatingLabelTextInput
          label="Email Address"
          helperText="We will never share your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Button onPress={() => console.log("Pressed!")}>
          Default Button
        </Button>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
```


## Documentation

Detailed documentation for each component (props, advanced examples, and customization) lives in the docs
 folder:

- [Theme](https://github.com/GeekyHawks/react-native-ui-components/blob/main/docs/Theme.md)
- [Text](https://github.com/GeekyHawks/react-native-ui-components/blob/main/docs/Text.md)
- [Button](https://github.com/GeekyHawks/react-native-ui-components/blob/main/docs/Button.md)
- [TextInput](https://github.com/GeekyHawks/react-native-ui-components/blob/main/docs/TextInput.md)
- [FloatingLabelTextInput](https://github.com/GeekyHawks/react-native-ui-components/blob/main/docs/FloatingLabelTextInput.md)

Each file includes props, usage, and customization examples.


## Contributing

1. Fork the repository  
2. Create a new branch for your feature or fix  
3. Commit your changes with clear messages  
4. Push to your branch and create a Pull Request  


## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
