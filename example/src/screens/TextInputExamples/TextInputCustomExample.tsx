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
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Switch, View } from "react-native";
import { ThemeProvider, Text, TextInput, createTheme, defaultSpacing, defaultLightTheme, TextInputSizeVariants, defaultTextInputSizeVariants } from "@geekyhawks/react-native-ui-components";

// Example custom font; replace with any font of your choice
const customFonts = "Courier";

/**
 * Custom light theme
 * You can customize colors and optionally use a different fontFamily than the dark theme.
 */
const customLightTheme = createTheme({
	...defaultLightTheme,
	fontFamily: customFonts,
	colors: {
		text: "#4B0082",
		background: "#FFF0F5",
		primary: "#FF6347",
		secondary: "#4B0082",
		error: "#FF0000",
		border: "#dee2e6",
		muted: "#6c757d",
		surface: "#f2f2f7",
        onSurface: "#111111",
		onPrimary: "#ffffff",
        onSecondary: "#ffffff",
	},
});

/**
 * Custom dark theme
 * You can customize colors and optionally use a different fontFamily than the light theme.
 */
const customDarkTheme = createTheme({
	fontFamily: customFonts,
	colors: {
		text: "#FFD700",
		background: "#2F4F4F",
		primary: "#FFA07A",
		secondary: "#FFD700",
		error: "#FF6B6B",
		border: "#333333",
		muted: "#AAAAAA",
		surface: "#1c1c1e",
        onSurface: "#ffffff",
		onPrimary: "#2F4F4F",
        onSecondary: "#2F4F4F",
	},
	spacing: {
		...defaultSpacing,
		xxl: 40, // Custom Spacing
	},
});

/**
 * Custom text input size variants to override default styles like font size, padding.
 * Use these with the `TextInput` component via the `size` prop.
 */
const customTextInputSizeVariants: TextInputSizeVariants = {
	...defaultTextInputSizeVariants,  // extend existing ones
	xl: { fontSize: 20, paddingVertical: 12 },
};

export function TextInputCustomExample() {
	// For testing/demo purposes, we control dark mode manually here.
	// In real projects, you can use: const isDarkMode = useColorScheme() === "dark";
	const [isDarkMode, setIsDarkMode] = useState(false);

	// Select theme based on dark / light mode
	const theme = isDarkMode ? customDarkTheme : customLightTheme;

	return (
		<ThemeProvider theme={theme}
			textInputSizeVariants={customTextInputSizeVariants}>
			<KeyboardAvoidingView
				style={{
					flex: 1,
					padding: 16,
					backgroundColor: theme.colors.background,
				}}
				behavior={Platform.OS === 'ios' ? 'padding' : undefined}
				keyboardVerticalOffset={Platform.OS === 'ios' ? 120 : 0}
			>
				<View style={styles.toggleContainer}>
					<Text>Dark Mode:</Text>
					<Switch value={isDarkMode} onValueChange={setIsDarkMode} />
				</View>

				<ScrollView
					contentContainerStyle={{ gap: 16 }}
					showsVerticalScrollIndicator={false}
					keyboardShouldPersistTaps={"handled"}>

					{/* Default TextInput with Custom Font */}
					<TextInput
						label="Custom Font"
						placeholder="Courier font example"
						size="xl"
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
			</KeyboardAvoidingView>
		</ThemeProvider>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, padding: 16 },
	toggleContainer: { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: 8, marginBottom: 16 },
	scrollContainer: { gap: 16, paddingBottom: 24 },
});
