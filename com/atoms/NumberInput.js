/* eslint-disable prettier/prettier */
import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

const NumberInput = (props) => {
  return (
    <View>
      <TextInput
        value={props.value}
        style={styles.textInput}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    minWidth: 200,
    minHeight: 40,
    fontSize: 30,
    margin:10,
  },
});
export default NumberInput;
