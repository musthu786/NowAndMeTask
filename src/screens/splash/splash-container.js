/* istanbul ignore file */
import React, {useEffect} from 'react';
import SplashScreen from './splash-screen';
import {useNavigation} from '@react-navigation/native';
import NavigationConstants from '../../navigator/navconstants/navigation-constants';

/**
 * Container Component
 *  - Write down all component logic here
 */
const Splash = props => {
  let navigation = useNavigation();

  useEffect(() => {
    loadApp();
  }, []);

  const loadApp = async () => {
    setTimeout(() => {
      onNavigate();
    }, 2000);
  };

  const onNavigate = (navigateTo, routeData) => {
    navigation.replace(NavigationConstants.LOGIN_SCREEN);
  };

  return <SplashScreen {...props} />;
};

export default Splash;
