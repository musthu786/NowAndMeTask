import {Splash, Login, Home} from '../../screens';
import NavigationConstants from './navigation-constants';

const routeConstant = {
  // authroot
  routeAuth: [
    {
      screenName: NavigationConstants.SPLASH,
      component: Splash,
    },
    {
      screenName: NavigationConstants.LOGIN_SCREEN,
      component: Login,
    },
    {
      screenName: NavigationConstants.HOME_SCREEN,
      component: Home,
    },
  ],
};
export default routeConstant;
