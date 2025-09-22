# LoaderModal

The `LoaderModal` component is a modal overlay component that shows a loading indicator (spinner) with optional text, typically used when blocking user interaction during async operations.


## Why to Use the `LoaderModal` component?

- Provides a blocking loader when background tasks are in progress.
- Ensures users don’t interact with the app while critical operations (like authentication, payments, or data fetching) are happening.
- Can be styled with variants to suit different UX needs (transparent, fullscreen, etc.).
- Built-in support for loading text and positioning relative to the spinner.


## 📦 Usage Examples

```tsx
import { LoaderModal } from "your-library";

export default function Example() {
    const [loading, setLoading] = useState(true);

    return (
        <>
            <LoaderModal
                visible={loading}
                text="Loading data..."
                variant="default"
            />
        </>
    );
}
```


## 📱 Live Example

For a full showcase of all LoaderModal variants and props, check out the [LoaderModalDemoScreen](https://github.com/GeekyHawks/react-native-ui-components/blob/main/example/src/screens/LoaderModalDemoScreen.tsx) inside the **Example App**.

This screen demonstrates how all props work together in a real-world context.


## 🔧 Props

| Prop             |                                                                            Type |               Default              | Description                                    |
| ---------------- | ------------------------------------------------------------------------------: | :--------------------------------: | ---------------------------------------------- |
| `color`          |                                                                    `ColorValue` |             `"primary"`            | Override spinner (ActivityIndicator) color.    |
| `containerStyle` |                                                          `StyleProp<ViewStyle>` |                  —                 | Override outer container style.                |
| `contentStyle`   |                                                          `StyleProp<ViewStyle>` |                  —                 | Override inner content style.                  |
| `modalVisible`   |                                                                       `boolean` |                  —                 | Controls visibility of the modal.              |
| `size`           |                                                  `number \| "small" \| "large"` |              `"large"`             | Override spinner size.                         |
| `text`           |                                                                        `string` |                  —                 | Optional text displayed alongside the spinner. |
| `textColor`      |                                                                    `ColorValue` | Variant-based (e.g. `"onSurface"`) | Override text color.                           |
| `textPosition`   |                                        `"left" \| "right" \| "top" \| "bottom"` |              `"right"`             | Position of text relative to the spinner.      |
| `textStyle`      |                                                          `StyleProp<TextStyle>` |                  —                 | Override style for the text.                   |
| `variant`        | `DefaultLoaderModalVariants \| (string & {})` <br> *(default \| light \| dark)* |             `"default"`            | Choose from default or custom modal variants.  |


## 🎨 Variants

Variants come from your theme configuration, ensuring consistent loading indicators across the app.

### Default LoaderModal Variants

```tsx
export const defaultLoaderModalVariants: LoaderModalVariants = {
    default: {
        size: "large",
        color: "primary",
        textColor: "onPrimary",
        overlayStyle: {
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            justifyContent: "center",
            alignItems: "center",
        },
    },
    transparent: {
        size: "large",
        color: "primary",
        textColor: "text",
        overlayStyle: {
            flex: 1,
            backgroundColor: "transparent",
            justifyContent: "center",
            alignItems: "center",
        },
    },
    fullscreen: {
        size: "large",
        color: "primary",
        textColor: "onPrimary",
        overlayStyle: {
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            justifyContent: "center",
            alignItems: "center",
        },
    },
};
```

You can use them directly:

```tsx
<LoaderModal modalVisible={true} variant="default" text="Loading..." />
<LoaderModal modalVisible={true} variant="light" text="Loading Light..." />
<LoaderModal modalVisible={true} variant="dark" text="Loading Dark..." />
```


## 📓 Notes

- The visible prop must be controlled by state to show or hide the loader.
- Use the fullscreen variant for blocking screens entirely.
- If you want a subtle loader without dimming background, use the transparent variant.
