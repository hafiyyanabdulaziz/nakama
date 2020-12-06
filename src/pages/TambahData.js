import React from 'react'
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FIREBASE from '../config/FIREBASE'

const TambahData = ({ navigation }) => {
    const onSubmit = () => {
        //if (this.state.nama && this.state.nomorHP && this.state.alamat) {
        if (true) {
            const connectToFirebase = FIREBASE.database().ref('produk');
            const produk = {
                namaKebun: 'Pak Joko',
                namaProduk: 'Strawberry Indonesia Manis',
                deskripsiProduk: 'Merupakan strawberry asli indonesia langsung dipetik dari kebunnya. Dijamin rasanya manis banget.',
                hargaProduk: 20000,
                noWhatsApp: '6281283793435'
            }

            connectToFirebase
                .push(produk)
                .then((data) => {
                    Alert.alert('Sukses', 'Produk berhasil ditambahkan');
                    navigation.pop()
                })
                .catch((error) => {
                    console.log("Error : ", error);
                })


        } else {
            Alert.alert('Error', 'Nama, Nomor HP, dan Alamat wajib diisi');
        }
    }

    return (
        <ScrollView>
            <View style={styles.photoInput} >
                <Text>Foto</Text>
            </View>
            <Text>Nama Kebun</Text>
            <TextInput style={styles.textInput} />
            <Text>Nama Produk</Text>
            <TextInput style={styles.textInput} />
            <Text>Deskripsi Produk</Text>
            <TextInput style={styles.textInput} />
            <Text>Harga Produk</Text>
            <TextInput style={styles.textInput} />
            <Text>No Whatsapp</Text>
            <TextInput style={styles.textInput} />
            <TouchableOpacity onPress={() => onSubmit()} >
                <View style={styles.btn} >
                    <Text>Tambah Barang</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default TambahData

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        margin: 5,
    },
    photoInput: {
        backgroundColor: 'yellow',
        height: 150
    },
    btn: {
        backgroundColor: 'yellow',
        height: 30,
        margin: 20
    }
})
