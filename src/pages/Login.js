import React from 'react'
import { Alert, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { BackgroundLogin, Logo } from '../assets'
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-community/google-signin';

const Login = ({ navigation }) => {
    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            await GoogleSignin.signIn().then(userInfo => {
                console.log(userInfo);
                navigation.replace('Home');
            })

        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
            console.log(error);
        }
    }
    return (
        <ImageBackground style={styles.background} source={BackgroundLogin} >
            <View style={{ alignItems: "center" }}>
                <Image style={styles.logo} source={Logo} ></Image>
                <Text style={styles.text} >Temukan produk petani lokal langsung dari petani aslinya</Text>
                <GoogleSigninButton
                    style={styles.googleButton}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Light}
                    onPress={signIn}
                />
            </View>
        </ImageBackground>
    )
}

export default Login

const styles = StyleSheet.create({
    background: {
        flex: 1,
        padding: 40,

    },
    logo: {
        height: 130,
        width: 125,
        marginBottom: 50

    },
    text: {
        color: '#FFFFFF',
        fontSize: 36,
        textAlign: "center",
        fontWeight: "500",
        marginBottom: 50
    },
    googleButton: {
        width: 192,
        height: 48,
    }
})
