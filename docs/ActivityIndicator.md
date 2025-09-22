# ActivityIndicator

The `ActivityIndicator` component is a theme-aware wrapper around React Native’s native `ActivityIndicator`.  
It provides a consistent way to show loading spinners with optional text, while integrating directly with your app’s theme.


## ✨ Why use the `ActivityIndicator` component?

Using the raw React Native `ActivityIndicator` often requires duplicating styling logic (spinner size, color, and text placement) across screens.  

Our `ActivityIndicator` component solves this by:

- ✅ **Theme Integration** – Spinner and text colors adapt automatically to your theme.  
- ✅ **Predefined Variants** – Switch between `default`, `small`, and `large` indicators instantly.  
- ✅ **Text Support** – Add loading messages with customizable position, color, and style.  
- ✅ **Cross-Platform Consistency** – Works the same across iOS and Android.  
- ✅ **Customizable** – Easily override colors, size, text, or container style.  


## 📦 Usage Examples

**Basic Spinner**

```tsx
import { ActivityIndicator, ThemeProvider } from "@geekyhawks/react-native-ui-components";

export default function Example() {
  return (
    <ThemeProvider>
      <ActivityIndicator />
    </ThemeProvider>
  );
}
```

### Spinner with Text

```tsx
<ActivityIndicator text="Loading..." />
```

### Custom Size and Color

```tsx
<ActivityIndicator size="small" color="red" />
```

### Different Text Positions

```tsx
<ActivityIndicator text="Fetching Data..." textPosition="right" />
<ActivityIndicator text="Processing..." textPosition="bottom" />
```

### With Variants

```tsx
<ActivityIndicator variant="small" text="Loading Small" />
<ActivityIndicator variant="large" text="Loading Large" />
```


## 📱 Live Example

For a full showcase of all ActivityIndicator variants and props, check out the [ActivityIndicatorDemoScreen](https://github.com/GeekyHawks/react-native-ui-components/blob/main/example/src/screens/ActivityIndicatorDemoScreen.tsx) inside the **Example App**.

This screen demonstrates how all props work together in a real-world context.


## 🔧 Props

| Prop             | Type                                                                                   | Default     | Description                                     |
| ---------------- | -------------------------------------------------------------------------------------- | ----------- | ----------------------------------------------- |
| `color`          | `ColorValue`                                                                           | `"primary"` | Override indicator color.                       |
| `containerStyle` | `StyleProp<ViewStyle>`                                                                 | —           | Style for the outer container wrapping spinner. |
| `size`           | `number \| "small" \| "large"`                                                         | `"large"`   | Override indicator size.                        |
| `text`           | `string`                                                                               | —           | Optional loading text.                          |
| `textColor`      | `ColorValue`                                                                           | `"text"`    | Color for loading text.                         |
| `textPosition`   | `"left" \| "right" \| "top" \| "bottom"`                                               | `"right"`   | Position of text relative to spinner.           |
| `textStyle`      | `StyleProp<TextStyle>`                                                                 | —           | Style for text.                                 |
| `variant`        | `DefaultActivityIndicatorVariants \| (string & {})` <br> *(default \| small \| large)* | `"default"` | Choose from default or custom variants.         |


## 🎨 Variants

Variants come from your theme configuration, ensuring consistent loading indicators across the app.

### Default ActivityIndicator Variants

```tsx
export const defaultActivityIndicatorVariants: ActivityIndicatorVariants = {
  default: {
    size: "large",
    color: "primary",
    textColor: "text",
  },
  small: {
    size: "small",
    color: "primary",
    textColor: "text",
  },
  large: {
    size: "large",
    color: "primary",
    textColor: "text",
  },
};
```

You can use them directly:

```tsx
<ActivityIndicator variant="default" text="Loading..." />
<ActivityIndicator variant="small" text="Loading Small..." />
<ActivityIndicator variant="large" text="Loading Large..." />
```

## 📓 Notes

- Text styling and positioning is fully customizable via textStyle and textPosition.
- Colors automatically resolve from your theme (primary, text, etc.).
- Ideal for showing progress while fetching data, submitting forms, or navigating between screens.
