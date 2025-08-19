/**
 * Entry Point
 *
 * Registers the main application component with React Native.
 * Uses `AppRegistry` to register `App` as the root component
 * with the application name defined in `app.json`.
 *
 * Typically, this file does not require modifications unless adding
 * global setup or providers.
 *
 * Author: Geeky Hawks FZE LLC
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
