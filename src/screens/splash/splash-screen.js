import React, {memo} from 'react';
import {View, Text, StatusBar} from 'react-native';
import styles from './splash-styles';
import * as colors from '../../constants/uiConstants/colorConstants';

const Splash = () => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={colors?.GREY} barStyle="dark-content" />
      <Text style={styles.splashText}>Now And Me</Text>
    </View>
  );
};

export default memo(Splash);
