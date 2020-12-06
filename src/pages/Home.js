import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProductCard from '../components/ProductCard'

const Home = ({ navigation }) => {
    const [dataSource, setDataSource] = useState([]);

    useState(() => {
        let items = Array.apply(null, Array(10)).map((v, i) => {
            return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1) };
        });
        console.log(items)
        setDataSource(items);
    }, []);

    return (
        <View>
            <FlatList
                nestedScrollEnabled={true}
                data={dataSource}
                renderItem={({ item }) => (
                    <View style={styles.posisi1}>
                        <TouchableOpacity>
                            <ProductCard src={item.src} harga={30000} judul={'Jeruk Indonesia Asli'} pemilik={'Pak Joko'} />
                        </TouchableOpacity>
                    </View>
                    // <View style={{ flex: 1, flexDirection: 'column', margin: 5 }}>
                    //     <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
                    // </View>
                )}
                //Setting the number of column
                numColumns={2}
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
