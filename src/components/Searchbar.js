import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Searchbar = ({value, onChangeText, onSubmitEditing}) => {
  return (
    <TextInput
      style={styles.search}
      placeholder={'Tag Search'}
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
    />
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  search: {
    borderWidth: 1,
    margin: 5,
    borderRadius: 10,
  },
});
