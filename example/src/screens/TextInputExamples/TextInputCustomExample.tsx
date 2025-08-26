/**
 * TextInputCustomExample
 *
 * This screen demonstrates **custom themed** TextInputs with:
 * - Custom font
 * - Custom colors
 * - Light / dark theme support
 *
 * Author: Geeky Hawks FZE LLC
 */

import React, { useState } from "react";
import { ScrollView, StyleSheet, Switch, View } from "react-native";
import { ThemeProvider, Text, Theme, TextInput } from "@geekyhawks/react-native-ui-components";
import { SafeAreaView } from "react-native-safe-area-context";

// Example custom font; replace with any font of your choice
const customFonts = "Courier";

/**
 * Custom light theme
 * You can customize colors and optionally use a different fontFamily than the dark theme.
 */
const customLightTheme: Theme = {
	fontFamily: customFonts,
	colors: {
		text: "#4B0082",
		background: "#FFF0F5",
		primary: "#FF6347",
		secondary: "#4B0082",
		error: "#FF0000",
		border: "#dee2e6",
		muted: "#6c757d",
	},
};

/**
 * Custom dark theme
 * You can customize colors and optionally use a different fontFamily than the light theme.
 */
const customDarkTheme: Theme = {
	fontFamily: customFonts,
	colors: {
		text: "#FFD700",
		background: "#2F4F4F",
		primary: "#FF6347",
		secondary: "#9370DB",
		error: "#FF6B6B",
		border: "#333333",
		muted: "#AAAAAA",
	}
};

export function TextInputCustomExample() {
	// For testing/demo purposes, we control dark mode manually here.
	// In real projects, you can use: const isDarkMode = useColorScheme() === "dark";
	const [isDarkMode, setIsDarkMode] = useState(false);

	// Select theme based on dark / light mode
	const theme = isDarkMode ? customDarkTheme : customLightTheme;

	return (
		<ThemeProvider theme={theme}>
			<SafeAreaView
				style={{
					flex: 1,
					padding: 16,
					backgroundColor: theme.colors.background,
				}}
			>
				<View style={styles.toggleContainer}>
					<Text>Dark Mode:</Text>
					<Switch value={isDarkMode} onValueChange={setIsDarkMode} />
				</View>

				<ScrollView contentContainerStyle={{ gap: 16 }}>

					{/* Default TextInput with Custom Font */}
					<TextInput
						label="Custom Font"
						placeholder="Courier font example"
					/>

					{/* Underline TextInput with Custom Font */}
					<TextInput
						label="Custom Color"
						placeholder="Primary colored input"
						variant="underline"
					/>

					{/* Filled TextInput with Custom Font */}
					<TextInput
						label="Filled Variant"
						placeholder="Filled variant"
						variant="filled"
					/>
				</ScrollView>
			</SafeAreaView>
		</ThemeProvider>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, padding: 16 },
	toggleContainer: { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: 8, marginBottom: 16 },
	scrollContainer: { gap: 16, paddingBottom: 24 },
});
