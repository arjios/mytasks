import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import React from 'react';
import TaskProvider from './src/context/TaskContext';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import AuthProvider from './src/context/Auth';
import Signin from './src/screens/Signin';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <AuthProvider>
      <StatusBar style="auto" />
      <TaskProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Signin' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>
        </NavigationContainer>
      </TaskProvider>
    </AuthProvider>
  );
}
