import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { forFade } from '../values/constants';
import WelcomeScreen from '../screens/Welcome/WelcomeScreen';
import FormularioScreen from '../screens/Formulario/FormularioScreen';
import VerificaPhoneScreen from '../screens/VerificaPhone/VerificaPhoneScreen';
import TerminoScreen from '../screens/Termino/TerminoScreen';

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
             <Stack.Screen
          name='Form'
          component={FormularioScreen}
          options={({ route }) => ({
            headerShown: false,
          })} />
               <Stack.Screen
          name='VerificaPhone'
          component={VerificaPhoneScreen}
          options={({ route }) => ({
            headerShown: false,
          })} />
             <Stack.Screen
          name='Termino'
          component={TerminoScreen}
          options={({ route }) => ({
            headerShown: false,
          })} />
      </Stack.Navigator>
    )
}
