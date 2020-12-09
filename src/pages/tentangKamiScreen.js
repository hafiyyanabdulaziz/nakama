import React from 'react';
import { SafeAreaView,ScrollView,View,Text,Image,StyleSheet } from 'react-native';
import { Logo } from '../assets';

const textPesan = "Nakama merupakan sebuah aplikasi jual beli hasi pertanian yang memungkinkan semua orang dapat menjual ataupun membeli tanpa perlu repot mencarinya, dasar terciptanya aplikasi ini karena masih banyaknya petani kecil yang kesulitan dalam memasarkan hasil pertaniannya.";


const TentangKami = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={style.imageposition}>
                    <Image style={style.imageStyle} source={Logo}/>
                    <Text style={style.textStyle} >{textPesan}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default TentangKami;

const style = StyleSheet.create({
    imageposition:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle:{
        marginVertical:50,
        width: 200,
        height: 200,
        resizeMode:'contain',
    },
    textStyle:{
        marginHorizontal:40,
        textAlign:"justify",
        fontSize:24
    },
});