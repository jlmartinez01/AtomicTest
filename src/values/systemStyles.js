import { StyleSheet } from "react-native";
import { colorWhite,colorPrimario,colorSecundario,colorTercero,colorCuarto,colorQuinto } from "./colors";
import { SAFE_AREA_PADDING, SCREEN_HEIGHT, SCREEN_WIDTH } from "./constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollContainer: {
        flex: 1,
        padding: SAFE_AREA_PADDING.paddingTop
    },
    screenView: {
        height: SCREEN_HEIGHT,
    },
    AtomicLogo: {
        flex: .05,
    },
    textViewDesarrolla: {
        flex: .3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    moreButton: {
        flex: .15,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    flechaDown: {
        height: 50,
        width: 50
    },
    imageSpaceMan: {
        flex: .35,
        justifyContent: 'center',
        padding: 10
    },
    buttonBePartView: {
        flex: .1,
        alignItems: 'center'
    },
    buttonBePart: {
        backgroundColor: colorWhite,
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
    bePartText: {
        fontSize: 18,
        color: colorTercero
    },
    textViewBrazoDerecho: {
        flex: .2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardsView: {
        flex: .6,
    },
    card: {
        height: '90%',
        marginHorizontal: 10,
        width: SCREEN_WIDTH - 50,
        backgroundColor: colorPrimario,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 10
    },
    circleFill: {
        height: 10,
        width: 10,
        backgroundColor: colorPrimario,
        borderRadius: 50,
        marginHorizontal: 5
    },
    circleEmpty: {
        height: 10,
        width: 10,
        backgroundColor: colorWhite,
        borderRadius: 50,
        marginHorizontal: 5
    },
    teEncantaraText: {
        flex: .2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageCard: {
        flex: .5
    },
    lineView: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    lineLeft: {
        width: 50,
        height: 2,
        backgroundColor: colorWhite,
        marginRight: 5
    },
    lineCenter: {
        width: 10,
        height: 2,
        backgroundColor: colorWhite,
        marginRight: 5
    },
    lineRight: {
        width: 50,
        height: 2,
        backgroundColor: colorWhite
    },
    textCenterBox: {
        flex: .2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    characteristicsCard: {
        flex: .2,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    procesoView: {
        height: 200,
        marginBottom: 25
    },
    processImage: {
        flex: .7
    },
    processTextView: {
        flex: .3,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    processText:{
        color: colorWhite, 
        textAlign: 'center',
        fontSize:12
    },
    cajitaProceso: {
        flex: .25,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cajaEquipo: {
        justifyContent: 'center',
        height: 300,
        width: '100%',
        backgroundColor: colorCuarto,
        marginBottom: 25,
        borderRadius: 10
    },
    imageEquipo: {
        flex: .6
    },
    textViewEquipo: {
        flex: .2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    nameEquipo: {
        color: colorWhite,
        fontWeight: 'bold',
        fontSize: 18
    },
    namePuesto: {
        color: colorWhite,
        fontSize: 16
    }
});