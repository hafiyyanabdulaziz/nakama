import {GoogleSignin} from '@react-native-community/google-signin';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const CustomSidebarMenu = (props) => {
  const [dataSource, setDataSource] = useState();

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    setDataSource(await GoogleSignin.getCurrentUser());
    //console.log(dataSource)
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        {dataSource == null ? null : (
          <>
            <Image
              source={{uri: dataSource.user.photo}}
              style={{
                width: 70,
                height: 70,
                borderRadius: 50,
                marginVertical: 20,
              }}
            />
            <Text style={{fontSize: 30, color: '#FFFFFF'}}>
              {dataSource.user.name}
            </Text>
            <Text style={{fontSize: 15, color: '#FFFFFF'}}>
              {dataSource.user.email}
            </Text>
          </>
        )}
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 190,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
  },
  logout: {fontSize: 16, textAlign: 'center', paddingTop: 3, color: '#FFFFFF'},
  positionBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  logoutBtn: {
    backgroundColor: '#74B631',
    height: 33,
    width: 111,
    borderRadius: 11,
  },
});

export default CustomSidebarMenu;
