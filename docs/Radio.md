# Radio

The `Radio` component is a styled, theme-aware wrapper around a **selection control**.  
It provides consistent design for single-choice selections across your app with support for sizes, color variants, labels, and full theme integration.

## ✨ Why use the `Radio` component?

React Native does not provide a built-in radio button. Developers often hack together checkboxes or pressable icons, which leads to inconsistent styles, unclear accessibility, and repetitive code.  

Our `Radio` component solves this by:

- ✅ **Consistent Styling** – Unified sizes and colors defined in your theme.  
- ✅ **Theme Integration** – Automatically adapts to light/dark themes or custom palettes.  
- ✅ **Label Support** – Built-in label text with proper spacing and accessibility.  
- ✅ **Disabled State** – Easily disable radios with consistent opacity and style.  
- ✅ **Group Support** – Works seamlessly inside a `RadioGroup` for managing state.  
- ✅ **Extendable** – Customize globally via `ThemeProvider` or per-radio as needed.  


## 📦 Usage Examples

**Basic**

```tsx
import { Radio, RadioGroup, ThemeProvider } from "@geekyhawks/react-native-ui-components";

export default function Example() {
  const [selected, setSelected] = React.useState("option1");

  return (
    <ThemeProvider>
      <RadioGroup value={selected} onChange={setSelected}>
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
        <Radio value="option3" label="Option 3" />
      </RadioGroup>
    </ThemeProvider>
  );
}
```

**Sizes & Colors**

```tsx
<Radio value="sm" label="Small" size="sm" />
<Radio value="md" label="Medium" size="md" />
<Radio value="lg" label="Large" size="lg" />

<Radio value="primary" label="Primary" color="primary" />
<Radio value="secondary" label="Secondary" color="secondary" />
<Radio value="error" label="Error" color="error" />
```

**Disabled**

```tsx
<Radio value="disabled" label="Disabled" disabled />
```


## 📱 Live Example

For a full showcase of all Radio variants and props, check out the [RadioDemoScreen](https://github.com/GeekyHawks/react-native-ui-components/blob/main/example/src/screens/RadioDemoScreen.tsx) inside the **Example App**.

This screen demonstrates how all props work together in a real-world context.


## 🔧 Props

| Prop                 | Type                                                                         | Default     | Description                                                                      |
| -------------------- | ---------------------------------------------------------------------------- | ----------- | -------------------------------------------------------------------------------- |
| `accessibilityLabel` | `string`                                                                     | —           | Accessibility label for screen readers. Defaults to the `label` if not provided. |
| `color`              | `DefaultRadioColors \| (string & {})` <br> *(primary \| secondary \| error)* | `"primary"` | Theme-based or custom color variant.                                             |
| `containerStyle`     | `StyleProp<ViewStyle>`                                                       | —           | Optional override style for the outer container of the radio.                    |
| `disabled`           | `boolean`                                                                    | `false`     | Disables the radio (reduces opacity and disables interaction).                   |
| `label`              | `string`                                                                     | —           | Optional text label displayed next to the radio.                                 |
| `labelTextStyle`     | `StyleProp<TextStyle>`                                                       | —           | Optional style override for the label text.                                      |
| `onChange`           | `(value: string \| number) => void`                                          | —           | Callback triggered when the radio is selected.                                   |
| `size`               | `DefaultRadioSizes \| (string & {})` <br> *(sm \| md \| lg)*                 | `"md"`      | Theme-based or custom size variant.                                              |
| `selectedValue`      | `string \| number`                                                           | —           | Currently selected value in the radio group (to mark as selected).               |
| `value`              | `string \| number`                                                           | —           | Unique value associated with this radio button.                                  |


## 🎨 Variants & Theming

Radio Style, Size, and Color Variants come from your theme configuration, ensuring consistent UI across your app.

### 1. Size Variants

By default, the library ships with:

```tsx
export const defaultSelectionControlSizeVariants = {
  sm: { container: { width: 16, height: 16 }, indicator: { width: 8, height: 8 } },
  md: { container: { width: 20, height: 20 }, indicator: { width: 10, height: 10 } },
  lg: { container: { width: 24, height: 24 }, indicator: { width: 12, height: 12 } },
};
```

Usage:

```tsx
<Radio size="sm" label="Small" />
<Radio size="lg" label="Large" />
```

### 2. Color Variants

By default, the library ships with:

```tsx
export const defaultSelectionControlColorVariants = {
  primary: { borderColor: "primary", backgroundColor: "surface", indicatorColor: "primary" },
  secondary: { borderColor: "secondary", backgroundColor: "surface", indicatorColor: "secondary" },
  error: { borderColor: "error", backgroundColor: "surface", indicatorColor: "error" },
};
```

Usage:

```tsx
<Radio color="secondary" label="Secondary" />
<Radio color="error" label="Error" />
```

### 🔧 Customizing Variants

You can extend the defaults or define your own via the `ThemeProvider`:

```tsx
const customRadioSizeVariants = {
  ...defaultSelectionControlSizeVariants,
  xl: { container: { width: 28, height: 28 }, indicator: { width: 14, height: 14 } },
};

<ThemeProvider radioSizeVariants={customRadioSizeVariants}>
  <Radio size="xl" label="Extra Large" />
</ThemeProvider>
```

## 📓 Notes

- Works best inside `RadioGroup` for managing state.
- Fully theme-aware: extend color/size variants globally or per component.
- Accessibility-ready with label support and `accessibilityLabel`.
- You can still pass standard View/Text props via `containerStyle` and `labelTextStyle`.
