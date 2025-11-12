# Geeky Hawks React Native UI Components

**Build consistent, theme-aware React Native apps faster.**

A lightweight and reusable React Native UI components library — providing not just components, but also an optional theming system (colors, spacing, typography) for building consistent designs in your React Native apps.  

All components can be used **individually without the ThemeProvider** — just pass your own colors, styles, or props directly.  
The **Theme System** is entirely optional but helps maintain a unified look and easily supports light/dark modes.

Includes **StatusBar**, **AppBar**, **Text**, **TextInput**, **FloatingLabelTextInput**, **Button**, **Radio**, **CheckBox**, **Switch**, **ActivityIndicator**, **LoaderModal**, and more — fully typed with TypeScript, theme-ready, and easy to integrate into any React Native project.

✨ Developed & Maintained by [Geeky Hawks](https://www.geekyhawks.com).

[![npm version](https://img.shields.io/npm/v/@geekyhawks/react-native-ui-components.svg)](https://www.npmjs.com/package/@geekyhawks/react-native-ui-components)
[![npm](https://img.shields.io/npm/dt/@geekyhawks/react-native-ui-components.svg)](https://www.npmjs.com/package/@geekyhawks/react-native-ui-components)
[![License](https://img.shields.io/npm/l/@geekyhawks/react-native-ui-components.svg)](LICENSE)


## ✨ Features

- **Theming system out of the box**  
  Define global colors, spacing, and typography to ensure consistent design across your app.  
  - Full **light/dark mode** support.  
  - Customize and extend themes for your brand.  

- **Pre-styled, customizable components**  
  Includes:  
  - **StatusBar**, **AppBar**  
  - **Text**, **TextInput**, **FloatingLabelTextInput**, **Button**  
  - **Radio**, **CheckBox**, **Switch**  
  - **ActivityIndicator**, **LoaderModal**  
  (with more components coming soon).  

- **Consistent cross-platform UI**  
  Components work seamlessly on both iOS and Android with a unified design language.  

- **TypeScript-first**  
  Strongly typed for safer and faster development.  

- **Lightweight & easy to integrate**  
  Add to new or existing React Native projects with minimal setup.  


## 🚀 Get Started

### 1. Install

```bash
# npm
npm install @geekyhawks/react-native-ui-components

# yarn
yarn add @geekyhawks/react-native-ui-components
```

### 2. Wrap your app with ThemeProvider (optional, but recommended)

Using the `ThemeProvider` is **optional** — all components can be used directly and styled via props.

However, wrapping your app with the `ThemeProvider` allows you to:

- Define theme colors, fonts, and spacing in one place  
- Easily [switch between light and dark modes](https://github.com/GeekyHawks/react-native-ui-components/blob/main/docs/Theme.md#with-light--dark-mode)  
- Ensure consistent styling across all components  

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

If you choose to use the `ThemeProvider`, make sure it wraps your entire app (usually in `App.tsx`), so that all components can access the theme consistently.

If you don’t use the `ThemeProvider`, simply pass custom styles or colors directly to each component.

### 3. Use a component

```tsx
import { useState } from "react";
import { ActivityIndicator, AppBar, Button, CheckBox, FloatingLabelTextInput, Radio, RadioGroup, StatusBar, Switch, Text, TextInput } from "@geekyhawks/react-native-ui-components";

export default function HomeScreen() {
  const [selectedValue, setSelectedValue] = useState<string | number>("apple");
  const [checked, setChecked] = useState(false);
  const [allowed, setAllowed] = useState(false);

  return (
    <>
      <StatusBar />

      <AppBar title="Home" />

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

      <RadioGroup selectedValue={selectedValue} onValueChange={setSelectedValue}>
        <Radio value="apple" label="Apple" />
        <Radio value="banana" label="Banana" />
        <Radio value="orange" label="Orange" />
      </RadioGroup>

      <CheckBox
        value="terms"
        label="I agree to the Terms & Conditions"
        selectedValues={checked ? ["terms"] : []}
        onChange={(_, isChecked) => setChecked(isChecked)}
      />

      <Switch
        value={allowed}
        onValueChange={setAllowed}
        label="Enable notifications"
      />

      <ActivityIndicator
        text="Please wait..."
        textPosition="right"
        textColor={"primary"}
        variant="large" />

      <Button onPress={() => console.log("Pressed!")}>
        Default Button
      </Button>
    </>
  );
}
```


## 🎯 Demo

![](https://github.com/GeekyHawks/react-native-ui-components/blob/main/docs/images/Demo.gif)


## 🎨 Theme & Components

This library provides a growing set of **theme-ready UI components**:

- [Theme](https://github.com/GeekyHawks/react-native-ui-components/blob/main/docs/Theme.md) – Global theming system (colors, typography, spacing, light/dark).
- [StatusBar](https://github.com/GeekyHawks/react-native-ui-components/blob/main/docs/StatusBar.md) – Theme-aware wrapper for the native status bar with predefined variants.
- [AppBar](https://github.com/GeekyHawks/react-native-ui-components/blob/main/docs/AppBar.md) – Customizable, theme-ready top app bar with left, and right icons.
- [Text](https://github.com/GeekyHawks/react-native-ui-components/blob/main/docs/Text.md) – Customizable wrapper around React Native's `Text`.
- [TextInput](https://github.com/GeekyHawks/react-native-ui-components/blob/main/docs/TextInput.md) – Styled input field with theme integration.
- [FloatingLabelTextInput](https://github.com/GeekyHawks/react-native-ui-components/blob/main/docs/FloatingLabelTextInput.md) – TextInput with floating label.
- [Button](https://github.com/GeekyHawks/react-native-ui-components/blob/main/docs/Button.md) – Enhanced button with default styles, theme support and much more.
- [Radio](https://github.com/GeekyHawks/react-native-ui-components/blob/main/docs/Radio.md) – Themed radio button for single-choice selection, with group support and variant styling.
- [CheckBox](https://github.com/GeekyHawks/react-native-ui-components/blob/main/docs/CheckBox.md) – Themed checkbox for multi-choice selection, supporting groups and custom variants.
- [Switch](https://github.com/GeekyHawks/react-native-ui-components/blob/main/docs/Switch.md) – Themed toggle control with color variants and optional labeling.
- [ActivityIndicator](https://github.com/GeekyHawks/react-native-ui-components/blob/main/docs/ActivityIndicator.md) – Flexible loading spinner with text, size, and position options.
- [LoaderModal](https://github.com/GeekyHawks/react-native-ui-components/blob/main/docs/LoaderModal.md) – Full-screen modal loader with spinner, text, and theme variants.  
_(more coming soon)_

> 🖌️ All components support style overrides, theming, and common React Native props. Customize fonts, colors, and variants globally using the [ThemeProvider](https://github.com/GeekyHawks/react-native-ui-components/blob/main/docs/Theme.md).

## 📘 Documentation

Comprehensive documentation for each component lives in the [**docs**](https://github.com/GeekyHawks/react-native-ui-components/tree/main/docs) folder.  

Each doc file includes:
- 📖 **Prop reference** – all available props with types.  
- ⚡ **Usage examples** – from basic to advanced.  
- 🎨 **Customization guides** – how to style with themes, spacing, and typography.  
- 🌗 **Theming examples** – light/dark mode and custom themes in action.  

👉 Dive into the docs to learn each component’s features and how to adapt them to your app with ease.

## 📱 Example App

A fully working [**example app**](https://github.com/GeekyHawks/react-native-ui-components/tree/main/example) is included in the repo to help you explore the components in action.  

- Browse and test components with real usage  
- See theming and customization applied live  
- Use it as a reference for integrating into your project  

👉 Try the example app to see components in action and quickly understand how they fit into a real-world React Native setup.


## 🤝 Contributing

1. Fork the repository  
2. Create a new branch for your feature or fix  
3. Commit your changes with clear messages  
4. Push to your branch and create a Pull Request  

## 💬 Feedback

We’d love to hear from you!

Whether you’re using our components in production or just trying them out, your feedback helps us improve `@geekyhawks/react-native-ui-components`.

- What do you like about the library?  
- What could be improved?  
- Any components or features you’d like to see next?

📩 Send your thoughts and suggestions to **feedback@geekyhawks.com**

We read every message and really appreciate your time in helping us make this library better for the React Native community. ❤️


## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
