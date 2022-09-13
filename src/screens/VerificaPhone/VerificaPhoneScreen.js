import { useNavigation } from "@react-navigation/native";
import React, { useMemo, useRef, useState } from "react";
import { View, StyleSheet, Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Footer from "../../components/footer";
import { colorCuarto, colorPrimario, colorTercero, colorWhite } from "../../values/colors";
import { SAFE_AREA_PADDING, SCREEN_HEIGHT, SCREEN_WIDTH } from "../../values/constants";
import { styles } from "../../values/systemStyles";


export default function VerificaPhoneScreen({route}) {
    const navigation = useNavigation()
    const [nombre, setNombre] = useState(route.params.nombre)
    const [apellido, setApellido] = useState(route.params.apellido)
    const [telefono, setTelefono] = useState('')

    const refScroll = useRef(ScrollView)

    const enviarHandler = () => {
        navigation.navigate('Termino',{nombre,apellido,telefono})
    }


    return (
        <View style={styles.container}>
            <Image style={{ flex: 1, position: 'absolute', height: SCREEN_HEIGHT, width: SCREEN_WIDTH }} resizeMode='cover' source={require('../../assets/img/Background2.png')} />
            <ScrollView showsVerticalScrollIndicator={false} ref={refScroll}>
                <View style={styles.scrollContainer}>
                    <View style={styles2.AtomicLogo}>
                        <Image style={{ flex: 1, height: undefined, width: undefined }} resizeMode='contain' source={require('../../assets/img/LogotipoAtomic.png')} />
                    </View>
                    <View style={styles2.progressNumbers}>
                        <View style={{ flex: .5 }}>
                            <Image style={{ flex: 1, height: undefined, width: undefined }} resizeMode='contain' source={require('../../assets/img/checkWhite.png')} />
                        </View>
                        <View style={{ flex: .5 }}>
                            <Image style={{ flex: 1, height: undefined, width: undefined }} resizeMode='contain' source={require('../../assets/img/number2Empty.png')} />
                        </View>
                    </View>
                    <View style={styles2.progressBarView}>
                        <View style={styles2.progressBarFill} />
                        <View style={styles2.progressBarEmpty} />
                    </View>
                    <View style={styles2.textViewConocer}>
                        <View style={{ flex: .3, justifyContent: 'center' }}>
                            <Image style={{ flex: .4, height: undefined, width: undefined }} resizeMode='contain' source={require('../../assets/img/number2.png')} />
                        </View>
                        <View style={{ flex: .6, justifyContent: 'center' }}>
                            <Text style={[styles.text, { color: colorWhite }]}>
                                VALIDA TU
                            </Text>
                            <Text style={[styles.text, { color: colorPrimario }]}>
                                CELULAR
                            </Text>
                        </View>
                    </View>
                    <View style={{marginBottom:25}}>
                        <Text style={styles2.text}>Necesitamos validar tu teléfono para continuar</Text>
                    </View>
                    <View style={{marginBottom:25}}>
                        <Text style={styles2.text}>Ingresa tu número a 10 dígitos y te enviaremos un código SMS</Text>
                    </View>
                    <View style={styles2.inputView}>
                        <Text style={styles2.text}>{'Número de Celular'}</Text>
                        <TextInput
                             value={telefono}
                             style={styles2.input}
                             keyboardType='number-pad'
                             onChangeText={setTelefono}
                             maxLength={10}
                        />
                    </View>
                    <View style={{ marginBottom: 25,justifyContent:'center',alignItems:'center' }}>
                        <TouchableOpacity disabled={telefono.length==10?false:true} onPress={enviarHandler} style={telefono.length==10?styles2.buttonEnviar:styles2.buttonEnviarDisabled}>
                            <Text style={styles2.enviarText}>Enviar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles2.imageSpaceMan2}>
                            <Image style={{ flex: 1, height: undefined, width: undefined, }} resizeMode='contain' source={require('../../assets/img/spaceMan3.png')} />
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
        flexDirection: 'row',
        justifyContent: 'center',
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