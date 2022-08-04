import { View, Text } from 'react-native'
import React from 'react'
import { Detail, Home, Login, SplashScreen } from '../pages'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { strings } from '../utils';

const Router = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName={strings.screen.Splash}
            screenOptions={{headerShown: false}}>
            <Stack.Screen name={strings.screen.Splash} component={SplashScreen} />
            <Stack.Screen name={strings.screen.Login} component={Login} />
            <Stack.Screen name={strings.screen.Home} component={Home} />
            <Stack.Screen name={strings.screen.Detail} component={Detail} />
        </Stack.Navigator>
    )
}

export default Router