import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import NavigationDrawerStructure from '../components/NavigationDrawerStructure';
import Detail from '../pages/Detail';
import Home from '../pages/Home';
import TentangKami from '../pages/tentangKamiScreen';
import CustomSidebarMenu from './CustomSidebarMenu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={DrawerHome}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const DrawerHome = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen
        name="StackHome"
        component={StackHome}
        options={{drawerLabel: 'Home'}}
      />
      <Drawer.Screen name="About Nakama" component={StackTentangKami} />
    </Drawer.Navigator>
  );
};

const StackHome = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#4CAF50',
          },
          headerTitle: 'Nakama',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'white',
          },
        }}
      />

      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerTitle: 'Nakama',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: '#4CAF50',
          },
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  );
};

const StackTentangKami = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="About Nakama">
      <Stack.Screen
        name="About Nakama"
        component={TentangKami}
        options={{
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#4CAF50',
          },
          headerTitle: 'About Nakama',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'white',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
