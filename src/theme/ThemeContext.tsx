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
    buttonShapeVariants: ButtonShapeVariants;
    buttonSizeVariants: ButtonSizeVariants;
    floatingLabelTextInputSizeVariants: FloatingLabelTextInputSizeVariants;
    floatingLabelTextInputStyleVariants: FloatingLabelTextInputStyleVariants;
    textInputSizeVariants: TextInputSizeVariants;
    textInputStyleVariants: TextInputStyleVariants;
    textVariants: Record<string, Partial<TextStyle>>;
    theme: Theme;
};

/**
 * ThemeContext
 *
 * Provides the current theme and text variants to all components
 * within the app. Components can consume this context to access
 * font family, colors, spacing, and text styles.
 *
 * Default values are `defaultLightTheme` and `defaultTextVariants`.
 */
const ThemeContext = createContext<ThemeContextType>({
    buttonShapeVariants: defaultButtonShapeVariants,
    buttonSizeVariants: defaultButtonSizeVariants,
    floatingLabelTextInputSizeVariants: defaultFloatingLabelTextInputSizeVariants,
    floatingLabelTextInputStyleVariants: defaultFloatingLabelTextInputStyleVariants,
    textInputSizeVariants: defaultTextInputSizeVariants,
    textInputStyleVariants: defaultTextInputStyleVariants,
    textVariants: defaultTextVariants,
    theme: defaultLightTheme,
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
    children: React.ReactNode;
    floatingLabelTextInputSizeVariants?: FloatingLabelTextInputSizeVariants;
    floatingLabelTextInputStyleVariants?: FloatingLabelTextInputStyleVariants;
    textInputSizeVariants?: TextInputSizeVariants;
    textInputStyleVariants?: TextInputStyleVariants;
    textVariants?: Record<string, Partial<TextStyle>>;
    theme?: Theme;
    buttonShapeVariants?: ButtonShapeVariants;
    buttonSizeVariants?: ButtonSizeVariants;
};

/**
 * ThemeProvider
 *
 * Wrap your app and optionally pass a custom theme, variants, or spacing.
 * Only **replaces** the default values — no automatic merging.
 * If users want defaults, they need to explicitly spread them.
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    children,
    floatingLabelTextInputSizeVariants,
    floatingLabelTextInputStyleVariants,
    textInputSizeVariants,
    textInputStyleVariants,
    textVariants,
    theme,
    buttonShapeVariants,
    buttonSizeVariants,
}) => {
    const appliedTheme: ThemeContextType = {
        buttonShapeVariants: buttonShapeVariants ?? defaultButtonShapeVariants,
        buttonSizeVariants: buttonSizeVariants ?? defaultButtonSizeVariants,
        floatingLabelTextInputSizeVariants: floatingLabelTextInputSizeVariants ?? defaultFloatingLabelTextInputSizeVariants,
        floatingLabelTextInputStyleVariants: floatingLabelTextInputStyleVariants ?? defaultFloatingLabelTextInputStyleVariants,
        textInputSizeVariants: textInputSizeVariants ?? defaultTextInputSizeVariants,
        textInputStyleVariants: textInputStyleVariants ?? defaultTextInputStyleVariants,
        textVariants: textVariants ?? defaultTextVariants,
        theme: theme ?? defaultLightTheme,
    };

    return <ThemeContext.Provider value={appliedTheme}>{children}</ThemeContext.Provider>;
};
