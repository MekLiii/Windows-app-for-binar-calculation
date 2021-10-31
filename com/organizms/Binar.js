/* eslint-disable prettier/prettier */
import React from 'react';
import BinarEl from '../molecules/BinarEl';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  PlatformColor,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <BinarEl />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#393E46',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
