import React, { useState,useEffect } from 'react';
import { Alert, StatusBar, View } from 'react-native';
import {
  NavigationContainer,
  DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { forFade } from '../values/constants';
import FlashMessage from 'react-native-flash-message';
import BePartStack from './BePartStack';
import SplashScreen from '../screens/SplashScreen';
import customStyles from '../values/customStyles';

const StackContainer = createStackNavigator();

export default function Navigator() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    loadSplash()
  }, []);

  
  async function loadSplash(){
   await performTimeConsumingTask()
   setSplash(false)
  }

  const performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve("result");
      }, 1600)
    );
  };



  return (
    <NavigationContainer theme={DarkTheme}>
        <StatusBar translucent barStyle='light-content' backgroundColor='transparent'/>
        <StackContainer.Navigator headerShown="none" screenOptions={{ cardStyleInterpolator: forFade }}>
          {
            splash
              ?
              <StackContainer.Screen name='Splash' component={SplashScreen} options={{ headerShown: false }} />
              :
              <StackContainer.Screen name='Auth' component={BePartStack} options={{ headerShown: false }} />
          }
        </StackContainer.Navigator>
      <FlashMessage position="center" floating style={customStyles.messageStyle}/>
    </NavigationContainer>
  )
}
