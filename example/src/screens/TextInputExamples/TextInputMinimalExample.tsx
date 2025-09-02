/**
 * TextInputMinimalExample
 *
 * This screen shows **minimal examples** of the `TextInput` component.
 *
 * Demonstrates usage of the following props:
 * - `label`
 * - `placeholder`
 * - `variant` (default, underline, filled)
 * - `error` / `helperText`
 * - `secureTextEntry` / password toggle icons
 * - `multiline` / `numberOfLines`
 * - `disabled` / `loading`
 * - `containerStyle` / `style`
 *
 * Purpose:
 * - Provide a **quick-start / beginner-friendly example**
 *   without any custom theme or advanced configurations.
 *
 * Author: Geeky Hawks FZE LLC
 */

import React from "react";
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from "react-native";
import { ThemeProvider, TextInput } from "@geekyhawks/react-native-ui-components";

export function TextInputMinimalExample() {
	return (
		<>
			{/* Wrap components with ThemeProvider to apply default styling */}
			<ThemeProvider>
				<KeyboardAvoidingView
					style={styles.container}
					behavior={Platform.OS === 'ios' ? 'padding' : undefined}
					keyboardVerticalOffset={Platform.OS === 'ios' ? 120 : 0}>
					<ScrollView
						contentContainerStyle={{ gap: 16 }}
						showsVerticalScrollIndicator={false}
						keyboardShouldPersistTaps={"handled"}>

						{/* Default TextInput */}
						<TextInput
							label="Default"
							placeholder="Default InputText"
							onChangeText={(text) => { }}
						/>

						{/* Underline TextInput */}
						<TextInput
							label="Underline"
							placeholder="Underline Example"
							variant="underline"
						/>

						{/* Filled TextInput */}
						<TextInput
							label="Filled"
							placeholder="Filled Example"
							variant="filled"
						/>

						{/* Password TextInput with toggle */}
						<TextInput
							label="Password"
							placeholder="Enter your password"
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
						/>

						{/* TextInput with Icons */}
						<TextInput
							label="Icons"
							placeholder="Left and Right Icons"
							leftIcon={
								<Image
									source={require("../../assets/press-button.png")}
									style={{ width: 20, height: 20, tintColor: "#007bff" }}
									resizeMode="contain"
								/>
							}
							rightIcon={
								<Image
									source={require("../../assets/send.png")}
									style={{ width: 20, height: 20, tintColor: "#007bff" }}
									resizeMode="contain"
								/>
							}
						/>

						{/* TextInput with helperText and loading state */}
						<TextInput
							label="Username"
							placeholder="Username"
							size="md"
							helperText="Validating..."
							value="johndoe"
							loading
						/>

						{/* Disabled TextInput */}
						<TextInput
							label="Email (Disabled)"
							placeholder="Disabled input"
							helperText="You cannot edit this field"
							disabled
						/>

						{/* Default TextInput with Error */}
						<TextInput
							label="Name"
							placeholder="Your Name"
							error="This is error"
							errorPosition="right"
						/>

						{/* Underline TextInput with Error */}
						<TextInput
							label="Name"
							placeholder="Your Name"
							variant="underline"
							error="This is error"
							errorPosition="right"
						/>

						{/* Default Multiline TextInput */}
						<TextInput
							label="Bio"
							placeholder="Write something about yourself..."
							size="md"
							helperText="You can write multiple lines"
							multiline
							numberOfLines={4}
						/>

						{/* Underline Multiline TextInput */}
						<TextInput
							label="Bio"
							placeholder="Write something about yourself..."
							size="md"
							helperText="You can write multiple lines"
							variant="underline"
							multiline
							numberOfLines={4}
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
