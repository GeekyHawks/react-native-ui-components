/**
 * FloatingLabelMinimalExample
 *
 * This screen shows **minimal examples** of the `FloatingLabelTextInput` component.
 *
 * Demonstrates usage of the following props:
 * - `label` (floating behavior on focus/value)
 * - `variant` (outline / underline)
 * - `helperText` / validation hints
 * - `multiline` / `numberOfLines`
 * - `keyboardType` / `autoCapitalize`
 * - `containerStyle` (spacing / layout adjustments)
 *
 * Purpose:
 * - Provide a **quick-start / beginner-friendly example**
 *   without custom theming.
 * - Show how floating labels animate above the field
 *   when focused or when text is entered.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React from "react";
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from "react-native";
import { ThemeProvider, FloatingLabelTextInput } from "@geekyhawks/react-native-ui-components";

export function FloatingLabelMinimalExample() {
	return (
		<>
			{/* Wrap components with ThemeProvider to apply default styling */}
			<ThemeProvider>
				<KeyboardAvoidingView
					style={styles.container}
					behavior={Platform.OS === 'ios' ? 'padding' : undefined}
					keyboardVerticalOffset={Platform.OS === 'ios' ? 120 : 0}>
					<ScrollView
						showsVerticalScrollIndicator={false}
						keyboardShouldPersistTaps={"handled"}>

						{/* Default FloatingLabelTextInput */}
						<FloatingLabelTextInput
							label="Email Address"
							size="lg"
							containerStyle={{ marginTop: 20 }}
							onChangeText={(text) => { }}
						/>

						{/* Underline FloatingLabelTextInput */}
						<FloatingLabelTextInput
							label="Username"
							variant="underline"
							containerStyle={{ marginTop: 20 }}
						/>

						{/* Password FloatingLabelTextInput with toggle */}
						<FloatingLabelTextInput
							label="Password"
							secureTextEntry
							passwordToggleIcons={{
								show: (
									<Image
										source={require("../../assets/show-password.png")}
										style={{ width: 20, height: 20, tintColor: "#007bff" }}
										resizeMode="contain"
									/>
								),
								hide: (
									<Image
										source={require("../../assets/hide-password.png")}
										style={{ width: 20, height: 20, tintColor: "#007bff" }}
										resizeMode="contain"
									/>
								),
							}}
							size="lg"
							containerStyle={{ marginTop: 20 }}
						/>

						{/* FloatingLabelTextInput with helperText and loading state */}
						<FloatingLabelTextInput
							label="Username"
							size="md"
							helperText="Validating..."
							value="johndoe"
							loading
							containerStyle={{ marginTop: 20 }}
						/>

						{/* Disabled FloatingLabelTextInput */}
						<FloatingLabelTextInput
							label="Email (Disabled)"
							helperText="You cannot edit this field"
							disabled
							containerStyle={{ marginTop: 20 }}
						/>

						{/* Default FloatingLabelTextInput with Error */}
						<FloatingLabelTextInput
							label="Name"
							error="This is error"
							errorPosition="right"
							containerStyle={{ marginTop: 20 }}
						/>

						{/* Underline FloatingLabelTextInput with Error */}
						<FloatingLabelTextInput
							label="Name"
							variant="underline"
							error="This is error"
							errorPosition="right"
							containerStyle={{ marginTop: 20 }}
						/>

						{/* Default Multiline FloatingLabelTextInput */}
						<FloatingLabelTextInput
							label="Description"
							multiline
							numberOfLines={4}
							helperText="Enter at least 20 characters"
							containerStyle={{ marginTop: 20 }}
						/>

						{/* Underline Multiline FloatingLabelTextInput */}
						<FloatingLabelTextInput
							label="Description"
							variant="underline"
							multiline
							numberOfLines={4}
							helperText="Enter at least 20 characters"
							containerStyle={{ marginTop: 20 }}
						/>

					</ScrollView>
				</KeyboardAvoidingView>
			</ThemeProvider>
		</>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, padding: 16, backgroundColor: "white" },
	scrollContainer: { gap: 16, paddingBottom: 24 },
});
