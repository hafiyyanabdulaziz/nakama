import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import ProductCard from '../components/ProductCard';
import FIREBASE from '../config/FIREBASE';

const Home = ({navigation}) => {
  const [dataSource, setDataSource] = useState();
  const [flickerData, setFlickerData] = useState([]);

  useEffect(() => {
    getDataFromFlickrAPI();
    FIREBASE.database()
      .ref('produk')
      .once('value', (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        setDataSource(Object.values(data));
      });
    // console.log(dataSource);
  }, []);

  const getDataFromFlickrAPI = () => {
    axios
      .get(
        'https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1',
      )
      .then((res) => {
        console.log(res.data.items);
        setFlickerData(res.data.items);
      });
  };

  return (
    <View>
      <Text>Halo</Text>
      <FlatList
        nestedScrollEnabled={true}
        data={flickerData}
        renderItem={({item}) => (
          <View style={styles.posisi}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Detail', {
                  url: item.link,
                  photoProduk: item.media.m,
                })
              }>
              <ProductCard src={item.media.m} />
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
    // height: 100,
  },
});
