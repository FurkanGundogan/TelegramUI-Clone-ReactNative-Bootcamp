/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import UserProvider from './src/providers/UserProvider';
import Login from './src/screens/Login';
import "react-native-gesture-handler"
import HomeScreen from './src/screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import ThemeProvider from "./src/providers/ThemeProvider"
const Stack = createStackNavigator();
const App = () => {
  return (
    <ThemeProvider>
    <NavigationContainer>
    <UserProvider>
      <Login/>
    </UserProvider>
    </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
