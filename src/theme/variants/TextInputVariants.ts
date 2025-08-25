import { TextStyle, ViewStyle } from "react-native";

export type TextInputStyleVariant = {
    container?: ViewStyle;
    input?: TextStyle;
};

export type TextInputStyleVariants = Record<string, TextInputStyleVariant>;

export type DefaultTextInputStyles = "outline" | "filled" | "underline";

export const defaultTextInputStyleVariants: TextInputStyleVariants = {
    outline: {
        container: {
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            paddingHorizontal: 12,
        },
        input: {},
    },
    filled: {
        container: {
            backgroundColor: "#f5f5f5",
            borderRadius: 8,
            paddingHorizontal: 12,
            borderWidth: 1,
            borderColor: "#ccc",
        },
        input: {},
    },
    underline: {
        container: {
            borderBottomWidth: 1,
            borderColor: "#ccc",
        },
        input: {},
    },
};

export type TextInputSizeVariant = {
    fontSize: number;
    paddingVertical: number;
};

export type TextInputSizeVariants = Record<string, TextInputSizeVariant>;

export type DefaultTextInputSizes = "sm" | "md" | "lg";

export const defaultTextInputSizeVariants: TextInputSizeVariants = {
    sm: { fontSize: 14, paddingVertical: 6 },
    md: { fontSize: 16, paddingVertical: 8 },
    lg: { fontSize: 18, paddingVertical: 10 },
};
