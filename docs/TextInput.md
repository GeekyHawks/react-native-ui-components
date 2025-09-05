# TextInput

The `TextInput` component is a styled wrapper around React Native’s `TextInput`, with built-in **theme integration**, **variants**, and **consistent styling** across your app.

## ✨ Why use the `TextInput` component?

Since React Native’s default `TextInput` provides only barebones functionality, developers often end up styling each input differently — leading to inconsistent padding, borders, colors, and font sizes across the app.  

Our `TextInput` component solves this problem by:  

- ✅ **Centralized Styling** – Define border colors, padding, and typography in the theme instead of per screen.  
- ✅ **Consistent Variants** – Use predefined style and size variants for uniform input fields.  
- ✅ **Theme Integration** – Automatically adapts to light/dark themes or any custom theme setup.  
- ✅ **Customizable** – Extend or override style/size variants for your project needs.  
- ✅ **Error & Helper Support** – Built-in props for showing error messages and helper text.  


## 📦 Usage Examples

**Basic**

```tsx
import { Image } from "react-native";
import { TextInput, ThemeProvider } from "@geekyhawks/react-native-ui-components";
import { MaterialIcons } from "@react-native-vector-icons/material-icons";

export default function Example() {
  return (
    <ThemeProvider>
      {/* TextInput Variants */}
      <TextInput
        label="Default"
        placeholder="Defaut TextInput"
        onChangeText={(text) => {
          // Do something with text
        }} />
      <TextInput variant="underline" label="Underline" placeholder="Underline Example" />
      <TextInput variant="filled" label="Filled" placeholder="Filled Example" />

      {/* TextInput Size Variants */}
      <TextInput size="sm" label="Small" placeholder="Small" />
      <TextInput size="md" label="Medium" placeholder="Medium" />
      <TextInput size="lg" label="Large" placeholder="Large" />

      {/* Password TextInput with Toggle Icons */}
      <TextInput
        label="Password"
        placeholder="Enter your password"
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
      />

      {/* TextInput with Icons */}
      <TextInput
        label="Icons"
        placeholder="Left and Right Icons"
        leftIcon={
          <Image
            source={require("../../assets/press-button.png")}
            style={{ width: 20, height: 20, tintColor: "#007bff" }}
            resizeMode="contain"
          />
        }
        rightIcon={
          <MaterialIcons name="home" color="white" size={20} />
        }
      />

      {/* TextInput with helperText and loading state */}
      <TextInput
        label="Username"
        placeholder="Username"
        helperText="Validating..."
        loading
      />

      {/* Disabled TextInput */}
      <TextInput
        label="Email (Disabled)"
        placeholder="Disabled input"
        helperText="You cannot edit this field"
        disabled
      />

      {/* Default TextInput with Error */}
      <TextInput
        label="Name"
        placeholder="Your Name"
        error="This is error"
        errorPosition="right"
      />

      {/* Default Multiline TextInput */}
      <TextInput
        label="Bio"
        placeholder="Write something about yourself..."
        helperText="You can write multiple lines"
        multiline
        numberOfLines={4}
      />
    </ThemeProvider>
  );
}
```

**Light / Dark Theme**

```tsx
import { useColorScheme } from "react-native";
import { defaultDarkTheme, defaultLightTheme, TextInput, ThemeProvider } from "@geekyhawks/react-native-ui-components";

export default function Example() {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <ThemeProvider theme={isDarkMode ? defaultDarkTheme : defaultLightTheme}>
      <TextInput label="Default" placeholder="Defaut TextInput" />
      <TextInput variant="underline" label="Underline" placeholder="Underline Example" />
      <TextInput variant="filled" label="Filled" placeholder="Filled Example" />
    </ThemeProvider>
  );
}
```


## 📱 Live Example

For a full showcase of all text input variants, states, and configurations, check out the [TextInputDemoScreen](https://github.com/GeekyHawks/react-native-ui-components/blob/main/example/src/screens/TextInputDemoScreen.tsx) inside the **Example App**.

This screen demonstrates how all props work together in a real-world context.


## 🔧 Props

| Prop                   | Type                                                                              | Default             | Description                                                                                               |
| ---------------------- | --------------------------------------------------------------------------------- | ------------------- | --------------------------------------------------------------------------------------------------------- |
| `accessible`           | `boolean`                                                                         | `true`              | Whether the input is accessible to screen readers.                                                        |
| `accessibilityLabel`   | `string`                                                                          | —                   | Accessibility label for screen readers.                                                                   |
| `accessibilityState`   | `AccessibilityState` (RN)                                                         | —                   | Accessibility state for screen readers.                                                                   |
| `containerStyle`       | `StyleProp<ViewStyle>`                                                            | —                   | Custom style for the outer container.                                                                     |
| `disabled`             | `boolean`                                                                         | `false`             | Disables the input.                                                                                       |
| `error`                | `string`                                                                          | —                   | Error message displayed below the input.                                                                  |
| `errorPosition`        | `"left" \| "center" \| "right"`                                                   | `"left"`            | Position of the error message.                                                                            |
| `errorTextStyle`       | `StyleProp<TextStyle>`                                                            | —                   | Custom style for the error text.                                                                          |
| `fontFamily`           | `string`                                                                          | Theme default       | Optional font family for the input text.                                                                  |
| `fullWidth`            | `boolean`                                                                         | `true`              | Makes the input take full width of its container.                                                         |
| `helperText`           | `string`                                                                          | —                   | Helper text displayed below the input.                                                                    |
| `helperTextStyle`      | `StyleProp<TextStyle>`                                                            | —                   | Custom style for the helper text.                                                                         |
| `inputContainerStyle`  | `StyleProp<ViewStyle>`                                                            | —                   | Custom style for the input wrapper/container.                                                             |
| `inputStyle`           | `StyleProp<TextStyle>`                                                            | —                   | Custom style for the input text.                                                                          |
| `label`                | `string`                                                                          | —                   | Label text displayed above the input.                                                                     |
| `labelStyle`           | `StyleProp<TextStyle>`                                                            | —                   | Custom style for the label text.                                                                          |
| `leftIcon`             | `React.ReactNode`                                                                 | —                   | Icon or element displayed on the left.                                                                    |
| `loading`              | `boolean`                                                                         | `false`             | Shows a loading indicator inside the input.                                                               |
| `multiline`            | `boolean`                                                                         | `false`             | Enables multiline text input.                                                                             |
| `numberOfLines`        | `number`                                                                          | `1`                 | Number of visible lines (when multiline).                                                                 |
| `passwordToggleIcons`  | `{ show?: React.ReactNode; hide?: React.ReactNode }`                              | `"Show"` / `"Hide"` | Custom icons for showing/hiding password. If not provided, default text `"Show"` / `"Hide"` is displayed. |
| `placeholderTextColor` | `string`                                                                          | Theme muted         | Color for the placeholder text.                                                                           |
| `rightIcon`            | `React.ReactNode`                                                                 | —                   | Icon or element displayed on the right.                                                                   |
| `secureTextEntry`      | `boolean`                                                                         | —                   | Hides the input text (for passwords).                                                                     |
| `size`                 | `DefaultTextInputSizes \| (string & {})` <br> *(sm \| md \| lg)*                  | `"md"`              | Input size (predefined or custom).                                                                        |
| `variant`              | `DefaultTextInputStyles \| (string & {})` <br> *(outline \| filled \| underline)* | `"outline"`         | Input style variant (predefined or custom).                                                               |
| `...props`             | `TextInputProps` (RN)                                                             | —                   | All native RN `TextInput` props.                                                                          |


## 🎨 Variants

TextInput Style and Size Variants come from your theme configuration, ensuring consistent typography and styles across the app.

### 1. Style Variants

Control the visual style of the TextInput itself. Available options are:

- **outline** → Text input with a visible border (default gray or themed color), transparent background.
- **underline** → Text input with only a bottom border/underline, giving a lightweight look.
- **filled** → Text input with a solid background fill (usually light gray or themed surface color) and no border.

Example

```tsx
<TextInput variant="outline" />
<TextInput variant="underline" />
<TextInput variant="filled" />
```

### 2 Size Variants

Control the overall padding and font size of the text input.

#### Default TextInput Size Variants

By default, the library ships with a set of default text input size variants:

```tsx
export const defaultTextInputSizeVariants: TextInputSizeVariants = {
  sm: { fontSize: 14, paddingVertical: 6 },
  md: { fontSize: 16, paddingVertical: 8 },
  lg: { fontSize: 18, paddingVertical: 10 },
};
```

You can use them directly:

```tsx
<TextInput size="sm" />
<TextInput size="md" />
<TextInput size="lg" />
```

### 🔧 Customizing Variants

You’re not limited to the defaults — you can extend them or define your own completely:

#### Extend Default Variants

```tsx
const customTextInputSizeVariants: TextInputSizeVariants = {
  ...defaultTextInputSizeVariants,  // extend existing ones
  xl: { fontSize: 20, paddingVertical: 12 },
};
```

#### Custom Variants

```tsx
const customTextInputSizeVariants: TextInputSizeVariants = {
  sm: { fontSize: 12, paddingVertical: 4 },
  md: { fontSize: 14, paddingVertical: 8 },
  lg: { fontSize: 16, paddingVertical: 10 },
  xl: { fontSize: 20, paddingVertical: 12 },
};
```

Then you can use:

```tsx
import { TextInput, ThemeProvider } from "@geekyhawks/react-native-ui-components";

export default function Example() {
  return (
    <ThemeProvider textInputSizeVariants={customTextInputSizeVariants}>
      <TextInput size="xl" label="XL TextInput" placeholder="XL TextInput" />
    </ThemeProvider>
  );
}
```


## 📓 Notes

- Theming ensures your app’s inputs have consistent borders, padding, and colors across all screens.  
- Especially useful in large projects with multiple developers, preventing ad-hoc input styles.  
- You can still pass all regular React Native `TextInput` props like `onChangeText`, `value`, `keyboardType`, etc.  
- Supports helper text, error states, and icons without needing extra wrappers.  
