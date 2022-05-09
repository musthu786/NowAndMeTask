import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './auth-stack';

const RootStackNavigation = () => (
  <>
    <View style={{height: '100%'}}>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </View>
  </>
);
export default RootStackNavigation;
