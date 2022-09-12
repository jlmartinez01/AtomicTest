import React from 'react';
import { Image, TouchableOpacity } from 'react-native';


export default function HeaderCenter({ onPress }) {

    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: 50 }}>
        <Image
          style={{
            width: 125,
            height: 125,
          }}
          source={require('../../assets/img/logoSelectedLogin.png')}
          resizeMode='contain'
        />
      </TouchableOpacity>
    );
  }