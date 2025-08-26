/**
 * FloatingLabelLightDarkExample
 *
 * This screen demonstrates how the `FloatingLabelTextInput` component adapts to **light and dark themes**.
 *
 * Demonstrates usage of:
 * - Theme integration: Switching between `defaultLightTheme` and `defaultDarkTheme`
 * - Automatic color changes for label, input, and background
 * - Secure input (`secureTextEntry`) with floating labels
 * - `multiline` with floating labels
 *
 * Purpose:
 * - Show real-world adaptation of floating inputs in light vs. dark mode
 * - Emphasize **accessibility and readability** in different color schemes
 *
 * Author: Geeky Hawks FZE LLC
 */

import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Switch } from "react-native";
import { FloatingLabelTextInput, Text, ThemeProvider, defaultDarkTheme, defaultLightTheme } from "@geekyhawks/react-native-ui-components";
import { SafeAreaView } from "react-native-safe-area-context";

export function FloatingLabelLightDarkExample() {
	// For testing/demo purposes, we control dark mode manually here.
	// In real projects, you can use: const isDarkMode = useColorScheme() === "dark";
	const [isDarkMode, setIsDarkMode] = useState(false);

	return (
		<>
			{/* Using default light/dark themes; see Custom Example for theme customization */}
			<ThemeProvider theme={isDarkMode ? defaultDarkTheme : defaultLightTheme}>
				<SafeAreaView
					style={[styles.container, {
						// Set background color based on current theme (light or dark)
						backgroundColor: isDarkMode ? defaultDarkTheme.colors.background
							: defaultLightTheme.colors.background,
					}]}
				>
					<View style={styles.toggleContainer}>
						<Text>Dark Mode:</Text>
						<Switch value={isDarkMode} onValueChange={setIsDarkMode} />
					</View>
					<ScrollView>

						{/* Default FloatingLabelTextInput */}
						<FloatingLabelTextInput
							label="Email"
							variant="outline"
							size="lg"
							containerStyle={{ marginTop: 20 }}
						/>

						{/* Underline FloatingLabelTextInput */}
						<FloatingLabelTextInput
							label="Password"
							variant="underline"
							secureTextEntry
							helperText="Must be at least 6 characters"
							containerStyle={{ marginTop: 20 }}
						/>

						{/* Default Multiline FloatingLabelTextInput */}
						<FloatingLabelTextInput
							label="Bio"
							variant="outline"
							multiline
							numberOfLines={3}
							helperText="Tell us something about yourself"
							containerStyle={{ marginTop: 20 }}
						/>

						{/* Underline Multiline FloatingLabelTextInput */}
						<FloatingLabelTextInput
							label="Bio"
							variant="underline"
							multiline
							numberOfLines={3}
							helperText="Tell us something about yourself"
							containerStyle={{ marginTop: 20 }}
						/>

					</ScrollView>
				</SafeAreaView>
			</ThemeProvider>
		</>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, padding: 16 },
	scrollContainer: { gap: 16, paddingBottom: 24 },
	toggleContainer: { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: 8, marginBottom: 16 },
});
