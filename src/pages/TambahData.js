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
                {!hasPhoto && <View style={{ backgroundColor: 'white', margin: 5, }} >
                    <View style={styles.photoInput} >
                        <Text style={{ alignSelf: 'center' }}>Tambah Foto</Text>
                    </View>
                </View>}
            </TouchableOpacity>
            <Text style={styles.text}>Nama Kebun</Text>
            <TextInput style={styles.textInput} onChangeText={value => setForm('namaKebun', value)} />
            <Text style={styles.text}>Nama Produk</Text>
            <TextInput style={styles.textInput} onChangeText={value => setForm('namaProduk', value)} />
            <Text style={styles.text}>Deskripsi Produk</Text>
            <TextInput style={styles.textInput} onChangeText={value => setForm('deskripsiProduk', value)} />
            <Text style={styles.text}>Harga Produk</Text>
            <Text style={{ marginLeft: 5 }}>*Harga /kg</Text>
            <TextInput style={styles.textInput} onChangeText={value => setForm('hargaProduk', value)} />
            <Text style={styles.text}>No Whatsapp</Text>
            <Text style={{ marginLeft: 5 }}>ex: 6281212345678</Text>
            <TextInput style={styles.textInput} onChangeText={value => setForm('noWhatsApp', value)} />
            <TouchableOpacity onPress={() => onSubmit()} >
                <View style={styles.btn} >
                    <Text style={styles.textbtn}>Tambah Barang</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default TambahData

const styles = StyleSheet.create({
    text: {
        margin: 5,
        fontSize: 20

    },
    textInput: {
        borderWidth: 1,
        margin: 5,
        borderRadius: 10
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
    btn: {
        backgroundColor: '#74B631',
        height: 50,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        alignSelf: 'center',
        borderRadius: 20,
    },
    textbtn: {
        fontSize: 20,
        color: 'white'
    },
    image: {
        height: 300,
    }
})
