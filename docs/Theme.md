# Theme System

The `Theme` in this library provides a **centralized design system** for typography, colors, and sizes across all UI components.  
It ensures consistency, reduces repeated styles, and makes your app easier to maintain.


## ✨ Why use a theme?

- ✅ **Consistency** – Same font family, font sizes, button sizes and colors across all components.  
- ✅ **Dark Mode / Light Mode** – Automatically adapt components to user’s system preferences or app setting.  
- ✅ **Customizability** – Override defaults to match your brand’s design system.  
- ✅ **Scalability** – Add new variants without rewriting styles everywhere.  


## 🌐 Providing a Theme

Wrap your app with the `ThemeProvider` to enable theme support.

👉 If you don’t provide a `theme` prop, the library will automatically use the built-in **`defaultLightTheme`**.

⚠️ **Important:** The `ThemeProvider` should wrap your entire app (usually in `App.tsx`), so that all components can access the theme consistently.

### Minimal Example

```tsx
import { ThemeProvider, Text } from "@geekyhawks/react-native-ui-components";

export default function App() {
  return (
    <ThemeProvider>
      <Text variant="h1">Hello World</Text>
    </ThemeProvider>
  );
}
```
👆 This uses the `defaultLightTheme` under the hood.

### With Light / Dark Mode

You can also switch themes based on the system preference:

```tsx
import { useColorScheme } from "react-native";
import { ThemeProvider, defaultLightTheme, defaultDarkTheme } from "@geekyhawks/react-native-ui-components";

export default function App() {
  const isDark = useColorScheme() === "dark";

  return (
    <ThemeProvider theme={isDark ? defaultDarkTheme : defaultLightTheme}>
      {/* Your app components here */}
    </ThemeProvider>
  );
}
```


## 🔧 Theme Structure

A typical theme includes:

```tsx
export const defaultLightTheme: Theme = {
    fontFamily: defaultFontFamily,
    colors: {
        text: "#000000",
        background: "#ffffff",
        primary: "#007bff",
        secondary: "#6c757d",
        error: "#dc3545",
        border: "#dee2e6",
        muted: "#6c757d",
    },
};

export const defaultDarkTheme: Theme = {
    fontFamily: defaultFontFamily,
    colors: {
        text: "#ffffff",
        background: "#000000",
        primary: "#339af0",
        secondary: "#adb5bd",
        error: "#fa5252",
        border: "#495057",
        muted: "#ced4da",
    },
};
```


## 🎨 Accessing the Theme in Components

All built-in components (Text, Button, TextInput, FloatingLabelTextInput) automatically pull values from the theme.

You can also access the theme in your custom components using the `useTheme` hook:

```tsx
import { useTheme, Text } from "@geekyhawks/react-native-ui-components";

export default function ThemedBox() {
  const { theme } = useTheme();

  return (
    <View style={{ backgroundColor: theme.colors.background }}>
      <Text color={theme.colors.text}>This box uses theme values!</Text>
    </View>
  );
}
```


## 🛠 Extending the Theme

You can override or extend the default theme to fit your design system.

### Override Default Theme

```tsx
const myTheme: Theme = {
    ...defaultLightTheme,
    fontFamily: customFont,
    colors: {
        ...defaultLightTheme.colors,
        text: "#4B0082",
        background: "#FFF0F5",
        primary: "#FF6347",
    },
};
```

### Custom Theme

```tsx
const customTheme: Theme = {
    fontFamily: customFont,
    colors: {
        text: "#4B0082",
        background: "#FFF0F5",
        primary: "#FF6347",
        secondary: "#4B0082",
        error: "#FF0000",
        border: "#dee2e6",
        muted: "#6c757d",
    },
};
```

### Usage:

```tsx
import { ThemeProvider } from "@geekyhawks/react-native-ui-components";

export default function App() {
  return (
    <ThemeProvider theme={customTheme}>
      {/* Your app components here */}
    </ThemeProvider>
  );
}
```


## 🔧 ThemeProvider & ThemeContext

The `ThemeProvider` internally manages a `ThemeContext`, which provides consistent styling across all components.  

By default, the context includes:

- **theme** → The color palette (light, dark, or custom).
- **textVariants** → Predefined font sizes, weights, and styles (`h1`, `h2`, `body`, `caption`).
- **buttonSizeVariants** → Standard button sizes (`sm`, `md`, `lg`).
- **buttonShapeVariants** → Shape options (`sm`, `md`, `lg`, `full`).
- **textInputStyleVariants** → Variants for the `TextInput` (`outline`, `filled`, `underline`).
- **textInputSizeVariants** → Sizes for the `TextInput` (`sm`, `md`, `lg`).
- **floatingLabelTextInputStyleVariants** → Variants specific to the `FloatingLabelTextInput` (`outline`, `underline`).
- **floatingLabelTextInputSizeVariants** → Sizes specific to the `FloatingLabelTextInput` (`sm`, `md`, `lg`).

This makes it easy to maintain consistent design tokens across your app.

### Example: Customizing a Variant

```tsx
import { ThemeProvider, defaultTextVariants } from "@geekyhawks/react-native-ui-components";

const customTextVariants: TextVariants = {
    ...defaultTextVariants,
    body: { fontSize: 20 }, // larger body text
    myVariant: { fontSize: 22, fontStyle: "italic", color: "#4B0082", fontWeight: "bold" }, // custom variant
};

export default function App() {
  return (
    <ThemeProvider textVariants={customTextVariants}>
      <Text variant="myVariant">My Custom Variant</Text>
    </ThemeProvider>
  );
}
```
This way, you can define and customize **any kind of variant** (text, buttons, inputs, etc.) and pass it into your theme.  
Once provided to the `ThemeProvider`, it becomes available **throughout your entire app**, ensuring consistency without repeating styles in every component.


## 📓 Notes

- Themes are fully typed with TypeScript – so you get autocompletion for colors, textVariants, buttonSizeVariants etc.
- Dark mode is optional – you can provide only a single theme if your app doesn’t need it.
- Works seamlessly with all built-in components.
