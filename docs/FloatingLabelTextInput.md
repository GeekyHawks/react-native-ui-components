# FloatingLabelTextInput

The `FloatingLabelTextInput` adds a floating label to `TextInput` that animates above the field when focused or when a value is present.

## ✨ Why use the `FloatingLabelTextInput` component?

React Native’s built-in TextInput provides raw input functionality but lacks advanced UX features like floating labels (where the placeholder animates into a label once you type). Developers often end up building custom animated wrappers, leading to inconsistent experiences across screens.

Our FloatingLabelTextInput solves this by:

- ✅ **Consistent UX** – Floating label behavior works out of the box.
- ✅ **Theme Integration** – Colors, font sizes, and borders adapt to your theme automatically.
- ✅ **Variants for Consistency** – Define input sizes and label styles via theme variants.
- ✅ **Error & Helper Text** – Easily display validation errors and helper messages.
- ✅ **Icon Support** – Add left/right icons for enhanced usability.
- ✅ **Extendable** – Customize label animation, colors, or completely override styles.


## Usage

**Basic**

```tsx
import { Image } from "react-native";
import { FloatingLabelTextInput, ThemeProvider } from "@geekyhawks/react-native-ui-components";

export default function Example() {
  return (
    <ThemeProvider>
      {/* FloatingLabelTextInput Variants */}
      <FloatingLabelTextInput
        label="Email Address"
        containerStyle={{ marginTop: 10 }}
        onChangeText={(text) => {
          // Do something with text
        }} />
      <FloatingLabelTextInput variant="underline" label="Email Address" containerStyle={{ marginTop: 10 }} />

      {/* FloatingLabelTextInput Size Variants */}
      <FloatingLabelTextInput size="sm" label="Email Address" containerStyle={{ marginTop: 10 }} />
      <FloatingLabelTextInput size="md" label="Email Address" containerStyle={{ marginTop: 10 }} />
      <FloatingLabelTextInput size="lg" label="Email Address" containerStyle={{ marginTop: 10 }} />

      {/* Password FloatingLabelTextInput with toggle */}
      <FloatingLabelTextInput
        label="Password"
        secureTextEntry
        passwordToggleIcons={{
          show: (
            <Image
              source={require("../../assets/show-password.png")}
              style={{ width: 20, height: 20, tintColor: "#007bff" }}
              resizeMode="contain"
            />
          ),
          hide: (
            <Image
              source={require("../../assets/hide-password.png")}
              style={{ width: 20, height: 20, tintColor: "#007bff" }}
              resizeMode="contain"
            />
          ),
        }}
        containerStyle={{ marginTop: 20 }}
      />

      {/* FloatingLabelTextInput with helperText and loading state */}
      <FloatingLabelTextInput
        label="Username"
        size="md"
        helperText="Validating..."
        value="johndoe"
        loading
        containerStyle={{ marginTop: 20 }}
      />

      {/* Disabled FloatingLabelTextInput */}
      <FloatingLabelTextInput
        label="Email (Disabled)"
        helperText="You cannot edit this field"
        disabled
        containerStyle={{ marginTop: 20 }}
      />

      {/* Default FloatingLabelTextInput with Error */}
      <FloatingLabelTextInput
        label="Name"
        error="This is error"
        errorPosition="right"
        containerStyle={{ marginTop: 20 }}
      />

      {/* Default Multiline FloatingLabelTextInput */}
      <FloatingLabelTextInput
        label="Description"
        multiline
        numberOfLines={4}
        helperText="Enter at least 20 characters"
        containerStyle={{ marginTop: 20 }}
      />
    </ThemeProvider>
  );
}
```

**Light / Dark Theme**

```tsx
import { useColorScheme } from "react-native";
import { defaultDarkTheme, defaultLightTheme, FloatingLabelTextInput, ThemeProvider } from "@geekyhawks/react-native-ui-components";

export default function Example() {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <ThemeProvider theme={isDarkMode ? defaultDarkTheme : defaultLightTheme}>
      <FloatingLabelTextInput label="Email Address" containerStyle={{ marginTop: 10 }} />
      <FloatingLabelTextInput variant="underline" label="Email Address" containerStyle={{ marginTop: 10 }} />
    </ThemeProvider>
  );
}
```


## 📱 Live Example

For a full showcase of all floating label text input variants, states, and sizes, check out the [FloatingLabelDemoScreen](https://github.com/GeekyHawks/react-native-ui-components/blob/main/example/src/screens/FloatingLabelDemoScreen.tsx) inside the **Example App**.

This screen demonstrates how all props work together in a real-world context.


## Props

| Prop                  | Type                                                                                   | Default             | Description                                                                                                    |
| --------------------- | -------------------------------------------------------------------------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------- |
| `accessible`          | `boolean`                                                                              | `true`              | Whether the input is accessible for screen readers                                                             |
| `accessibilityLabel`  | `string`                                                                               | —                   | Accessibility label for screen readers                                                                         |
| `accessibilityState`  | `AccessibilityState` (RN)                                                              | —                   | Accessibility state for screen readers                                                                         |
| `containerStyle`      | `StyleProp<ViewStyle>`                                                                 | —                   | Style for the outer container                                                                                  |
| `disabled`            | `boolean`                                                                              | `false`             | Disables the input field                                                                                       |
| `error`               | `string`                                                                               | —                   | Error message displayed below input                                                                            |
| `errorPosition`       | `"left"` \| `"center"` \| `"right"`                                                    | `"left"`            | Position of the error message                                                                                  |
| `fontFamily`          | `string`                                                                               | Theme default       | Optional font family for the input text                                                                        |
| `fullWidth`           | `boolean`                                                                              | `true`              | Makes the input take full width of its container                                                               |
| `helperText`          | `string`                                                                               | —                   | Helper text displayed below input                                                                              |
| `helperTextStyle`     | `StyleProp<TextStyle>`                                                                 | —                   | Style for the helper text                                                                                      |
| `inputContainerStyle` | `StyleProp<ViewStyle>`                                                                 | —                   | Style for the input wrapper container                                                                          |
| `inputStyle`          | `StyleProp<TextStyle>`                                                                 | —                   | Style for the text input                                                                                       |
| `label`               | `string`                                                                               | —                   | Floating label text                                                                                            |
| `labelStyle`          | `StyleProp<TextStyle>`                                                                 | —                   | Style for the floating label                                                                                   |
| `loading`             | `boolean`                                                                              | `false`             | Shows loading state                                                                                            |
| `passwordToggleIcons` | `{ show?: React.ReactNode; hide?: React.ReactNode }`                                   | `"Show"` / `"Hide"` | Custom icons for toggling password visibility. If not provided, default text `"Show"` / `"Hide"` is displayed. |
| `secureTextEntry`     | `boolean`                                                                              | —                   | Hides input text for password fields                                                                           |
| `size`                | `DefaultFloatingLabelTextInputSizes` \| `(string & {})`  <br> *(sm \| md \| lg)*       | `"md"`              | Input size (predefined or custom)                                                                              |
| `style`               | `StyleProp<ViewStyle>`                                                                 | —                   | Style for the root component                                                                                   |
| `variant`             | `DefaultFloatingLabelTextInputStyles` \| `(string & {})` <br> *(outline \| underline)* | `"outline"`         | Input style variant (predefined or custom)                                                                     |
| `...props`            | `TextInputProps` (RN)                                                                  | —                   | All native RN `TextInput` props                                                                                |


## 🎨 Variants

FloatingLabelTextInput Style and Size Variants come from your theme configuration, ensuring consistent typography and styles across the app.

### 1. Style Variants

Control the visual style of the TextInput itself. Available options are:

- **outline** → Text input with a visible border (default gray or themed color), transparent background.
- **underline** → Text input with only a bottom border/underline, giving a lightweight look.

Example

```tsx
<FloatingLabelTextInput variant="outline" />
<FloatingLabelTextInput variant="underline" />
```

### 2 Size Variants

Control the overall padding and font size and label font size of the text input.

#### Default FloatingLabelTextInput Size Variants

By default, the library ships with a set of default text input size variants:

```tsx
export const defaultFloatingLabelTextInputSizeVariants: FloatingLabelTextInputSizeVariants = {
  sm: { fontSize: 14, paddingVertical: 6, labelFontSize: 11 },
  md: { fontSize: 16, paddingVertical: 8, labelFontSize: 12 },
  lg: { fontSize: 18, paddingVertical: 10, labelFontSize: 14 },
};
```

You can use them directly:

```tsx
<FloatingLabelTextInput size="sm" />
<FloatingLabelTextInput size="md" />
<FloatingLabelTextInput size="lg" />
```

### 🔧 Customizing Variants

You’re not limited to the defaults — you can extend them or define your own completely:

#### Extend Default Variants

```tsx
const customFloatingSizeVariants: FloatingLabelTextInputSizeVariants = {
  ...defaultFloatingLabelTextInputSizeVariants,  // extend existing ones
  xl: { fontSize: 20, paddingVertical: 14, labelFontSize: 16 },
};
```

#### Custom Variants

```tsx
const customFloatingSizeVariants: FloatingLabelTextInputSizeVariants = {
  sm: { fontSize: 18, paddingVertical: 6, labelFontSize: 11 },
  md: { fontSize: 20, paddingVertical: 8, labelFontSize: 12 },
  lg: { fontSize: 22, paddingVertical: 10, labelFontSize: 14 },
  xl: { fontSize: 24, paddingVertical: 14, labelFontSize: 16 },
};
```

Then you can use:

```tsx
import { TextInput, ThemeProvider } from "@geekyhawks/react-native-ui-components";

export default function Example() {
  return (
    <ThemeProvider floatingLabelTextInputSizeVariants={customFloatingSizeVariants}>
      <FloatingLabelTextInput size="xl" label="XL Floating Label" />
    </ThemeProvider>
  );
}
```

## 📓 Notes

- Theming ensures your floating labels, borders, and colors remain consistent across the app.
- Especially useful in forms where multiple inputs need the same animated label behavior.
- You can still pass all regular React Native TextInput props like secureTextEntry, keyboardType, autoCapitalize, etc.
- Supports helper text, error messages, and icons without requiring extra wrappers.
- Floating label animation is automatically triggered when the input is focused or contains a value.
