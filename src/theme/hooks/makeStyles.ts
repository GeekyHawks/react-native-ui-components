/**
 * makeStyles Utility
 *
 * Provides a convenient way to create themed styles in React Native components.
 * This file exports the `makeStyles` function, which generates a StyleSheet
 * based on the current theme from ThemeProvider.
 *
 * Author: Geeky Hawks FZE LLC
 */

import { StyleSheet } from "react-native";
import { Theme } from "../Theme";
import { useTheme } from "../ThemeContext";

/**
 * makeStyles
 *
 * Creates a custom hook that generates styles based on the current theme.
 *
 * Usage:
 *   const useStyles = makeStyles((theme) => ({
 *       container: {
 *           backgroundColor: theme.colors.background,
 *           padding: theme.spacing.md,
 *       },
 *       text: {
 *           color: theme.colors.text,
 *           fontSize: 16,
 *       },
 *   }));
 *
 *   // Inside a component:
 *   const styles = useStyles();
 *
 * @param styles - A function that receives the current Theme and returns a StyleSheet object.
 * @returns A hook that generates the themed StyleSheet.
 */
export const makeStyles =
    <T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>>(
        styles: (theme: Theme) => T
    ) => {
        return () => {
            const { theme } = useTheme();
            return StyleSheet.create(styles(theme));
        };
    };
