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

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Router = () => {
    return (
        <Stack.Navigator initialRouteName='Login' >
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
                    backgroundColor: 'green',
                },
            }} />
            <Stack.Screen name="Tambah Data" component={TambahData} />
            <Stack.Screen name="Detail" component={Detail} />
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
                    backgroundColor: 'green',
                },
            }} />
        </Stack.Navigator>
    )
}

export default Router
