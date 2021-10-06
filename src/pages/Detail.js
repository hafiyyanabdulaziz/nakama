import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Image,
  ScrollView,
} from 'react-native';

const Detail = ({route}) => {
  const {photoProduk, url} = route.params;

  return (
    <ScrollView style={styles.screen}>
      <Image style={styles.image} source={{uri: photoProduk}} />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => Linking.openURL(url)}>
          <View style={styles.btn}>
            <Text style={styles.textbtn}>View in Flicker</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#74B631',
    height: 50,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    borderRadius: 20,
  },
  textbtn: {
    fontSize: 20,
    color: 'white',
  },
  image: {
    height: 330,
  },
  screen: {backgroundColor: 'white'},
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
    marginTop: -15,
  },
});
