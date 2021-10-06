import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, Text, View} from 'react-native';
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
    <View>
      <Text>Halo</Text>
      <FlatList
        nestedScrollEnabled={true}
        data={dataSource}
        renderItem={({item}) => (
          <View style={styles.posisi}>
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
              <ProductCard src={item.photoProduk} />
            </TouchableOpacity>
          </View>
        )}
        numColumns={2}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  posisi: {
    flex: 1,
  },
});
