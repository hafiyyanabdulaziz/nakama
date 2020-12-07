import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';
import React, { useEffect, useState } from 'react';
import {
    Linking,
    SafeAreaView,
    StyleSheet,
    Text, View, TouchableOpacity
} from 'react-native';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-community/google-signin';


const CustomSidebarMenu = (props) => {
    const [dataSource, setDataSource] = useState();

    useEffect(() => {
        async function getUser() {
            setDataSource(await GoogleSignin.getCurrentUser())
            console.log(dataSource)
            console.log('haloo')

        }
        getUser();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header} >
                <Text>Haloo</Text>
                <TouchableOpacity onPress={async () => {
                    const currentUser = await GoogleSignin.getCurrentUser();
                    console.log(currentUser)
                    console.log(props)
                    props.navigation.replace('Login')
                }} >
                    <View style={{ height: 40, backgroundColor: 'yellow' }} ></View>
                </TouchableOpacity>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem
                    label="Follow us"
                    onPress={() => Linking.openURL('https://instagram.com/hafiyyanabdulaziz')}
                />
            </DrawerContentScrollView>
            <TouchableOpacity style={styles.logoutBtn} onPress={async () => {
                try {
                    await GoogleSignin.revokeAccess();
                    await GoogleSignin.signOut();
                    props.navigation.replace('Login')
                } catch (error) {
                    console.error(error);
                }
            }} >
                <Text style={styles.logout}>Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 100,
        backgroundColor: 'green',
    },
    logout: { fontSize: 16, textAlign: 'center', color: 'grey' },
    logoutBtn: {
        backgroundColor: 'yellow',
        height: 40,
        margin: 10,
    }
});

export default CustomSidebarMenu;
