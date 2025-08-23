/**
 * Theme Provider and Context
 *
 * Exposes a React Context for the theme and a ThemeProvider component.
 * Allows library users to wrap their app and provide custom themes or use defaults.
 * Includes a `useTheme` hook for easy access to theme properties inside components.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React, { createContext, useContext } from 'react';
import { Theme, defaultLightTheme } from './Theme';
import { TextStyle } from "react-native";
import { defaultTextVariants } from "./TextVariants";
import { ButtonShapeVariants, ButtonSizeVariants, defaultButtonShapeVariants, defaultButtonSizeVariants } from "./ButtonVariants";

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
});

/**
 * useTheme
 *
 * Hook to access theme and textVariants in components.
 */
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used inside ThemeProvider');
    return context;
};

type ThemeProviderProps = {
    theme?: Theme;
    textVariants?: Record<string, Partial<TextStyle>>;
    buttonSizeVariants?: ButtonSizeVariants;
    buttonShapeVariants?: ButtonShapeVariants;
    children: React.ReactNode;
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
    children,
}) => {
    const appliedTheme: ThemeContextType = {
        theme: { ...defaultLightTheme, ...theme },
        textVariants: { ...defaultTextVariants, ...textVariants },
        buttonSizeVariants: { ...defaultButtonSizeVariants, ...buttonSizeVariants },
        buttonShapeVariants: { ...defaultButtonShapeVariants, ...buttonShapeVariants },
    };

    return <ThemeContext.Provider value={appliedTheme}>{children}</ThemeContext.Provider>;
};
