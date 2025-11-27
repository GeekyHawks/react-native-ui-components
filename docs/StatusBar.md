# StatusBar

The `StatusBar` component is a **theme-aware wrapper** around React Native’s native `StatusBar`.  
It provides a simple, consistent way to manage the status bar’s background, text color, and translucency — while integrating directly with your app’s theme.

## ✨ Why use the `StatusBar` component?

Managing the native `StatusBar` directly can lead to inconsistent styles across screens and themes.  

Our `StatusBar` component solves this by:

- ✅ **Theme Integration** – Uses your theme’s colors (`background`, `primary`, `secondary`, etc.) automatically.  
- ✅ **Predefined Variants** – Switch between common styles like `default`, `transparent`, `primary`, `secondary`, etc.  
- ✅ **Cross-Platform Consistency** – Works the same way across iOS and Android.  
- ✅ **AppBar Spacer** – Optionally includes a spacer below the status bar for consistent AppBar layouts.  
- ✅ **Customizable** – Easily override colors, bar style, or translucency per screen.  


## 📦 Usage Examples

**Basic**

```tsx
import React from "react";
import { View } from "react-native";
import { StatusBar, ThemeProvider, Text } from "@geekyhawks/react-native-ui-components";

export default function Example() {
  return (
    <ThemeProvider>
      <StatusBar />
      <View>
        <Text>Hello World</Text>
      </View>
    </ThemeProvider>
  );
}
```

### ⚠️ Important: Using with SafeAreaView

When you use `SafeAreaView`, make sure it comes **below** the `StatusBar`.
This ensures the spacer provided by StatusBar is respected, and your content won’t get overlapped.

#### ✅ Correct Usage:

```tsx
import React from "react";
import { StatusBar, ThemeProvider, Text } from "@geekyhawks/react-native-ui-components";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <ThemeProvider>
      <StatusBar variant="default" />
      <SafeAreaView>
        <Text>Hello inside SafeAreaView!</Text>
      </SafeAreaView>
    </ThemeProvider>
  );
}
```

❌ Incorrect Usage (will cause overlap):

```tsx
import React from "react";
import { StatusBar, ThemeProvider, Text } from "@geekyhawks/react-native-ui-components";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar variant="default" />
      <Text>This may overlap!</Text>
    </SafeAreaView>
  );
}
```

**Variants**

| Variant       | Background Color | Bar Style       | Translucent | Description                |
| ------------- | ---------------- | --------------- | ----------- | -------------------------- |
| `default`     | `background`     | `dark-content`  | true        | Suitable for light screens |
| `primary`     | `primary`        | `light-content` | true        | Main accent color bar      |
| `secondary`   | `secondary`      | `light-content` | true        | Secondary accent color bar |
| `surface`     | `surface`        | `dark-content`  | true        | Cards or elevated surfaces |
| `transparent` | `transparent`    | `light-content` | true        | Overlays screen content    |

Usage

```tsx
import { StatusBar, ThemeProvider } from "@geekyhawks/react-native-ui-components";

export default function Example() {
  return (
    <ThemeProvider>
      <StatusBar variant="primary" />
    </ThemeProvider>
  );
}
```

**⚠️ Deprecated Variants (for backward compatibility)**

| Variant | Background Color | Bar Style       | Notes                   |
| ------- | ---------------- | --------------- | ----------------------- |
| `light` | `background`     | `dark-content`  | Maps to `default`       |
| `dark`  | `text`           | `light-content` | Maps to dark background |

`light` and `dark` variants are deprecated and will be removed in an upcoming release. Migrate to `default`, `primary`, `secondary` etc. 

**Custom Props**

```tsx
import { StatusBar, ThemeProvider } from "@geekyhawks/react-native-ui-components";

export default function Example() {
  return (
    <ThemeProvider>
      <StatusBar 
        backgroundColor="red" 
        barStyle="light-content" 
        translucent={false} 
        hideAppBar 
      />
    </ThemeProvider>
  );
}
```


## 📱 Live Example

For a full showcase of all StatusBar variants and props, check out the [StatusBarDemoScreen](https://github.com/GeekyHawks/react-native-ui-components/blob/main/example/src/screens/StatusBarDemoScreen.tsx) inside the **Example App**.

This screen demonstrates how all props work together in a real-world context.


## 🔧 Props

| Prop              | Type                                                                                                                                          | Default            | Description                                     |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ----------------------------------------------- |
| `backgroundColor` | `string`                                                                                                                                      | Theme `background` | Background color (theme token or direct value). |
| `barStyle`        | `"default" \| "light-content" \| "dark-content"`                                                                                              | `"dark-content"`        | Status bar text/icon style.                     |
| `hideAppBar`      | `boolean`                                                                                                                                     | `false`            | Hide the spacer below the status bar.           |
| `translucent`     | `boolean`                                                                                                                                     | `true`             | Enable translucent status bar.                  |
| `variant`         | `DefaultStatusBarVariants \| (string & {})` <br> *`"default" \| "primary" \| "secondary" \| "surface" \| "transparent" \| "light" \| "dark"`* | `"default"`        | Predefined or custom theme-based variant.       |


## 🎨 Variants

Variants come from your theme configuration, ensuring consistent status bar styling across the app.

### Default StatusBar Variants

```tsx
export const defaultStatusBarVariants: StatusBarVariants = {
  default: {
    backgroundColor: "background",
    barStyle: "dark-content",
    translucent: true,
  },
  primary: {
    backgroundColor: "primary",
    barStyle: "light-content",
    translucent: true,
  },
  secondary: {
    backgroundColor: "secondary",
    barStyle: "light-content",
    translucent: true,
  },
  surface: {
    backgroundColor: "surface",
    barStyle: "dark-content",
    translucent: true,
  },
  transparent: {
    backgroundColor: "transparent",
    barStyle: "light-content",
    translucent: true,
  },
  // Deprecated Variants
  light: {
    backgroundColor: "background",
    barStyle: "dark-content",
    translucent: true,
  },
  dark: {
    backgroundColor: "text",
    barStyle: "light-content",
    translucent: true,
  },
};
```

You can use them directly:

```tsx
<StatusBar variant="default" />
<StatusBar variant="transparent" />
<StatusBar variant="primary" />
<StatusBar variant="secondary" />
```


## 📓 Notes

- Works consistently across iOS and Android.
- Perfect for apps with dynamic themes (light/dark).
- Use variant for theme-driven defaults, or override with props for one-off cases.
