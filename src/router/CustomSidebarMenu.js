import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import React, { useEffect, useState } from 'react';
import {
  Linking,
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

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
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        {dataSource == null ? null : (
          <>
            <Image source={{ uri: dataSource.user.photo }} style={{ width: 70, height: 70, borderRadius: 50, marginVertical: 20 }} />
            <Text style={{ fontSize: 30, color: '#FFFFFF' }}>{dataSource.user.name}</Text>
            <Text style={{ fontSize: 15, color: '#FFFFFF' }}>{dataSource.user.email}</Text>
          </>
        )}
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Hubungi Developer"
          onPress={() =>
            Linking.openURL(
              'mailto:kitahukomputer@gmail.com?subject=Need Support Developer',
            )
          }
        />
        <DrawerItem
          label="Follow us"
          onPress={() =>
            Linking.openURL('https://instagram.com/kitahukomputer')
          }
        />
        <DrawerItem
          label="Beri Rating"
          onPress={() => Linking.openURL('market://details?id=com.nakama')}
        />
      </DrawerContentScrollView>

      <View style={styles.positionBtn}>
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={async () => {
            try {
              await GoogleSignin.revokeAccess();
              await GoogleSignin.signOut();
              props.navigation.replace('Login');
            } catch (error) {
              console.error(error);
            }
          }}>
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 190,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
  },
  logout: { fontSize: 16, textAlign: 'center', paddingTop: 3, color: '#FFFFFF' },
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
