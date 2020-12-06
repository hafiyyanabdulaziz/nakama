import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native'
import ProductCard from '../components/ProductCard'
import FIREBASE from '../config/FIREBASE'

const Home = ({ navigation }) => {
    const [dataSource, setDataSource] = useState();

    useEffect(() => {
        FIREBASE.database()
            .ref('produk')
            .once('value', (querySnapShot) => {
                let data = querySnapShot.val() ? querySnapShot.val() : {};
                setDataSource(Object.values(data));
            });
    }, []);

    return (
        <View>
            <FlatList
                nestedScrollEnabled={true}
                data={dataSource}
                renderItem={({ item }) => (
                    <View style={styles.posisi1}>
                        <TouchableOpacity>
                            <ProductCard src={item.photoProduk} harga={item.hargaProduk} judul={item.namaProduk} pemilik={item.namaKebun} />
                        </TouchableOpacity>
                    </View>
                    // <View style={{ flex: 1, flexDirection: 'column', margin: 5 }}>
                    //     <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
                    // </View>
                )}
                //Setting the number of column
                numColumns={2}
                keyExtractor={(item, index) => index}
            />
            <View style={styles.posisi2} >
                <TouchableOpacity onPress={() => { navigation.navigate('Tambah Data') }} >
                    <View style={styles.btnJual} >
                        <Text>Jual</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     backgroundColor: 'white',
    // },
    // imageThumbnail: {
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     height: 120,
    // },
    btnJual: {
        backgroundColor: 'yellow',
        height: 50,
        width: 50,
        margin: 30,
    },
    posisi2: {
        position: 'absolute',
        bottom: 0,
    },
    posisi1: {
        flex: 1,
    }
})
