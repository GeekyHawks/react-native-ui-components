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

👉 The library ships with basic built-in themes: `defaultLightTheme` and `defaultDarkTheme`.

```tsx
import { defaultLightTheme, defaultDarkTheme } from "@geekyhawks/react-native-ui-components";
```

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

👉 You’re not limited to the built-in light and dark themes — you can also define and pass your own custom themes to fully match your brand or design system.


## 🔧 Theme Structure

A typical theme includes:

```tsx
export const defaultFontFamily = "System";

export const defaultLightColors: ThemeColors = {
    background: "#ffffff",
    border: "#dee2e6",
    error: "#dc3545",
    muted: "#6c757d",
    primary: "#007bff",
    secondary: "#6c757d",
    text: "#000000",
}

export const defaultDarkColors: ThemeColors = {
    background: "#000000",
    border: "#495057",
    error: "#fa5252",
    muted: "#ced4da",
    primary: "#339af0",
    secondary: "#adb5bd",
    text: "#ffffff",
}

export const defaultSpacing: ThemeSpacing = {
    none: 0,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
};

export const defaultLightTheme = createTheme({
    fontFamily: defaultFontFamily,
    colors: defaultLightColors,
    spacing: defaultSpacing,
});

export const defaultDarkTheme = createTheme({
    fontFamily: defaultFontFamily,
    colors: defaultDarkColors,
    spacing: defaultSpacing,
});
```


## 🛠 Custom Theme

You can override or extend the default theme to create Custom Theme to fit your design system.

### Override Default Theme

You can start with a built-in theme (like `defaultLightTheme` or `defaultDarkTheme`) and then spread it to keep all the defaults. From there, you can either override existing keys or add brand-new keys to fit your design system.

```tsx
const myTheme = createTheme({
    ...defaultLightTheme, // start from the default theme

    // override only fontFamily and colors
    fontFamily: "YourFont",
    colors: {
        ...defaultLightTheme.colors, // keep defaults
        text: "#4B0082",
        background: "#FFF0F5",
        primary: "#FF6347",
        myColor: "#FF1234" // New Custom Color
    },
});
```

### Custom Theme

```tsx
const myTheme = createTheme({
    fontFamily: "CustomFont",
    colors: {
        text: "#4B0082",
        background: "#FFF0F5",
        primary: "#FF6347",
        secondary: "#4B0082",
        error: "#FF0000",
        border: "#dee2e6",
        muted: "#6c757d",
    },
    spacing: {
        none: 0,
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
    }
});
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


## 🔧 ThemeProvider & ThemeContext

The `ThemeProvider` internally manages a `ThemeContext`, which provides consistent styling across all components.  

By default, the context includes:

- **theme** → The color palette (light, dark, or custom).
- **textVariants** → Predefined font sizes, weights, and styles (`h1`, `h2`, `body`, `caption`).
- **buttonSizeVariants** → Defines consistent sizing for buttons by controlling padding, text font size, and icon-only button dimensions (`sm`, `md`, `lg`).
- **buttonShapeVariants** → Defines the corner radius of buttons for consistent shapes (`sm`, `md`, `lg`, `full`).
- **textInputStyleVariants** → Predefined visual styles for the `TextInput` (`outline`, `filled`, `underline`). Controls border, background, and underline appearance.
- **textInputSizeVariants** → Defines consistent sizing for `TextInput` by controlling font size and vertical padding (`sm`, `md`, `lg`).
- **floatingLabelTextInputStyleVariants** → Visual styles specific to the `FloatingLabelTextInput` (`outline`, `underline`). Controls how the border/underline and floating label behave.
- **floatingLabelTextInputSizeVariants** → Sizes specific to `FloatingLabelTextInput` that adjust font size, padding, and label size (`sm`, `md`, `lg`).

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
