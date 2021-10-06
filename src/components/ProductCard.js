import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const ProductCard = ({src}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.imageThumbnail} source={{uri: src}} />
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  textBig: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textWhite: {
    color: 'white',
  },
  imageThumbnail: {
    //justifyContent: 'center',
    //alignItems: 'center',
    height: 200,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    borderRadius: 10,
  },
  card: {
    //flex: 1,
    //flexDirection: 'column',
    margin: 5,
    // height: 259,
    // backgroundColor: '#4CAF50',
    // borderRadius: 10,
  },
});
