import React, { useRef, useState } from "react";
import { View, StyleSheet, Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { colorPrimario, colorTercero, colorWhite } from "../values/colors";
import { SAFE_AREA_PADDING, SCREEN_HEIGHT, SCREEN_WIDTH } from "../values/constants";
export default function WelcomeScreen() {

    const [screen2Y, setScreen2Y] = useState(0)

    const refScroll = useRef(ScrollView)

    const saberMasHandler = () => {
        refScroll.current.scrollTo({
            x: 0,
            y: screen2Y,
            animated: true,
        });
    }

    return (
        <View style={styles.container}>
            <Image style={{ flex: 1, position: 'absolute', height: SCREEN_HEIGHT, width: SCREEN_WIDTH }} resizeMode='cover' source={require('../assets/img/Background2.png')} />
            <ScrollView ref={refScroll} style={styles.scrollContainer}>
                <View style={styles.screenView}>
                    <View style={styles.AtomicLogo}>
                        <Image style={{ flex: 1, height: undefined, width: undefined }} resizeMode='contain' source={require('../assets/img/LogotipoAtomic.png')} />
                    </View>
                    <View style={styles.textViewDesarrolla}>
                        <Text style={[styles.text, { color: colorWhite }]}>
                            Desarrolla todo
                        </Text>
                        <Text style={[styles.text, { color: colorPrimario }]}>
                            tu POTENCIAL
                        </Text>
                        <Text style={[styles.text, { color: colorWhite }]}>
                            dentro del equipo
                        </Text>
                        <Text style={[styles.text, { color: colorPrimario }]}>
                            ATOMIC<Text style={{ color: colorWhite }}>LABS</Text>
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.moreButton} onPress={saberMasHandler}>
                        <View style={styles.flechaDown}>
                            <Image style={{ flex: 1, height: undefined, width: undefined }} resizeMode='contain' source={require('../assets/img/arrowDown.png')} />
                        </View>
                        <Text style={{ color: colorWhite }}>
                            Quiero saber más
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.imageSpaceMan}>
                        <Image style={{ flex: 1, height: undefined, width: undefined, }} resizeMode='contain' source={require('../assets/img/spaceMan1.png')} />
                    </View>
                    <View style={styles.buttonBePartView}>
                        <TouchableOpacity style={styles.buttonBePart}>
                            <Text style={styles.bePartText}>¡Quiero ser parte!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View
                    onLayout={(event) => {
                        const layout = event.nativeEvent.layout;
                        setScreen2Y(layout.y)
                    }}
                    style={styles.screenView}>
                    <View style={styles.textViewBrazoDerecho}>
                        <Text style={[styles.text, { color: colorWhite }]}>
                            SOMOS EL BRAZO
                        </Text>
                        <Text style={[styles.text, { color: colorWhite }]}>
                            DERECHO <Text style={{ color: colorPrimario }}>DE LA</Text>
                        </Text>
                        <Text style={[styles.text, { color: colorPrimario }]}>
                            TECNOLOGÍA
                        </Text>
                    </View>
                    <View style={styles.cardsView}>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.scrollContainer}>
                            <View>
                                <View style={styles.card}>
                                    <View style={styles.imageCard}>
                                        <Image style={{ flex: 1, height: undefined, width: undefined, }} resizeMode='contain' source={require('../assets/img/imagina.png')} />
                                    </View>
                                    <View style={styles.lineView}>
                                        <View style={styles.lineLeft} />
                                        <View style={styles.lineCenter} />
                                        <View style={styles.lineRight} />
                                    </View>
                                    <View style={styles.textCenterBox}>
                                        <Text style={[styles.text, { color: colorWhite }]}>IMAGINA</Text>
                                    </View>
                                    <View style={styles.characteristicsCard}>
                                        <Text style={{ color: colorWhite }}>{'\u25CF '}<Text style={{ fontWeight: 'bold' }}>Estrategia </Text>Digital</Text>
                                        <Text style={{ color: colorWhite }}>{'\u25CF Big Data & '}<Text style={{ fontWeight: 'bold' }}>Analysis </Text></Text>
                                        <Text style={{ color: colorWhite }}>{'\u25CF '}<Text style={{ fontWeight: 'bold' }}>Consultoría </Text>Tecnológica</Text>
                                        <Text style={{ color: colorWhite }}>{'\u25CF '}<Text style={{ fontWeight: 'bold' }}>Reducción </Text>de costos TI</Text>
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', padding: 10 }}>
                                    <View style={styles.circleFill} />
                                    <View style={styles.circleEmpty} />
                                    <View style={styles.circleEmpty} />
                                </View>
                            </View>
                            <View>
                                <View style={styles.card}>
                                    <View style={styles.imageCard}>
                                        <Image style={{ flex: 1, height: undefined, width: undefined, }} resizeMode='contain' source={require('../assets/img/planets.png')} />
                                    </View>
                                    <View style={styles.lineView}>
                                        <View style={styles.lineLeft} />
                                        <View style={styles.lineCenter} />
                                        <View style={styles.lineRight} />
                                    </View>
                                    <View style={styles.textCenterBox}>
                                        <Text style={[styles.text, { color: colorWhite }]}>IMAGINA</Text>
                                    </View>
                                    <View style={styles.characteristicsCard}>
                                        <Text style={{ color: colorWhite }}>{'\u25CF Innovación '}<Text style={{ fontWeight: 'bold' }}>y creación tecnológica </Text></Text>
                                        <Text style={{ color: colorWhite }}>{'\u25CF '}<Text style={{ fontWeight: 'bold' }}>UI/UX</Text></Text>
                                        <Text style={{ color: colorWhite }}>{'\u25CF '}<Text style={{ fontWeight: 'bold' }}>Innovación </Text></Text>
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', padding: 10 }}>
                                    <View style={styles.circleEmpty} />
                                    <View style={styles.circleFill} />
                                    <View style={styles.circleEmpty} />
                                </View>
                            </View>
                            <View>
                                <View style={styles.card}>
                                    <View style={styles.imageCard}>
                                        <Image style={{ flex: 1, height: undefined, width: undefined, }} resizeMode='contain' source={require('../assets/img/conquest.png')} />
                                    </View>
                                    <View style={styles.lineView}>
                                        <View style={styles.lineLeft} />
                                        <View style={styles.lineCenter} />
                                        <View style={styles.lineRight} />
                                    </View>
                                    <View style={styles.textCenterBox}>
                                        <Text style={[styles.text, { color: colorWhite }]}>IMAGINA</Text>
                                    </View>
                                    <View style={styles.characteristicsCard}>
                                        <Text style={{ color: colorWhite }}>{'\u25CF Desarrollo tecnológico y '}<Text style={{ fontWeight: 'bold' }}>creación tecnológica </Text></Text>
                                        <Text style={{ color: colorWhite }}>{'\u25CF '}<Text style={{ fontWeight: 'bold' }}>Ciberseguridad </Text></Text>
                                        <Text style={{ color: colorWhite }}>{'\u25CF '}<Text style={{ fontWeight: 'bold' }}>Servicios de la nube</Text></Text>
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', padding: 10 }}>
                                    <View style={styles.circleEmpty} />
                                    <View style={styles.circleEmpty} />
                                    <View style={styles.circleFill} />
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.teEncantaraText}>
                        <Text style={[styles.text, { color: colorWhite }]}>
                            TE ENCANTARÁ
                        </Text>
                        <Text style={[styles.text, { color: colorPrimario }]}>
                            TRABAJAR CON
                        </Text>
                        <Text style={[styles.text, { color: colorPrimario }]}>
                            NOSOTROS
                        </Text>
                    </View>
                </View>
                <View style={styles.procesoView}>
                    <View style={styles.processImage}>
                        <Image style={{ flex: 1, height: undefined, width: undefined, }} resizeMode='contain' source={require('../assets/img/process.png')} />
                    </View>
                    <View style={styles.processTextView}>
                        <View style={styles.cajitaProceso}>
                            <View style={{ flex: .9 }}>
                                <Text style={{ color: colorWhite, textAlign: 'center' }}>Contratación remota</Text>
                            </View>
                            <View style={{ flex: .1 }}>
                                <Text style={{ color: colorPrimario, textAlign: 'center' }}>&#10140;</Text>
                            </View>
                        </View>
                        <View style={styles.cajitaProceso}>
                            <View style={{ flex: .9 }}>
                                <Text style={{ color: colorWhite, textAlign: 'center' }}>Entrevista con el área de RH</Text>
                            </View>
                            <View style={{ flex: .1 }}>
                                <Text style={{ color: colorPrimario, textAlign: 'center' }}>&#10140;</Text>
                            </View>
                        </View>
                        <View style={styles.cajitaProceso}>
                            <View style={{ flex: .9 }}>
                                <Text style={{ color: colorWhite, textAlign: 'center' }}>Prueba práctica</Text>
                            </View>
                            <View style={{ flex: .1 }}>
                                <Text style={{ color: colorPrimario, textAlign: 'center' }}>&#10140;</Text>
                            </View>
                        </View>
                        <View style={styles.cajitaProceso}>
                            <View style={{ flex: .9 }}>
                                <Text style={{ color: colorWhite, textAlign: 'center' }}>Entrevista técnica</Text>
                            </View>
                            <View style={{ flex: .1 }}>
                                <Text style={{ color: colorPrimario, textAlign: 'center' }}></Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollContainer: {
        flex: 1,
    },
    screenView: {
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
        padding: SAFE_AREA_PADDING.paddingTop
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
        height: 300,
        width: SCREEN_WIDTH
    },
    processImage: {
        flex: .7
    },
    processTextView: {
        flex: .3,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    cajitaProceso: {
        flex: .25,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});


