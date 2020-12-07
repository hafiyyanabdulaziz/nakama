import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Detail = ({ route }) => {
    const { namaKebun } = route.params
    const { namaProduk } = route.params
    const { deskripsiProduk } = route.params
    const { hargaProduk } = route.params
    const { noWhatsApp } = route.params
    const { photoProduk } = route.params
    return (
        <View>
            <Text>{namaKebun}</Text>
            <Text>{namaProduk}</Text>
            <Text>{deskripsiProduk}</Text>
            <Text>{hargaProduk}</Text>
            <Text>{noWhatsApp}</Text>
            <Text>{photoProduk}</Text>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({})
