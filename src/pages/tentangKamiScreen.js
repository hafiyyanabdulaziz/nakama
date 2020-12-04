import React from 'react';
import { SafeAreaView,ScrollView,View,Text,Image,StyleSheet } from 'react-native';
import { Logo } from '../assets';

const textPesan = "Nakama merupakan sebuah aplikasi jual beli hasi pertanian yang memungkinkan semua orang dapat menjual ataupun membeli tanpa perlu repot mencarinya, dasar terciptanya aplikasi ini karena masih banyaknya petani kecil yang kesulitan dalam memasarkan hasil pertaniannya.";


const TentangKami = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Image source={Logo}/>
                <Text>{textPesan}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default TentangKami;

const style = StyleSheet.create({
    imageStyle:{},
    textStyle:{},
    });