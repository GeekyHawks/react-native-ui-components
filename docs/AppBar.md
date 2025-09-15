# AppBar

The `AppBar` component is a theme-aware, customizable top navigation bar for React Native apps.  
It provides a consistent way to display titles, navigation icons, and actions while integrating directly with your theme.  


## ✨ Why use the AppBar component?

Building your own app bar often leads to inconsistent designs and duplicated logic across screens.  
Our `AppBar` component solves this by:

✅ **Theme Integration** – Uses your theme’s colors, typography, and spacing automatically.  
✅ **Predefined Variants** – Common styles like `default`, `transparent`, and `elevated`.  
✅ **Navigation Ready** – Built-in support for back buttons and icon click handlers.  
✅ **Customizable** – Easily override icons, text styles, or container styles.  
✅ **Cross-Platform Consistency** – Works the same across iOS and Android.  


## 📦 Usage Examples

**Basic**

```tsx
import React from "react";
import { View } from "react-native";
import { AppBar, StatusBar, Text } from "@geekyhawks/react-native-ui-components";

export default function App() {
  return (
    <>
      <StatusBar variant="default" />
      <AppBar heading="Home" backButton={{ showBackButton: false }} />
      <View>
        <Text>Welcome to the app!</Text>
      </View>
    </>
  );
}
```

**With Back Button**

```tsx
<AppBar
  heading="Details"
  backButton={{
    showBackButton: true,
    onBackPress: () => console.log("Back pressed"),
  }}
/>
```

***With Custom Icons***

```tsx
<AppBar
  heading="Dashboard"
  leftIcon={<CustomMenuIcon />}
  onLeftIconPress={() => console.log("Menu pressed")}
  rightIcon={<CustomSettingsIcon />}
  onRightIconPress={() => console.log("Settings pressed")}
/>
```

### ⚠️ Using with SafeAreaView

Just like `StatusBar`, ensure that `SafeAreaView` is placed below the `AppBar` (not wrapping it).
Otherwise, the bar may overlap with your content.

#### ✅ Correct Usage:

```tsx
<>
  <StatusBar variant="default" />
  <AppBar heading="Profile" backButton={{ showBackButton: false }} />
  <SafeAreaView>
    <Text>Inside SafeAreaView</Text>
  </SafeAreaView>
</>
```

#### ❌ Incorrect Usage:

```tsx
<SafeAreaView>
  <StatusBar variant="default" />
  <AppBar heading="Profile" backButton={{ showBackButton: false }} />
  <Text>This may overlap!</Text>
</SafeAreaView>
```


## 🔧 Props

| Prop                | Type                                                                 | Default     | Description                                                                 |
| ------------------- | -------------------------------------------------------------------- | ----------- | --------------------------------------------------------------------------- |
| `backButton`        | `ShowBackButton \| HideBackButton`                                   | —           | Show or hide a back button. If shown, requires `onBackPress`.                |
| `containerStyle`    | `StyleProp<ViewStyle>`                                               | —           | Style for the outer container.                                              |
| `heading`           | `string`                                                             | —           | Title text to display in the center.                                        |
| `headerTextStyle`   | `StyleProp<TextStyle>`                                               | —           | Style for the title text.                                                   |
| `leftIcon`          | `React.ReactNode`                                                    | —           | Custom left icon (before title).                                            |
| `leftIconStyle`     | `StyleProp<ViewStyle>`                                               | —           | Style for the left icon container.                                          |
| `onLeftIconPress`   | `() => void`                                                         | —           | Click handler for left icon.                                                |
| `rightIcon`         | `React.ReactNode`                                                    | —           | Custom right icon (after title).                                            |
| `rightIconStyle`    | `StyleProp<ViewStyle>`                                               | —           | Style for the right icon container.                                         |
| `onRightIconPress`  | `() => void`                                                         | —           | Click handler for right icon.                                               |
| `variant`           | `DefaultAppBarVariants \| (string & {})` <br> *(default \| transparent \| elevated)* | `"default"` | Choose from default or custom app bar variants.                             |


### 🔀 Back Button Types

```tsx
type ShowBackButton = {
  showBackButton: true;
  onBackPress: () => void;
  backIcon?: React.ReactNode;
};

type HideBackButton = {
  showBackButton: false;
};
```


## 🎨 Variants

Variants define the default look & feel of the AppBar for different use cases.
You can extend or override these in your theme.

### Default AppBar Variants

```tsx
export const defaultAppBarVariants: AppBarVariants = {
  default: {
    container: {
      height: 56,
      backgroundColor: "primary",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 16,
    },
    title: { fontSize: 18, fontWeight: "bold", color: "onPrimary" },
    backButton: {
      container: { padding: 8 },
      icon: { width: 24, height: 24, tintColor: "onPrimary" },
      text: { fontSize: 16, color: "onPrimary" },
    },
    leftIcon: { container: { padding: 8 } },
    rightIcon: { container: { padding: 8 } },
  },
  transparent: {
    container: {
      height: 56,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 16,
      backgroundColor: "transparent",
    },
    title: { fontSize: 18, fontWeight: "bold", color: "text" },
    backButton: {
      container: { padding: 8 },
      icon: { width: 24, height: 24, tintColor: "text" },
      text: { fontSize: 16, color: "text" },
    },
    leftIcon: { container: { padding: 8 } },
    rightIcon: { container: { padding: 8 } },
  },
  elevated: {
    container: {
      height: 56,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 16,
      backgroundColor: "surface",
      elevation: 4,
      shadowColor: "shadow",
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
    },
    title: { fontSize: 18, fontWeight: "bold", color: "onSurface" },
    backButton: {
      container: { padding: 8 },
      icon: { width: 24, height: 24, tintColor: "onSurface" },
      text: { fontSize: 16, color: "onSurface" },
    },
    leftIcon: { container: { padding: 8 } },
    rightIcon: { container: { padding: 8 } },
  },
};
```

You can use them directly:

```tsx
<AppBar variant="default" heading="Home" backButton={{ showBackButton: false }} />
<AppBar variant="transparent" heading="Profile" backButton={{ showBackButton: false }} />
<AppBar variant="elevated" heading="Dashboard" backButton={{ showBackButton: false }} />
```

## 📓 Notes

- Theming ensures your app’s app bars are consistent everywhere.
- Variants (default, transparent, elevated) cover the most common use cases.
- Ideal for large projects where multiple developers work on the same UI.
- You can still fully customize icons, text, and container styles via props or theme overrides.
