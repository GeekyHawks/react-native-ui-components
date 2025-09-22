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
 *   - Theme Demo
 *   - Make Styles Demo
 * 	 - StatusBar Component Demo
 * 	 - AppBar Component Demo
 *   - Text Component Demo
 *   - Button Component Demo
 *   - TextInput Component Demo
 *   - FloatingLabelTextInput Component Demo
 * 	 - ActivityIndicator Component Demo
 *   - LoaderModal Component Demo
 *
 * Author: Geeky Hawks FZE LLC
 */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ThemeDemoScreen from "./src/screens/ThemeDemoScreen";
import MakeStylesDemoScreen from "./src/screens/MakeStylesDemoScreen";
import TextDemoScreen from "./src/screens/TextDemoScreen";
import ButtonDemoScreen from "./src/screens/ButtonDemoScreen";
import TextInputDemoScreen from "./src/screens/TextInputDemoScreen";
import FloatingLabelDemoScreen from "./src/screens/FloatingLabelDemoScreen";
import AppBarDemoScreen from "./src/screens/AppBarDemoScreen";
import StatusBarDemoScreen from "./src/screens/StatusBarDemoScreen";
import { DefaultStatusBarExample } from "./src/screens/StatusBarExamples/DefaultStatusBarExample";
import { DarkStatusBarExample } from "./src/screens/StatusBarExamples/DarkStatusBarExample";
import { TransparentStatusBarExample } from "./src/screens/StatusBarExamples/TransparentStatusBarExample";
import { LightStatusBarExample } from "./src/screens/StatusBarExamples/LightStatusBarExample";
import { CustomStatusBarExample } from "./src/screens/StatusBarExamples/CustomStatusBarExample";
import { TranslucentStatusBarExample } from "./src/screens/StatusBarExamples/TranslucentStatusBarExample";
import ActivityIndicatorDemoScreen from "./src/screens/ActivityIndicatorDemoScreen";
import LoaderModalDemoScreen from "./src/screens/LoaderModalDemoScreen";
import RadioDemoScreen from "./src/screens/RadioDemoScreen";
import CheckBoxDemoScreen from "./src/screens/CheckBoxDemoScreen";

export type RootStackParamList = {
	Home: undefined;
	Theme: undefined;
	Styles: undefined;
	StatusBar: undefined;
	AppBar: undefined;
	Text: undefined;
	Button: undefined;
	TextInput: undefined;
	FloatingLabelTextInput: undefined;
	DefaultStatusBar: undefined;
	LightStatusBar: undefined;
	DarkStatusBar: undefined;
	TransparentStatusBar: undefined;
	CustomStatusBar: undefined;
	TranslucentStatusBar: undefined;
	ActivityIndicator: undefined;
	LoaderModal: undefined;
	Radio: undefined;
	CheckBox: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function App() {
	const Stack = createNativeStackNavigator<RootStackParamList>();

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Theme" component={ThemeDemoScreen} />
				<Stack.Screen name="Styles" component={MakeStylesDemoScreen} />
				<Stack.Screen name="StatusBar" component={StatusBarDemoScreen} />
				<Stack.Screen name="AppBar" component={AppBarDemoScreen} />
				<Stack.Screen name="Text" component={TextDemoScreen} />
				<Stack.Screen name="Button" component={ButtonDemoScreen} />
				<Stack.Screen name="TextInput" component={TextInputDemoScreen} />
				<Stack.Screen name="FloatingLabelTextInput" component={FloatingLabelDemoScreen} />
				<Stack.Screen name="DefaultStatusBar" component={DefaultStatusBarExample} options={{ headerShown: false }} />
				<Stack.Screen name="LightStatusBar" component={LightStatusBarExample} options={{ headerShown: false }} />
				<Stack.Screen name="DarkStatusBar" component={DarkStatusBarExample} options={{ headerShown: false }} />
				<Stack.Screen name="TransparentStatusBar" component={TransparentStatusBarExample} options={{ headerShown: false }} />
				<Stack.Screen name="CustomStatusBar" component={CustomStatusBarExample} options={{ headerShown: false }} />
				<Stack.Screen name="TranslucentStatusBar" component={TranslucentStatusBarExample} options={{ headerShown: false }} />
				<Stack.Screen name="ActivityIndicator" component={ActivityIndicatorDemoScreen} />
				<Stack.Screen name="LoaderModal" component={LoaderModalDemoScreen} />
				<Stack.Screen name="Radio" component={RadioDemoScreen} />
				<Stack.Screen name="CheckBox" component={CheckBoxDemoScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
