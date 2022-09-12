import React from 'react';
import { Image, TouchableOpacity } from 'react-native';


export default function HeaderBack({ onPress }) {

    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: 50 }}>
        <Image
          style={{
            width: 20,
            height: 20,
          }}
          source={require('../../assets/img/flechaAtras.png')}
          resizeMode='contain'
        />
      </TouchableOpacity>
    );
  }