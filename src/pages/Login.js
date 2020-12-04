import React, { Component } from 'react'
import { Alert, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { BackgroundLogin, Logo } from '../assets'
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-community/google-signin';

export default class Login extends Component {
    render() {
        return (
            <ImageBackground style={styles.background} source={BackgroundLogin} >
                <View>
                    <Image style={styles.logo} source={Logo} ></Image>
                    <Text style={styles.text} >Temukan produk petani lokal langsung dari petani aslinya</Text>
                    <GoogleSigninButton
                        style={styles.googleButton}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Light}
                        onPress={this._signIn}
                    />
                </View>
            </ImageBackground>
        )

    }
    componentDidMount() {
        GoogleSignin.configure({
            //scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
            webClientId: '743083207397-d7iseldnlgpa42ed57khjvbtmmb3ej47.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            //offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            //hostedDomain: '', // specifies a hosted domain restriction
            //loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
            //forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
            //accountName: '', // [Android] specifies an account name on the device that should be used
            //iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
        });
    }
    _signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(userInfo);
            //this.setState({ userInfo });
            //navigation.navigate('Home')
            Alert.alert('Berhasil Login', userInfo.user.name + '\n' + userInfo.user.email)
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
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        padding: 40,

    },
    logo: {
        height: 130,
        width: 125,

    },
    text: {
        color: '#FFFFFF',
        fontSize: 36,
        textAlign: "center",
        fontWeight: "500",
    },
    googleButton: {
        width: 192,
        height: 48,
    }
})
