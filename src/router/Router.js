import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Home from '../pages/Home';
import TentangKami from '../pages/tentangKamiScreen';
import Login from '../pages/Login'
import CustomSidebarMenu from './CustomSidebarMenu'
import NavigationDrawerStructure from '../components/NavigationDrawerStructure'
import TambahData from '../pages/TambahData'
import Detail from '../pages/Detail'
import Splash from '../pages/Splash'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Router = () => {
    return (
        <Stack.Navigator initialRouteName='Splash' >
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={DrawerHome} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

const DrawerHome = () => {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomSidebarMenu {...props} />}>
            <Drawer.Screen name="StackHome" component={StackHome} options={{ drawerLabel: 'Home' }} />
            <Drawer.Screen name="Tentang Kami" component={StackTentangKami} />
        </Drawer.Navigator>
    )
}

const StackHome = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{
                headerLeft: () => (
                    <NavigationDrawerStructure navigationProps={navigation} />
                ),
                headerStyle: {
                    backgroundColor: '#4CAF50',
                },
                headerTitle: 'Nakama',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: 'white'
                }
            }} />
            <Stack.Screen name="Tambah Data" component={TambahData} options={{
                headerTitle: 'Nakama',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: 'white'
                },
                headerStyle: {
                    backgroundColor: '#4CAF50',
                },
                headerTintColor: 'white',
            }} />
            <Stack.Screen name="Detail" component={Detail} options={{
                headerTitle: 'Nakama',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: 'white'
                },
                headerStyle: {
                    backgroundColor: '#4CAF50',
                },
                headerTintColor: 'white',
            }} />
        </Stack.Navigator>
    )
}

const StackTentangKami = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="Tentang Kami">
            <Stack.Screen name="Tentang Kami" component={TentangKami} options={{
                headerLeft: () => (
                    <NavigationDrawerStructure navigationProps={navigation} />
                ),
                headerStyle: {
                    backgroundColor: '#4CAF50',
                },
                headerTitle: 'Tentang Kami',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: 'white'
                }
            }} />
        </Stack.Navigator>
    )
}

export default Router
