import React, { useState } from 'react';
import {View, } from 'react-native';
import { TextComponent} from '../../atoms';

import styles from './home-styles'


const HomeComponent = (props) => {
  const { titleFirst,titleSecond} = props;
  
  return (
    <>
      <View style={styles.container}>
		<TextComponent style={styles.preFixText}>{titleFirst}</TextComponent>
		<TextComponent style={styles.preFixTextSecond}>{titleSecond}</TextComponent>
        </View>

    </>
  );
};


export default HomeComponent;
