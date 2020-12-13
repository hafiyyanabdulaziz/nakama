import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Linking, Image } from 'react-native'

const Detail = ({ route }) => {
    const { namaKebun } = route.params
    const { namaProduk } = route.params
    const { deskripsiProduk } = route.params
    const { hargaProduk } = route.params
    const { noWhatsApp } = route.params
    const { photoProduk } = route.params

    const [hasPhoto, setHasPhoto] = useState(false);
    const [photo, setPhoto] = useState('');
    
    return (
        <View>
            <Image source={{ uri: photoProduk }} style={styles.image} />
            <Text style={styles.text}>{namaKebun}</Text>
            <Text style={styles.textproduk}>{namaProduk}</Text>
            <Text style={styles.text}>{deskripsiProduk}</Text>
            <Text style={styles.text}>Rp. {hargaProduk}</Text>
            <Text style={styles.text}>+{noWhatsApp}</Text>
            
            <TouchableOpacity onPress={() => Linking.openURL('https://wa.me/6281528250366')} >
                <View style={styles.btn} >
                    <Text style={styles.textbtn}>Pesan Melalui Whatsapp</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    text: {
        marginStart: 10,
        marginTop: 10,
        fontSize: 20
    },
    textproduk: {
        marginStart: 10,
        marginTop: 10,
        fontSize: 25,
        fontWeight: "bold"
    },
    btn: {
        backgroundColor: '#74B631',
        height: 50,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 180,
        alignSelf: 'center',
        borderRadius: 20,
        
    },
    textbtn: {
        fontSize: 20,
        color: 'white'
    },
    photoInput: {
        backgroundColor: 'white',
        height: 200,
        width: 350,
        margin: 5,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 20,
        borderWidth: 2,
        borderStyle: 'dashed'
    },
    image: {
        height: 200,
    }
})
