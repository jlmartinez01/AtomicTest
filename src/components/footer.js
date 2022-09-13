import React, { useMemo, useRef, useState } from "react";
import { View, StyleSheet, Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { colorCuarto, colorPrimario, colorQuinto, colorTercero, colorWhite } from "../values/colors";
import { SAFE_AREA_PADDING } from "../values/constants";
export default function Footer() {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.textCompany}>2020 Atomic Labs. Todos los derechos reservados.</Text>
            </View>
            <View>
                <Text style={styles.textPrivacity}>Aviso de privacidad</Text>
            </View>
            <View style={styles.socialNetWorkView}>
                <View style={styles.imageView}>
                    <Image style={{ flex: 1, height: undefined, width: undefined }} resizeMode='contain' source={require('../assets/img/linkedin2.png')} />
                </View>
                <View style={styles.imageView}>
                    <Image style={{ flex: 1, height: undefined, width: undefined }} resizeMode='contain' source={require('../assets/img/twitter2.png')} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height:150,
        width:'100%',
        backgroundColor:colorQuinto,
        alignItems:'center',
        justifyContent:'space-between',
        padding:SAFE_AREA_PADDING.paddingTop
    },
    textCompany:{
        color:colorWhite
    },
    textPrivacity:{
        color:colorWhite,
        textDecorationLine: 'underline'
    },
    socialNetWorkView:{
        flexDirection:'row',
        height:30
    },
    imageView:{
        flex:.15
    }
});


