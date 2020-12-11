import React, { useState } from 'react'
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FIREBASE from '../config/FIREBASE'
import { useForm } from '../utils/useForm'
import ImagePicker from 'react-native-image-picker'

const TambahData = ({ navigation }) => {
    const [form, setForm] = useForm({
        namaKebun: '',
        namaProduk: '',
        deskripsiProduk: '',
        hargaProduk: '',
        noWhatsApp: '',
        photo: '',
    });
    const [hasPhoto, setHasPhoto] = useState(false);
    const [photo, setPhoto] = useState('');

    const getImage = () => {
        ImagePicker.launchImageLibrary({}, response => {
            if (!(response.didCancel || response.error)) {
                const source = { uri: `data:${response.type};base64, ${response.data}` }
                //const coba = `data:${response.type};base64, ${response.data}`
                //console.log(coba, 'ini coba')
                setPhoto(source)
                setHasPhoto(true)
                setForm('photo', `data:${response.type};base64, ${response.data}`)
            }
        })
    }

    const onSubmit = () => {
        if (form.namaKebun && form.namaProduk && form.deskripsiProduk && form.hargaProduk && form.noWhatsApp && form.photo) {
            //if (true) {
            const connectToFirebase = FIREBASE.database().ref('produk');
            const produk = {
                namaKebun: form.namaKebun,
                namaProduk: form.namaProduk,
                deskripsiProduk: form.deskripsiProduk,
                hargaProduk: form.hargaProduk,
                noWhatsApp: form.noWhatsApp,
                photoProduk: form.photo
            }

            connectToFirebase
                .push(produk)
                .then((data) => {
                    Alert.alert('Sukses', 'Produk berhasil ditambahkan');
                    navigation.replace('Home')
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
            <TouchableOpacity onPress={getImage} >
                {/* {hasPhoto && <View style={styles.photoInput} ><Text></Text></View>} */}
                {hasPhoto && <Image source={photo} style={styles.image} />}
                {!hasPhoto && <View style={styles.photoInput} ><Text>false</Text></View>}
            </TouchableOpacity>
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
        height: 200
    },
    btn: {
        backgroundColor: 'yellow',
        height: 30,
        margin: 20
    },
    image: {
        height: 200,
    }
})
