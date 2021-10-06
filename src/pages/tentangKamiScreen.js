import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Logo} from '../assets';

const textPesan =
  'Find the best photos from around the world in the Nakama App. Powered by flickr.';

const TentangKami = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Text style={{marginTop:20,marginLeft:20,fontSize:30}}>About Nakama</Text> */}
        <View style={style.imageposition}>
          <Image style={style.imageStyle} source={Logo} />
          <Text style={style.textStyle}>{textPesan}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TentangKami;

const style = StyleSheet.create({
  imageposition: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    margin: 30,
    borderRadius: 20,
    paddingBottom: 20,
  },
  imageStyle: {
    marginVertical: 30,
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  textStyle: {
    marginHorizontal: 40,
    textAlign: 'justify',
    fontSize: 20,
  },
});
