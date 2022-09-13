import { useNavigation } from "@react-navigation/native";
import React, { useMemo, useRef, useState } from "react";
import { View, StyleSheet, Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Footer from "../../components/footer";
import { colorCuarto, colorPrimario, colorTercero, colorWhite } from "../../values/colors";
import { SAFE_AREA_PADDING, SCREEN_HEIGHT, SCREEN_WIDTH } from "../../values/constants";
import { styles } from "../../values/systemStyles";


export default function TerminoScreen({route}) {
    const navigation = useNavigation()
    const [nombre, setNombre] = useState(route.params.nombre)
    const [apellido, setApellido] = useState(route.params.apellido)
    const [telefono, setTelefono] = useState('')

    const refScroll = useRef(ScrollView)

    const enviarHandler = () => {
        console.log(nombre,apellido)
    }


    return (
        <View style={styles.container}>
            <Image style={{ flex: 1, position: 'absolute', height: SCREEN_HEIGHT, width: SCREEN_WIDTH }} resizeMode='cover' source={require('../../assets/img/Background2.png')} />
            <ScrollView showsVerticalScrollIndicator={false} ref={refScroll}>
                <View style={styles.scrollContainer}>
                    <View style={styles2.AtomicLogo}>
                        <Image style={{ flex: 1, height: undefined, width: undefined }} resizeMode='contain' source={require('../../assets/img/LogotipoAtomic.png')} />
                    </View>
                    <View style={styles2.textViewConocer}>
                            <Text style={[styles.text, { color: colorWhite,textAlign:'center'}]}>
                                TUS DATOS
                            </Text>
                            <Text style={[styles.text, { color: colorWhite,textAlign:'center'}]}>
                                HAN SIDO <Text style={{color:colorPrimario,textAlign:'center'}}>ENVIADOS CON ÉXITO</Text>
                            </Text>
                    </View>
                    <View style={{marginBottom:25}}>
                        <Text style={styles2.text}>En breve recibirás un correo de confirmación por parte del equipo de AtomicLabs.</Text>
                    </View>
                    <View style={{marginBottom:25}}>
                        <Text style={styles2.text}>Recuerda revisar tu bandeja de SPAM ¡Esperamos verte pronto!</Text>
                    </View>
                    <View style={styles2.imageSpaceMan2}>
                            <Image style={{ flex: 1, height: undefined, width: undefined, }} resizeMode='contain' source={require('../../assets/img/spaceMan4.png')} />
                    </View>
                </View>
                <Footer />
            </ScrollView>
        </View>
    );
}

export const styles2 = StyleSheet.create({
    AtomicLogo: {
        height: 30,
        marginBottom: 25
    },
    progressNumbers: {
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    progressBarView: {
        flex: .05,
        flexDirection: 'row'
    },
    progressBarFill: {
        flex: .4,
        backgroundColor: colorPrimario,
        height: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    progressBarEmpty: {
        flex: .6,
        backgroundColor: colorPrimario,
        height: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    textViewConocer: {
        height: 100,
        justifyContent: 'center',
        alignItems:'center',
        marginBottom:25
    },
    text:{
        color:colorWhite,
        fontSize:18,
    },
    inputView:{
        marginBottom:25
    },
    input:{
        backgroundColor:colorWhite,
        borderRadius:5
    },
    buttonEnviar: {
        backgroundColor: colorPrimario,
        width: '60%',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    buttonEnviarDisabled: {
        backgroundColor: colorPrimario,
        opacity:.6,
        width: '60%',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    enviarText: {
        fontSize: 18,
        color: colorWhite
    },
    imageSpaceMan2:{
        height:500
    }
});