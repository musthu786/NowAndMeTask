/* istanbul ignore file */
import React, {useEffect, useState} from 'react';
import LoginScreen from './login-screen';
import {useNavigation} from '@react-navigation/native';
import NavigationConstants from '../../navigator/navconstants/navigation-constants';

/**
 * Container Component
 *  - Write down all component logic here
 */
const Login = props => {
  let navigation = useNavigation();
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = value => {
    setEmailId(value);
  };

  const handlePasswordChange = value => {
    setPassword(value);
  };

  const onSubmit = () => {
    navigation.replace(NavigationConstants.HOME_SCREEN);
  };

  return (
    <LoginScreen
      emailId={emailId}
      password={password}
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
      onSubmit={onSubmit}
      {...props}
    />
  );
};

export default Login;
