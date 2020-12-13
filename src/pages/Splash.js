import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Logo } from '../assets';
import {
    GoogleSignin,
} from '@react-native-community/google-signin';

const Splash = ({ navigation }) => {

    useEffect(() => {
        cekUser();
    }, []);

    async function cekUser() {
        GoogleSignin.configure({
            webClientId: '743083207397-d7iseldnlgpa42ed57khjvbtmmb3ej47.apps.googleusercontent.com',
        });
        await GoogleSignin.isSignedIn().then(cekUser => {
            setTimeout(() => {
                if (cekUser == true) {
                    navigation.replace('Home');
                } else {
                    navigation.replace('Login');
                }
            }, 2000);
        })
    }

    return (
        <View style={styles.page}>
            <Image source={Logo} style={styles.image} ></Image>
        </View>
    );
};

export default Splash;

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 100,
        width: 100,
        resizeMode: 'contain',
    }
});
