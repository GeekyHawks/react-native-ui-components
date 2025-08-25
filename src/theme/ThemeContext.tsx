/**
 * Theme Provider and Context
 *
 * Exposes a React Context for the theme and a ThemeProvider component.
 * Allows library users to wrap their app and provide custom themes or use defaults.
 * Includes a `useTheme` hook for easy access to theme properties inside components.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React, { createContext, useContext } from "react";
import { TextStyle } from "react-native";
import { Theme, defaultLightTheme } from "./Theme";
import { defaultTextVariants } from "./variants/TextVariants";
import { ButtonShapeVariants, ButtonSizeVariants, defaultButtonShapeVariants, defaultButtonSizeVariants } from "./variants/ButtonVariants";
import { defaultTextInputSizeVariants, defaultTextInputStyleVariants, TextInputSizeVariants, TextInputStyleVariants } from "./variants/TextInputVariants";
import { defaultFloatingLabelTextInputSizeVariants, defaultFloatingLabelTextInputStyleVariants, FloatingLabelTextInputSizeVariants, FloatingLabelTextInputStyleVariants } from "./variants/FloatingLabelTextInputVariants";

/**
 * ThemeContextType
 *
 * Contains theme and textVariants for consumption in components.
 */
type ThemeContextType = {
    theme: Theme;
    textVariants: Record<string, Partial<TextStyle>>;
    buttonSizeVariants: ButtonSizeVariants;
    buttonShapeVariants: ButtonShapeVariants;
    textInputStyleVariants: TextInputStyleVariants;
    textInputSizeVariants: TextInputSizeVariants;
    floatingLabelTextInputStyleVariants: FloatingLabelTextInputStyleVariants;
    floatingLabelTextInputSizeVariants: FloatingLabelTextInputSizeVariants;
};

/**
 * ThemeContext
 *
 * Provides the current theme and text variants to all components
 * within the app. Components can consume this context to access
 * font family, colors, and text styles.
 *
 * Default values are `defaultLightTheme` and `defaultTextVariants`.
 */
const ThemeContext = createContext<ThemeContextType>({
    theme: defaultLightTheme,
    textVariants: defaultTextVariants,
    buttonSizeVariants: defaultButtonSizeVariants,
    buttonShapeVariants: defaultButtonShapeVariants,
    textInputStyleVariants: defaultTextInputStyleVariants,
    textInputSizeVariants: defaultTextInputSizeVariants,
    floatingLabelTextInputStyleVariants: defaultFloatingLabelTextInputStyleVariants,
    floatingLabelTextInputSizeVariants: defaultFloatingLabelTextInputSizeVariants,
});

/**
 * useTheme
 *
 * Hook to access theme and textVariants in components.
 */
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used inside ThemeProvider");
    return context;
};

type ThemeProviderProps = {
    theme?: Theme;
    textVariants?: Record<string, Partial<TextStyle>>;
    buttonSizeVariants?: ButtonSizeVariants;
    buttonShapeVariants?: ButtonShapeVariants;
    textInputStyleVariants?: TextInputStyleVariants;
    textInputSizeVariants?: TextInputSizeVariants;
    children: React.ReactNode;
    floatingLabelTextInputStyleVariants?: FloatingLabelTextInputStyleVariants;
    floatingLabelTextInputSizeVariants?: FloatingLabelTextInputSizeVariants;
};

/**
 * ThemeProvider
 *
 * Wrap your app and optionally pass a custom theme or textVariants.
 * Automatically merges default variants with user overrides.
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    theme,
    textVariants,
    buttonSizeVariants,
    buttonShapeVariants,
    textInputStyleVariants,
    textInputSizeVariants,
    floatingLabelTextInputStyleVariants,
    floatingLabelTextInputSizeVariants,
    children,
}) => {
    const appliedTheme: ThemeContextType = {
        theme: { ...defaultLightTheme, ...theme },
        textVariants: { ...defaultTextVariants, ...textVariants },
        buttonSizeVariants: { ...defaultButtonSizeVariants, ...buttonSizeVariants },
        buttonShapeVariants: { ...defaultButtonShapeVariants, ...buttonShapeVariants },
        textInputStyleVariants: { ...defaultTextInputStyleVariants, ...textInputStyleVariants },
        textInputSizeVariants: { ...defaultTextInputSizeVariants, ...textInputSizeVariants },
        floatingLabelTextInputStyleVariants: { ...defaultFloatingLabelTextInputStyleVariants, ...floatingLabelTextInputStyleVariants },
        floatingLabelTextInputSizeVariants: { ...defaultFloatingLabelTextInputSizeVariants, ...floatingLabelTextInputSizeVariants },
    };

    return <ThemeContext.Provider value={appliedTheme}>{children}</ThemeContext.Provider>;
};
