import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

const CustomSidebarMenu = (props) => {
  return (
    <SafeAreaView style={styles.screen}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default CustomSidebarMenu;
