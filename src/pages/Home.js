import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ProductCard from '../components/ProductCard';
import FIREBASE from '../config/FIREBASE';

const Home = ({navigation}) => {
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
    <View style={{backgroundColor: 'white'}}>
      <View style={{backgroundColor: 'white', marginTop: 20}}>
        <FlatList
          nestedScrollEnabled={true}
          data={dataSource}
          renderItem={({item}) => (
            <View style={styles.posisi1}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Detail', {
                    namaKebun: item.namaKebun,
                    namaProduk: item.namaProduk,
                    deskripsiProduk: item.deskripsiProduk,
                    hargaProduk: item.hargaProduk,
                    noWhatsApp: item.noWhatsApp,
                    photoProduk: item.photoProduk,
                  })
                }>
                <ProductCard
                  src={item.photoProduk}
                  harga={item.hargaProduk}
                  judul={item.namaProduk}
                  pemilik={item.namaKebun}
                />
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
        <View style={styles.posisi2}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Tambah Data');
            }}>
            <View style={styles.btnJual}>
              <Text style={{marginTop:2,fontSize:18,color:"#FFFFFF"}}>Jual</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;

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
    backgroundColor: '#74B631',
    height: 40,
    width: 88,
    margin: 30,
    borderRadius:30,
    borderWidth:3,
    borderColor:"#FFEB3B",
    alignItems: 'center',
  },
  posisi2: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0, right: 0, bottom: 0
  },
  posisi1: {
    flex: 1,
  },
});
