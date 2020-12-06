import React from 'react'
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FIREBASE from '../config/FIREBASE'
import { useForm } from '../utils/useForm'

const TambahData = ({ navigation }) => {
    const [form, setForm] = useForm({
        namaKebun: '',
        namaProduk: '',
        deskripsiProduk: '',
        hargaProduk: '',
        noWhatsApp: '',
    });

    const onSubmit = () => {
        if (form.namaKebun && form.namaProduk && form.deskripsiProduk && form.hargaProduk && form.noWhatsApp) {
            //if (true) {
            const connectToFirebase = FIREBASE.database().ref('produk');
            const produk = {
                namaKebun: form.namaKebun,
                namaProduk: form.namaProduk,
                deskripsiProduk: form.deskripsiProduk,
                hargaProduk: form.hargaProduk,
                noWhatsApp: form.noWhatsApp,
                photoProduk: 'https://picsum.photos/200'
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
            Alert.alert('Error', 'Semua harus diisi');
        }
    }

    return (
        <ScrollView>
            <View style={styles.photoInput} >
                <Text>Foto</Text>
            </View>
            <Text>Nama Kebun</Text>
            <TextInput style={styles.textInput} onChangeText={value => setForm('namaKebun', value)} />
            <Text>Nama Produk</Text>
            <TextInput style={styles.textInput} onChangeText={value => setForm('namaProduk', value)} />
            <Text>Deskripsi Produk</Text>
            <TextInput style={styles.textInput} onChangeText={value => setForm('deskripsiProduk', value)} />
            <Text>Harga Produk</Text>
            <TextInput style={styles.textInput} onChangeText={value => setForm('hargaProduk', value)} />
            <Text>No Whatsapp</Text>
            <TextInput style={styles.textInput} onChangeText={value => setForm('noWhatsApp', value)} />
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
