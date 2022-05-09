import React, {memo} from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import styles from './login-styles';
import * as colors from '../../constants/uiConstants/colorConstants';
import {TextComponent} from '../../components/atoms';
import {FormContainer, LoginComponent} from '../../components/molecules';
import {loginProps} from './login-props';
const Login = props => {
  const {loader = false, onSubmit} = props;
  let loginFormData = loginProps({...props});
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={colors?.GREY} barStyle="light-content" />

      <View style={{flex: 1.5, height: '100%', width: '100%'}}></View>
      <View
        style={{
          flex: 3,
          height: '100%',
          width: '100%',
          borderWidth: 2,
          borderColor: '#969696',
          borderRadius: 8,
        }}>
        <LoginComponent
          titleFirst={'WELCOME BACK'}
          titleSecond={'Log into Your Account'}
        />
        <FormContainer formFileds={loginFormData} styleInput={styles.input} />

        <TouchableOpacity
          activeOpacity={0.9}
          hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
          onPress={() => onSubmit()}
          style={{
            height: 30,
            width: '80%',
            backgroundColor: '#4A96FF',
            marginLeft: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white'}}>Login Now</Text>
        </TouchableOpacity>

        <TextComponent
          style={{fontSize: 12, color: 'white', marginLeft: 30, marginTop: 10}}>
          Not registered yet?
        </TextComponent>
      </View>
      <View style={{flex: 0.5, height: '100%', width: '100%'}}></View>
    </View>
  );
};

export default memo(Login);
