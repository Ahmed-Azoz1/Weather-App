import { LogBox } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs([
    'not-found'
])
const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' options={{headerShown:false}} component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;