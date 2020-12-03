import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../pages/Home';
import TentangKami from '../pages/tentangKamiScreen';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Tentang Kami" component={TentangKami} />
        </Stack.Navigator>
    )
}

export default Router
