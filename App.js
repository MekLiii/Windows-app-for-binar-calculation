/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import Binar from './com/organizms/Binar';
import {StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.MainContainer}>
        <Binar />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
