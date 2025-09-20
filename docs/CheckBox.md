# CheckBox

The `CheckBox` component is a styled, theme-aware wrapper around a **selection control**.  
It provides consistent design for multi-choice selections across your app with support for sizes, color variants, labels, and full theme integration.

## ✨ Why use the `CheckBox` component?

React Native does not provide a built-in checkbox component. Developers often hack together pressable icons or custom components, which leads to inconsistent styles, unclear accessibility, and repetitive code.  

Our `CheckBox` component solves this by:

- ✅ **Consistent Styling** – Unified sizes and colors defined in your theme.  
- ✅ **Theme Integration** – Automatically adapts to light/dark themes or custom palettes.  
- ✅ **Label Support** – Built-in label text with proper spacing and accessibility.  
- ✅ **Disabled State** – Easily disable checkboxes with consistent opacity and style.  
- ✅ **Multi-Select Support** – Designed for standalone or group use with `selectedValues`.  
- ✅ **Extendable** – Customize globally via `ThemeProvider` or per-checkbox as needed.  


## 📦 Usage Example

```tsx
import React, { useState } from "react";
import { CheckBox, ThemeProvider } from "@geekyhawks/react-native-ui-components";

export default function Example() {
  const [selectedValues, setSelectedValues] = useState<Array<string | number>>([]);

  const handleChange = (value: string | number, checked: boolean) => {
    setSelectedValues((prev) =>
      checked ? [...prev, value] : prev.filter((v) => v !== value)
    );
  };

  return (
    <ThemeProvider>
      <CheckBox
        value="option1"
        label="Option 1"
        selectedValues={selectedValues}
        onChange={handleChange}
      />
      <CheckBox
        value="option2"
        label="Option 2"
        selectedValues={selectedValues}
        onChange={handleChange}
      />
      <CheckBox
        value="option3"
        label="Option 3"
        selectedValues={selectedValues}
        onChange={handleChange}
      />
    </ThemeProvider>
  );
}
```


## 🔧 Props

| Prop             | Type                                                       | Default     | Description                                                           |
| ---------------- | ---------------------------------------------------------- | ----------- | --------------------------------------------------------------------- |
| `color`          | `DefaultCheckBoxColors \| (string & {})`                   | `"primary"` | Theme-based or custom color variant.                                  |
| `disabled`       | `boolean`                                                  | `false`     | Disables interaction and reduces opacity.                             |
| `label`          | `string`                                                   | —           | Optional text label displayed with the checkbox.                      |
| `onChange`       | `(value: string \| number, checked: boolean) => void`      | —           | Callback triggered when checkbox is toggled.                          |
| `selectedValues` | `Array<string \| number>`                                  | —           | Array of selected values, useful for multi-checkbox state management. |
| `size`           | `DefaultCheckBoxSizes \| (string & {})` *(sm \| md \| lg)* | `"md"`      | Theme-based or custom size variant.                                   |
| `value`          | `string \| number`                                         | —           | Unique value associated with this checkbox.                           |


## 🎨 Variants & Theming

CheckBox variants come from your theme configuration, ensuring consistent styles across the app.

### 1. Size Variants

Control the checkbox dimensions and indicator size.

```tsx
export const defaultCheckBoxSizeVariants: CheckBoxSizeVariants = {
  sm: {
    container: { width: 16, height: 16 },
    indicator: { width: 8, height: 8 },
  },
  md: {
    container: { width: 20, height: 20 },
    indicator: { width: 10, height: 10 },
  },
  lg: {
    container: { width: 24, height: 24 },
    indicator: { width: 12, height: 12 },
  },
};
```

Usage:

```tsx
<CheckBox size="sm" label="Small" value="small" selectedValues={["small"]} />
<CheckBox size="lg" label="Large" value="large" selectedValues={["large"]} />
```

### 2. Color Variants

Control the border, background, and checkmark colors.

```tsx
export const defaultCheckBoxColorVariants: CheckBoxColorVariants = {
  primary: {
    borderColor: "primary",
    backgroundColor: "surface",
    indicatorColor: "primary",
  },
  secondary: {
    borderColor: "secondary",
    backgroundColor: "surface",
    indicatorColor: "secondary",
  },
  error: {
    borderColor: "error",
    backgroundColor: "surface",
    indicatorColor: "error",
  },
};
```

Usage:

```tsx
<CheckBox color="secondary" label="Secondary" value="secondary" selectedValues={["secondary"]} />
<CheckBox color="error" label="Error" value="error" selectedValues={["error"]} />
```

### 🔧 Customizing Variants

You can extend the defaults or define your own via the `ThemeProvider`:

```tsx
const customCheckBoxSizeVariants = {
  ...defaultCheckBoxSizeVariants,
  xl: { container: { width: 28, height: 28 }, indicator: { width: 14, height: 14 } },
};

<ThemeProvider checkBoxSizeVariants={customCheckBoxSizeVariants}>
  <CheckBox size="xl" label="Extra Large" value="xl" />
</ThemeProvider>
```

## 📓 Notes

- Designed for **multi-select** use cases.
- Fully theme-aware: extend color/size variants globally or per component.
- Can be used standalone or in a group (by managing `selectedValues`).
