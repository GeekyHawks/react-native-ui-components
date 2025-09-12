/**
 * LoaderModal Variants
 *
 * Defines default styles for the loading modal component,
 * including the modal container, content wrapper, spinner,
 * and optional text.
 *
 * Developers can override existing variants or add custom ones
 * through the `ThemeProvider` for consistent styling.
 *
 * Author: Geeky Hawks FZE LLC
 */

import { ViewStyle, TextStyle } from "react-native";

export type LoaderModalVariant = {
    color?: string;                  // color of the ActivityIndicator
    container?: ViewStyle;           // outer modal wrapper
    content?: ViewStyle;             // inner content box
    indicatorContainer?: ViewStyle;  // wrapper around ActivityIndicator
    text?: TextStyle;                // style for the text
    textColor?: string;              // color of the text
};

export type LoaderModalVariants = Record<DefaultLoaderModalVariants, LoaderModalVariant> &
    Record<string, LoaderModalVariant>;

export type DefaultLoaderModalVariants = "default" | "light" | "dark";

/**
 * defaultLoaderModalVariants
 *
 * Predefined variants for the LoaderModal:
 * - `default`: centers spinner + text with semi-transparent backdrop.
 * - `light`: light background with dark text.
 * - `dark`: dark background with light text.
 */
export const defaultLoaderModalVariants: LoaderModalVariants = {
    default: {
        color: "primary",
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
        },
        content: {
            padding: 20,
            borderRadius: 12,
            backgroundColor: "surface",
            flexDirection: "row",
            alignItems: "center",
        },
        indicatorContainer: {
            marginRight: 12,
        },
        text: {
            fontSize: 16,
            color: "primary",
        },
        textColor: "primary",
    },
    light: {
        color: "primary",
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.4)",
        },
        content: {
            padding: 20,
            borderRadius: 12,
            backgroundColor: "background",
            flexDirection: "row",
            alignItems: "center",
        },
        indicatorContainer: {
            marginRight: 12,
        },
        text: {
            fontSize: 16,
            color: "primary",
        },
        textColor: "primary",
    },
    dark: {
        color: "primary",
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
        },
        content: {
            padding: 20,
            borderRadius: 12,
            backgroundColor: "surface",
            flexDirection: "row",
            alignItems: "center",
        },
        indicatorContainer: {
            marginRight: 12,
        },
        text: {
            fontSize: 16,
            color: "text",
        },
        textColor: "text",
    },
};
