import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ProductCard = ({ src, pemilik, judul, harga }) => {
    return (

        <View style={styles.card}>
            <Image style={styles.imageThumbnail} source={{ uri: src }} />
            <View style={{padding:5}}>
            <Text style={styles.textWhite}>{pemilik}</Text>
            <Text style={[styles.textWhite,styles.textBig]}>{judul}</Text>
            <Text style={styles.textWhite}>{"Rp."+harga +"/kg"}</Text>
            </View>
        </View>

    )
}

export default ProductCard

const styles = StyleSheet.create({

    textBig:{
        fontSize:20,
        fontWeight:'bold'
    },
    textWhite:{
        color:'white'
    },  
    imageThumbnail: {
        //justifyContent: 'center',
        //alignItems: 'center',
        height: 140,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },
    card: {
        //flex: 1,
        //flexDirection: 'column',
        margin: 13,
        height: 259,
        backgroundColor: "#4CAF50",
        borderRadius: 10
    },

})
