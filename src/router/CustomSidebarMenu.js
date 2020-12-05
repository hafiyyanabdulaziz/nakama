import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {
    Linking,
    SafeAreaView,
    StyleSheet,
    Text, View
} from 'react-native';


const CustomSidebarMenu = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header} >
                <Text>Haloo</Text>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem
                    label="Follow us"
                    onPress={() => Linking.openURL('https://instagram.com/hafiyyanabdulaziz')}
                />
            </DrawerContentScrollView>
            <Text style={styles.logout}>Logout</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 100,
        backgroundColor: 'green',
    },
    logout: { fontSize: 16, textAlign: 'center', color: 'grey' }
});

export default CustomSidebarMenu;
