import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import ProductCard from '../components/ProductCard';
import Searchbar from '../components/Searchbar';

const Home = ({navigation}) => {
  const [flickerData, setFlickerData] = useState([]);
  const [textSearch, setTextSearch] = useState('');

  useEffect(() => {
    getDataFromFlickrAPI();
  }, []);

  const getDataFromFlickrAPI = () => {
    axios
      .get(
        'https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1',
      )
      .then((res) => {
        setFlickerData(res.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const searchTag = ({text}) => {
    if (textSearch === '') {
      getDataFromFlickrAPI();
    } else {
      axios
        .get(
          'https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1&tags=' +
            textSearch,
        )
        .then((res) => {
          setFlickerData(res.data.items);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <View>
      <Searchbar
        value={textSearch}
        onChangeText={(value) => setTextSearch(value)}
        onSubmitEditing={() => {
          searchTag(textSearch);
        }}
      />
      <FlatList
        nestedScrollEnabled={true}
        data={flickerData}
        renderItem={({item}) => (
          <View style={styles.position}>
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
  position: {
    flex: 1,
  },
});
