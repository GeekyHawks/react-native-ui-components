/**
 * Example App
 *
 * This is a demo app showcasing the usage of the 
 * `@geekyhawks/react-native-ui-components` library.
 *
 * Features demonstrated:
 * - Wrapping the app with `ThemeProvider` for consistent theming
 * - Using default and custom `Text` variants
 * - Navigating between multiple component examples:
 *   - Home Screen (overview)
 *   - Text Component Demo
 *   - Button Component Demo
 *   - TextInput Component Demo
 *   - FloatingLabelTextInput Component Demo
 *
 * Author: Geeky Hawks FZE LLC
 */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import TextDemoScreen from "./src/screens/TextDemoScreen";
import ButtonDemoScreen from "./src/screens/ButtonDemoScreen";
import TextInputDemoScreen from "./src/screens/TextInputDemoScreen";
import FloatingLabelTextInputDemo from "./src/screens/FloatingLabelTextInputDemo";

export type RootStackParamList = {
	Home: undefined;
	Text: undefined;
	Button: undefined;
	TextInput: undefined;
	FloatingLabelTextInput: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function App() {
	const Stack = createNativeStackNavigator<RootStackParamList>();

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Text" component={TextDemoScreen} />
				<Stack.Screen name="Button" component={ButtonDemoScreen} />
				<Stack.Screen name="TextInput" component={TextInputDemoScreen} />
				<Stack.Screen name="FloatingLabelTextInput" component={FloatingLabelTextInputDemo} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
