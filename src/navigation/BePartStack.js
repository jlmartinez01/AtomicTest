import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { forFade } from '../values/constants';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

export default function BePartStack(){

    return (
      <Stack.Navigator
        options={{ cardStyleInterpolator: forFade }}>
        <Stack.Screen
          name='Login'
          component={WelcomeScreen}
          options={({ route }) => ({
            headerShown: false
          })} />
      </Stack.Navigator>
    )
}
