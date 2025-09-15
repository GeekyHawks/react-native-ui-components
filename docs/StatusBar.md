# StatusBar

The `StatusBar` component is a **theme-aware wrapper** around React Native’s native `StatusBar`.  
It provides a simple, consistent way to manage the status bar’s background, text color, and translucency — while integrating directly with your app’s theme.

## ✨ Why use the `StatusBar` component?

Managing the native `StatusBar` directly can lead to inconsistent styles across screens and themes.  

Our `StatusBar` component solves this by:

- ✅ **Theme Integration** – Uses your theme’s colors (`primary`, `background`, `text`, etc.) automatically.  
- ✅ **Predefined Variants** – Switch between common styles like `default`, `transparent`, `light`, and `dark`.  
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

```tsx
import { StatusBar, ThemeProvider } from "@geekyhawks/react-native-ui-components";

export default function Example() {
  return (
    <ThemeProvider>
      <StatusBar variant="light" />
      <StatusBar variant="dark" />
      <StatusBar variant="transparent" />
    </ThemeProvider>
  );
}
```

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


## 🔧 Props

| Prop              | Type                                                                                 | Default         | Description                                                             |
| ----------------- | ------------------------------------------------------------------------------------ | --------------- | ----------------------------------------------------------------------- |
| `backgroundColor` | `string`                                                                             | Theme `primary` | Background color (theme token or direct value). Defaults to `primary`.  |
| `barStyle`        | `"default" \| "light-content" \| "dark-content"`                                     | `"default"`     | Status bar text color style.                                            |
| `hideAppBar`      | `boolean`                                                                            | `false`         | Hide the app bar spacer below the status bar.                           |
| `translucent`     | `boolean`                                                                            | `true`          | Enable translucent status bar.                                          |
| `variant`         | `DefaultStatusBarVariants \| (string & {})` <br> *("default" \| "transparent" \| "light" \| "dark")* | `"default"`     | Predefined status bar variant (theme-based) or custom.                  |


## 🎨 Variants

Variants come from your theme configuration, ensuring consistent status bar styling across the app.

### Default StatusBar Variants

```tsx
export const defaultStatusBarVariants: StatusBarVariants = {
  default: {
    backgroundColor: "primary",
    barStyle: "light-content",
    translucent: true,
  },
  transparent: {
    backgroundColor: "transparent",
    barStyle: "light-content",
    translucent: true,
  },
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
<StatusBar variant="light" />
<StatusBar variant="dark" />
```


## 📓 Notes

- Works consistently across iOS and Android.
- Perfect for apps with dynamic themes (light/dark).
- Use variant for theme-driven defaults, or override with props for one-off cases.
