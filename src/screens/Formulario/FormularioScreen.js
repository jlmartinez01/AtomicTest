import { useNavigation } from "@react-navigation/native";
import React, { useMemo, useRef, useState } from "react";
import { View, StyleSheet, Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Footer from "../../components/footer";
import { colorCuarto, colorPrimario, colorTercero, colorWhite } from "../../values/colors";
import { SAFE_AREA_PADDING, SCREEN_HEIGHT, SCREEN_WIDTH } from "../../values/constants";
import { styles } from "../../values/systemStyles";


export default function FormularioScreen() {
    const navigation = useNavigation()
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')

    const refScroll = useRef(ScrollView)

    const enviarHandler = () => {
        navigation.navigate('VerificaPhone',{nombre,apellido})
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
                            <Image style={{ flex: 1, height: undefined, width: undefined }} resizeMode='contain' source={require('../../assets/img/number1.png')} />
                        </View>
                        <View style={{ flex: .5 }}>
                            <Image style={{ flex: 1, height: undefined, width: undefined }} resizeMode='contain' source={require('../../assets/img/number2Opacity.png')} />
                        </View>
                    </View>
                    <View style={styles2.progressBarView}>
                        <View style={styles2.progressBarFill} />
                        <View style={styles2.progressBarEmpty} />
                    </View>
                    <View style={styles2.textViewConocer}>
                        <View style={{ flex: .3, justifyContent: 'center' }}>
                            <Image style={{ flex: .4, height: undefined, width: undefined }} resizeMode='contain' source={require('../../assets/img/number1.png')} />
                        </View>
                        <View style={{ flex: .6, justifyContent: 'center' }}>
                            <Text style={[styles.text, { color: colorPrimario }]}>
                                TE QUEREMOS
                            </Text>
                            <Text style={[styles.text, { color: colorWhite }]}>
                                CONOCER
                            </Text>
                        </View>
                    </View>
                    <View style={{marginBottom:25}}>
                        <Text style={styles2.text}>Queremos saber que eres tú, por favor ingresa los siguientes datos:</Text>
                    </View>
                    <View style={styles2.inputView}>
                        <Text style={styles2.text}>{'Nombre (s)'}</Text>
                        <TextInput
                            value={nombre}
                            style={styles2.input}
                            autoCapitalize='words'
                            onChangeText={setNombre}
                        />
                    </View>
                    <View style={styles2.inputView}>
                        <Text style={styles2.text}>{'Apellido (s)'}</Text>
                        <TextInput
                            value={apellido}
                            style={styles2.input}
                            autoCapitalize='words'
                            onChangeText={setApellido}
                        />
                    </View>
                    <View style={{ marginBottom: 25,justifyContent:'center',alignItems:'center' }}>
                        <TouchableOpacity disabled={(nombre.length>3&&apellido.length>3)?false:true} onPress={enviarHandler} style={(nombre.length>3&&apellido.length>3)?styles2.buttonEnviar:styles2.buttonEnviarDisabled}>
                            <Text style={styles2.enviarText}>Enviar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles2.imageSpaceMan2}>
                            <Image style={{ flex: 1, height: undefined, width: undefined, }} resizeMode='contain' source={require('../../assets/img/spaceMan2.png')} />
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
        backgroundColor: colorWhite,
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
    },
});