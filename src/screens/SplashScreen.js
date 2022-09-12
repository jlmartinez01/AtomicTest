import AnimatedLottieView from "lottie-react-native";
import React, {useEffect} from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { colorSecundario } from "../values/colors";

export default function SplashScreen() {


  return (
    <View style={styles.container}>
      {<AnimatedLottieView
          style={styles.animation}
          source={require("../assets/lottie/rocket.json")}
          autoPlay={true}
          resizeMode='contain'
          duration={2000}
  />}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ 
    flex: 1, 
    backgroundColor: colorSecundario, 
    justifyContent: 'center',
    alignItems:'center' 
  },
  animation:{
    height:200,
    width:200
  }

});

