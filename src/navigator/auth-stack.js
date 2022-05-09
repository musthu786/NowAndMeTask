import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import routeConstant from './navconstants/route-constants';

const Stack = createStackNavigator();

const Auth = () => (
  <Stack.Navigator>
    {routeConstant?.routeAuth?.map((value, i) => (
      <Stack.Screen
        key={i}
        name={value.screenName}
        component={value.component}
        options={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerShown: false,
          animationEnabled: false,
        }}
      />
    ))}
  </Stack.Navigator>
);

export default Auth;
