import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { BackgroundLogin, Logo } from '../assets'

const Login = () => {
    return (
        <ImageBackground style={styles.background} source={BackgroundLogin} >
            <View>
                <Image style={styles.logo} source={Logo} ></Image>
                <Text style={styles.text} >Temukan produk petani lokal langsung dari petani aslinya</Text>
                <Text>Sign in With Google</Text>
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

    },
    text: {
        color: '#FFFFFF',
        fontSize: 36,
        textAlign: "center",
        fontWeight: "500",
    }
})
