# Geeky Hawks React Native UI Components

A lightweight and reusable React Native component library by [**Geeky Hawks**](https://www.geekyhawks.com), including customizable `Text`, `TextInput`, `Button`, `FloatingLabelTextInput`, and more. Fully built with **TypeScript**, theme support, and easy integration into any React Native project.

[![npm version](https://img.shields.io/npm/v/@geekyhawks/react-native-ui-components.svg)](https://www.npmjs.com/package/@geekyhawks/react-native-ui-components)
[![License](https://img.shields.io/npm/l/@geekyhawks/react-native-ui-components.svg)](LICENSE)


## Features

- Customizable **Text**, **TextInput**, **Button**, **FloatingLabelTextInput**, and more
- Custom **StatusBar** that *actually* works consistently on iOS and Android (coming soon)
- TypeScript support with type definitions
- Lightweight and easy to integrate


## Installation

```bash
# npm
npm install @geekyhawks/react-native-ui-components

# yarn
yarn add @geekyhawks/react-native-ui-components
```


## Usage

### Minimal Usage

```tsx
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, Text, TextInput, FloatingLabelTextInput, Button } from '@geekyhawks/react-native-ui-components';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <Text>Hello, World!</Text>
        <Text style={{ fontSize: 20 }}>Styled Text</Text>
        <Text variant="h1">Heading Text</Text>
        <Text variant="body">Body Text</Text>

        <TextInput placeholder="Default Input" label="Default" />
        <TextInput placeholder="Underline Input" label="Underline" variant="underline" />

        <FloatingLabelTextInput
          label="Email Address"
          variant="outline"
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

### With custom theme

```tsx
import React from 'react';
import { Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, Text, defaultTextVariants, Theme, TextVariants, ButtonSizeVariants, ButtonShapeVariants, Button } from '@geekyhawks/react-native-ui-components';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';

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

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider
        theme={customTheme}
        textVariants={customTextVariants}
        buttonSizeVariants={customButtonSizeVariants}
        buttonShapeVariants={customButtonShapeVariants}>
        <Text variant="h1">Heading Text</Text>
        <Text variant="body">Body Text</Text>
        <Text variant="customTitle">Custom Text</Text>
        <Button size="bigButton" shape="rounded" colorScheme="secondary">
          Custom Button
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

        {/* Make sure to setup MaterialIcons (or your preferred icon library) before using */}
        <Button
          leftIcon={<MaterialIcons name="home" color="white" size={20} />}
        >
          Left Material Icon
        </Button>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
```


## Theme & Text, Button Variants

You can customize your theme globally using the `ThemeProvider`. It supports the following options:

- **fontFamily**: Default font for all components  
- **colors**: Object containing `text`, `background`, `primary`, `secondary`, `error`  
- **textVariants**: Define custom text styles like `h1`, `body`, or your own variant. You can keep defaults or override specific variants.
- **buttonSizeVariants**: Define custom button sizes with padding, font size, and icon dimensions. Keep defaults (sm, md, lg) or override/add your own.
- **buttonShapeVariants**: Define custom button shapes with corner radius values. Keep defaults (sm, md, lg, full) or override/add your own.
### Example

```ts
import { Theme, TextVariants, defaultTextVariants, ButtonSizeVariants, ButtonShapeVariants } from '@geekyhawks/react-native-ui-components';

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
  ...defaultTextVariants, // keeps defaults like body, h1, h2, caption
  body: { fontSize: 26 },
  customTitle: { fontSize: 22, fontStyle: 'italic', color: '#4B0082' },
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
```


## Available Components

- **Text**: Customizable wrapper around React Native's `Text`  
- **Button**: Enhanced button component with default styles and theme support  
- **TextInput**: Styled input field with theme support  
- **FloatingLabelTextInput**: Input field with floating label  

Each component supports style overrides and common React Native props.


## Contributing

1. Fork the repository  
2. Create a new branch for your feature or fix  
3. Commit your changes with clear messages  
4. Push to your branch and create a Pull Request  


## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
