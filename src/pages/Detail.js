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
  const {namaKebun} = route.params;
  const {namaProduk} = route.params;
  const {deskripsiProduk} = route.params;
  const {hargaProduk} = route.params;
  const {noWhatsApp} = route.params;
  const {photoProduk} = route.params;

  return (
    <ScrollView style={{backgroundColor:"white"}}>
      <Image style={styles.image} source={{uri: photoProduk}} />
      <View style={{borderTopLeftRadius:20,borderTopRightRadius:20,backgroundColor:"white",marginTop:-15}}>
        <Text style={styles.text}>{namaKebun}</Text>
        <Text style={styles.textproduk}>{namaProduk}</Text>
        <Text style={styles.textDeskripsi}>{deskripsiProduk}</Text>
        <Text style={styles.text}>Rp.{hargaProduk}/Kg</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://wa.me/' + noWhatsApp)}>
          <View style={styles.btn}>
            <Text style={styles.textbtn}>Pesan Melalui Whatsapp</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  text: {
    marginTop: 15,
    marginLeft:25,
    fontSize: 20,
  },
  textproduk: {
    marginTop: 5,
    marginLeft:15,
    fontSize: 25,
    fontWeight: 'bold',
  },
  textDeskripsi: {
    marginTop: 10,
    marginHorizontal:25,
    fontSize: 15,
    textAlign: 'justify'
  },
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
  photoInput: {
    backgroundColor: 'white',
    height: 200,
    width: 350,
    margin: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderStyle: 'dashed',
  },
  image: {
    height: 330,
  },
});
