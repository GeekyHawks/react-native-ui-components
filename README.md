# Geeky Hawks React Native UI Components

**Build consistent, theme-aware React Native apps faster.**

A lightweight and reusable React Native UI components library — providing not just components, but also a full theming system (colors, spacing, typography) for building consistent designs in your React Native apps.  

Includes `Text`, `TextInput`, `FloatingLabelTextInput`, `Button`, and more — fully typed with TypeScript, theme-ready, and easy to integrate into any React Native project.  

✨ Developed & Maintained by [Geeky Hawks](https://www.geekyhawks.com).

[![npm version](https://img.shields.io/npm/v/@geekyhawks/react-native-ui-components.svg)](https://www.npmjs.com/package/@geekyhawks/react-native-ui-components)
[![License](https://img.shields.io/npm/l/@geekyhawks/react-native-ui-components.svg)](LICENSE)


## Features

- 🎨 **Theming system out of the box**  
  Define global colors, spacing, and typography to ensure consistent design across your app.  
  - Full **light/dark mode** support.  
  - Customize and extend themes for your brand.  

- 🧩 **Pre-styled, customizable components**  
  Includes **Text**, **Button**, **TextInput**, **FloatingLabelTextInput** (and more components coming soon).  

- 📱 **Custom StatusBar** (coming soon)  
  Works consistently across iOS and Android — no hacks required.  

- 🔒 **TypeScript-first**  
  Strongly typed for safer and faster development.  

- ⚡ **Lightweight & easy to integrate**  
  Add to new or existing React Native projects with minimal setup.  


## 🚀 Get Started

### 1. Install

```bash
# npm
npm install @geekyhawks/react-native-ui-components

# yarn
yarn add @geekyhawks/react-native-ui-components
```

### 2. Wrap your app with ThemeProvider

```tsx
import React from "react";
import { ThemeProvider } from "@geekyhawks/react-native-ui-components";

export default function App() {
  return (
    <ThemeProvider>
      {/* Your App Components (HomeScreen, AppNavigator, NavigationContainer, etc.) */}
      <HomeScreen />
    </ThemeProvider>
  );
}
```

⚠️ **Important:** The `ThemeProvider` should wrap your entire app (usually in `App.tsx`), so that all components can access the theme consistently.

### 3. Use a component

```tsx
import { Text, TextInput, FloatingLabelTextInput, Button } from "@geekyhawks/react-native-ui-components";

export default function HomeScreen() {
  return (
    <>
      <Text>Hello, World! 👋</Text>
      <Text variant="h1">Heading Text</Text>

      <TextInput
        label="Name"
        placeholder="John Doe"
        onChangeText={(text) => {
          // Do something with text
        }}
      />

      <FloatingLabelTextInput
        label="Email Address"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(text) => {
          // Do something with text
        }}
      />

      <Button onPress={() => console.log("Pressed!")}>
        Default Button
      </Button>
    </>
  );
}
```


## Demo

![](https://github.com/GeekyHawks/react-native-ui-components/blob/main/docs/images/Demo.gif)


## Theme & Components

This library provides a growing set of **theme-ready UI components**:

- [Theme](https://github.com/GeekyHawks/react-native-ui-components/blob/main/docs/Theme.md) – Global theming system (colors, typography, spacing, light/dark).
- [Text](https://github.com/GeekyHawks/react-native-ui-components/blob/main/docs/Text.md) – Customizable wrapper around React Native's `Text`.
- [Button](https://github.com/GeekyHawks/react-native-ui-components/blob/main/docs/Button.md) – Enhanced button with default styles, theme support and much more.
- [TextInput](https://github.com/GeekyHawks/react-native-ui-components/blob/main/docs/TextInput.md) – Styled input field with theme integration.
- [FloatingLabelTextInput](https://github.com/GeekyHawks/react-native-ui-components/blob/main/docs/FloatingLabelTextInput.md) – TextInput with floating label.  
_(more coming soon)_

> 🖌️ All components support style overrides, theming, and common React Native props. Customize fonts, colors, and variants globally using the [ThemeProvider](https://github.com/GeekyHawks/react-native-ui-components/blob/main/docs/Theme.md).

### 📘 Documentation

Comprehensive documentation for each component lives in the [**docs**](https://github.com/GeekyHawks/react-native-ui-components/tree/main/docs) folder.  

Each doc file includes:
- 📖 **Prop reference** – all available props with types.  
- ⚡ **Usage examples** – from basic to advanced.  
- 🎨 **Customization guides** – how to style with themes, spacing, and typography.  
- 🌗 **Theming examples** – light/dark mode and custom themes in action.  

👉 Dive into the docs to learn each component’s features and how to adapt them to your app with ease.

### 📱 Example App

A fully working [**example app**](https://github.com/GeekyHawks/react-native-ui-components/tree/main/example) is included in the repo to help you explore the components in action.  

- Browse and test components with real usage  
- See theming and customization applied live  
- Use it as a reference for integrating into your project  

👉 Try the example app to see components in action and quickly understand how they fit into a real-world React Native setup.


## Contributing

1. Fork the repository  
2. Create a new branch for your feature or fix  
3. Commit your changes with clear messages  
4. Push to your branch and create a Pull Request  


## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
