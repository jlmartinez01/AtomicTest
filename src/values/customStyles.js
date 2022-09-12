import { StyleSheet } from 'react-native';
import { colorPrimario, colorSecundario, colorTercero, colorWhite } from './colors';
export default StyleSheet.create({
    textBlack:{
        color:colorSecundario,
        fontSize:14
    },
    textWhite:{
        color:colorWhite,
        fontSize:14
    },
    textWhiteMedium:{
        color:colorWhite,
        fontSize:18
    },
    textWhiteWeight:{
        color:colorWhite,
        fontWeight:'900',
        fontSize:14
    },
    textWhiteCenter:{
        color:colorWhite,
        textAlign:'center'
    },
    textWhiteBig:{
        color:colorWhite,
        fontSize:25
    },
    textWhiteBigCenter:{
        color:colorWhite,
        fontSize:25,
        textAlign:'center'
    },
    textRedBig:{
        color:colorPrimario,
        fontSize:25
    },
    textGray:{
        color: colorTercero,
    },
    textGrayUnderline:{
        color: colorTercero,
        textDecorationLine: 'underline',
    },
    textGraySmall:{
        color: colorTercero,
        fontSize:10
    },
    textGraySmallUnderline:{
        color: colorTercero,
        textDecorationLine: 'underline',
        fontSize:10
    },
    textGrayCenter:{
        color: colorTercero,
        textAlign: 'center'
    },
    textGrayClaro:{
        color: colorTercero,
    },
    textGrayClaroUnderline:{
        color: colorTercero,
        textDecorationLine: 'underline',
    },
    textGrayClaroSmall:{
        color: colorTercero,
        fontSize:10
    },
    textGrayClaroSmallUnderline:{
        color: colorTercero,
        textDecorationLine: 'underline',
        fontSize:10
    },
    textGrayClaroCenter:{
        color: colorTercero,
        textAlign: 'center'
    },
    textRed:{
        color:colorPrimario
    },
    messageStyle:{
        position:'absolute',
        top:40,
        borderRadius:30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    }
})