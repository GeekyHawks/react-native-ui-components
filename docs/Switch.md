# Switch

The `Switch` component is a styled, theme-aware wrapper around React Native’s native switch control.  
It provides consistent design for boolean toggles across your app with support for color variants, labels, and full theme integration.

## ✨ Why use the Switch component?

React Native’s built-in `Switch` is minimal and inconsistent across platforms.  
Styling and theming usually require extra effort, leading to duplication and mismatched UI.

Our `Switch` component solves this by:

- ✅ **Consistent Styling** – Unified color variants defined in your theme.  
- ✅ **Theme Integration** – Automatically adapts to light/dark themes or custom palettes.  
- ✅ **Label Support** – Built-in label text with proper spacing and accessibility.  
- ✅ **Disabled State** – Easily disable switches with consistent opacity and style.  
- ✅ **Extendable** – Customize globally via `ThemeProvider` or per-switch as needed.  


## 📦 Usage Example

```tsx
import React, { useState } from "react";
import { Switch, ThemeProvider } from "@geekyhawks/react-native-ui-components";

export default function Example() {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggle = (value: boolean) => {
    setIsEnabled(value);
  };

  return (
    <ThemeProvider>
      <Switch
        value={isEnabled}
        onValueChange={handleToggle}
        label="Enable Notifications"
      />
    </ThemeProvider>
  );
}
```


## 📱 Live Example

For a full showcase of all Switch variants and props, check out the [SwitchDemoScreen](https://github.com/GeekyHawks/react-native-ui-components/blob/main/example/src/screens/SwitchDemoScreen.tsx) inside the **Example App**.

This screen demonstrates how all props work together in a real-world context.


## 🔧 Props

| Prop                 | Type                                   | Default     | Description                                                                             |
| -------------------- | -------------------------------------- | ----------- | --------------------------------------------------------------------------------------- |
| `accessibilityLabel` | `string`                               | —           | Accessibility label for screen readers. Defaults to the `label` if not provided.        |
| `color`              | `DefaultSwitchColors \| (string & {})` | `"primary"` | Theme-based or custom color variant name for the switch track and thumb.                |
| `colorVariants`      | `SwitchColorVariants`                  | —           | Optional collection of color variant styles. Allows custom color definitions per theme. |
| `containerStyle`     | `StyleProp<ViewStyle>`                 | —           | Optional style for the outer container of the switch.                                   |
| `disabled`           | `boolean`                              | `false`     | Disables the switch and reduces opacity for a disabled look.                            |
| `label`              | `string`                               | —           | Optional text label displayed next to the switch.                                       |
| `labelTextStyle`     | `StyleProp<TextStyle>`                 | —           | Optional override style for the label text.                                             |
| `onValueChange`      | `(value: boolean) => void`             | —           | Callback triggered when the switch is toggled. Receives the new boolean value.          |
| `value`              | `boolean`                              | —           | Current boolean state of the switch.                                                    |


## 🎨 Variants & Theming

Switch variants come from your theme configuration, ensuring consistent styles across the app.

### Color Variants

```tsx
export const defaultSwitchColorVariants: SwitchColorVariants = {
  primary:   { trackColorOn: "primary",   trackColorOff: "surfaceVariant", thumbColor: "onPrimary" },
  secondary: { trackColorOn: "secondary", trackColorOff: "surfaceVariant", thumbColor: "onSecondary" },
  success:   { trackColorOn: "success",   trackColorOff: "surfaceVariant", thumbColor: "onSuccess" },
  error:     { trackColorOn: "error",     trackColorOff: "surfaceVariant", thumbColor: "onError" },
};
```

Usage:

```tsx
<Switch color="primary" label="Primary" />
<Switch color="secondary" label="Secondary" />
```

### 🔧 Customizing Variants

You can extend the defaults or define your own via the `ThemeProvider`:

```tsx
const customSwitchColorVariants = {
  ...defaultSwitchColorVariants,
  warning: { trackColorOn: "warning", trackColorOff: "surfaceVariant", thumbColor: "onWarning" },
};

<ThemeProvider switchColorVariants={customSwitchColorVariants}>
  <Switch value={true} onValueChange={() => {}} color="warning" label="Warning" />
</ThemeProvider>
```

## 📓 Notes

- Fully theme-aware: extend color variants globally or per component.
- Recommended for simple boolean toggles in forms, settings, or preferences.
- Accessibility-ready with label support and `accessibilityLabel`.
- You can still pass standard View/Text props via `containerStyle` and `labelTextStyle`.
