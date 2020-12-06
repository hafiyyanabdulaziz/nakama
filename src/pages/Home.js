import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProductCard from '../components/ProductCard'

const Home = () => {
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
                    <ProductCard src={item.src} harga={30000} judul={'Jeruk Indonesia Asli'} pemilik={'Pak Joko'} />
                    // <View style={{ flex: 1, flexDirection: 'column', margin: 5 }}>
                    //     <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
                    // </View>
                )}
                //Setting the number of column
                numColumns={2}
            />
            <View style={styles.posisi} >
                <TouchableOpacity>
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
    posisi: {
        position: 'absolute',
        bottom: 0,
    }
})
