import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ProductCard = ({ src, pemilik, judul, harga }) => {
    return (
        <View style={styles.posisi}>
            <TouchableOpacity>
                <View style={styles.card}>
                    <Image style={styles.imageThumbnail} source={{ uri: src }} />
                    <Text>{pemilik}</Text>
                    <Text>{judul}</Text>
                    <Text>{harga}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({
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
        margin: 5,
        height: 259,
        backgroundColor: 'green',
        borderRadius: 10
    },
    posisi: {
        flex: 1,
    }
})
