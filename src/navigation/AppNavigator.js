import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from '../components/RegistrationsScreen';
import LoginScreen from '../components/LoginScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Register" component={RegistrationScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    );
}
