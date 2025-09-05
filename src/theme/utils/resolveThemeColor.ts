/**
 * resolveThemeColor Utility
 *
 * Resolves a theme color key (e.g., "surface", "onSurface", "border")
 * to its actual color value from the current theme. If the provided value
 * is already a valid color (string, number, OpaqueColorValue), it is returned as-is.
 *
 * Author: Geeky Hawks FZE LLC
 */

import { ColorValue } from "react-native";
import { ThemeColors } from "../Theme";

export const resolveThemeColor = (
    value: ColorValue | undefined,
    theme: { colors: ThemeColors }
): ColorValue | undefined => {
    if (!value) return undefined;

    // Only theme keys can be resolved if value is a string
    if (typeof value === "string" && value in theme.colors) {
        return theme.colors[value as keyof ThemeColors];
    }

    return value;
};
