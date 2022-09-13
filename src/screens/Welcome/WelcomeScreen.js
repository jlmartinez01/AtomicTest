import { useNavigation } from "@react-navigation/native";
import React, { useMemo, useRef, useState } from "react";
import { View, StyleSheet, Image, ScrollView, Text, TouchableOpacity } from "react-native";
import Footer from "../../components/footer";
import { colorCuarto, colorPrimario, colorTercero, colorWhite } from "../../values/colors";
import { SAFE_AREA_PADDING, SCREEN_HEIGHT, SCREEN_WIDTH } from "../../values/constants";
import { styles } from "../../values/systemStyles";

export default function WelcomeScreen() {
    const navigation = useNavigation()
    const [screen2Y, setScreen2Y] = useState(0)

    const refScroll = useRef(ScrollView)

    const saberMasHandler = () => {
        refScroll.current.scrollTo({
            x: 0,
            y: screen2Y,
            animated: true,
        });
    }

    const bePartHandler = () => {
        navigation.navigate('Form')
    }


    return (
        <View style={styles.container}>
            <Image style={{ flex: 1, position: 'absolute', height: SCREEN_HEIGHT, width: SCREEN_WIDTH }} resizeMode='cover' source={require('../../assets/img/Background2.png')} />
            <ScrollView showsVerticalScrollIndicator={false} ref={refScroll}>
                <View style={styles.scrollContainer}>
                    <View style={styles.screenView}>
                        <View style={styles.AtomicLogo}>
                            <Image style={{ flex: 1, height: undefined, width: undefined }} resizeMode='contain' source={require('../../assets/img/LogotipoAtomic.png')} />
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
                                <Image style={{ flex: 1, height: undefined, width: undefined }} resizeMode='contain' source={require('../../assets/img/arrowDown.png')} />
                            </View>
                            <Text style={{ color: colorWhite }}>
                                Quiero saber más
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.imageSpaceMan}>
                            <Image style={{ flex: 1, height: undefined, width: undefined, }} resizeMode='contain' source={require('../../assets/img/spaceMan1.png')} />
                        </View>
                        <View style={styles.buttonBePartView}>
                            <TouchableOpacity onPress={bePartHandler} style={styles.buttonBePart}>
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
                            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ flex: 1 }}>
                                <View>
                                    <View style={styles.card}>
                                        <View style={styles.imageCard}>
                                            <Image style={{ flex: 1, height: undefined, width: undefined, }} resizeMode='contain' source={require('../../assets/img/imagina.png')} />
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
                                            <Image style={{ flex: 1, height: undefined, width: undefined, }} resizeMode='contain' source={require('../../assets/img/planets.png')} />
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
                                            <Image style={{ flex: 1, height: undefined, width: undefined, }} resizeMode='contain' source={require('../../assets/img/conquest.png')} />
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
                            <Image style={{ flex: 1, height: undefined, width: undefined, }} resizeMode='contain' source={require('../../assets/img/process.png')} />
                        </View>
                        <View style={styles.processTextView}>
                            <View style={styles.cajitaProceso}>
                                <View style={{ flex: .9 }}>
                                    <Text style={styles.processText}>Contratación remota</Text>
                                </View>
                                <View style={{ flex: .1 }}>
                                    <Text style={[styles.processText,{color:colorPrimario}]}>&#10140;</Text>
                                </View>
                            </View>
                            <View style={styles.cajitaProceso}>
                                <View style={{ flex: .9 }}>
                                    <Text style={styles.processText}>Entrevista con el área de RH</Text>
                                </View>
                                <View style={{ flex: .1 }}>
                                    <Text style={[styles.processText,{color:colorPrimario}]}>&#10140;</Text>
                                </View>
                            </View>
                            <View style={styles.cajitaProceso}>
                                <View style={{ flex: .9 }}>
                                    <Text style={styles.processText}>Prueba práctica</Text>
                                </View>
                                <View style={{ flex: .1 }}>
                                    <Text style={[styles.processText,{color:colorPrimario}]}>&#10140;</Text>
                                </View>
                            </View>
                            <View style={styles.cajitaProceso}>
                                <View style={{ flex: .9 }}>
                                    <Text style={styles.processText}>Entrevista técnica</Text>
                                </View>
                                <View style={{ flex: .1 }}>
                                    <Text style={styles.processText}></Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.buttonBePartView, { marginBottom: 25 }]}>
                        <TouchableOpacity onPress={bePartHandler}  style={styles.buttonBePart}>
                            <Text style={styles.bePartText}>¡Quiero ser parte!</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.textViewDesarrolla, { marginBottom: 25 }]}>
                        <Text style={[styles.text, { color: colorWhite }]}>
                            NUESTRO <Text style={{ color: colorPrimario }}>EQUIPO</Text>
                        </Text>
                    </View>
                    <View style={styles.cajaEquipo}>
                        <View style={styles.imageEquipo}>
                            <Image style={{ flex: 1, height: undefined, width: undefined, }} resizeMode='contain' source={require('../../assets/img/equipo.png')} />
                        </View>
                        <View style={styles.textViewEquipo}>
                            <Text style={styles.nameEquipo}>Ramón Gómez</Text>
                            <Text style={styles.namePuesto}>Front-end developer</Text>
                        </View>
                    </View>
                    <View style={styles.cajaEquipo}>
                        <View style={styles.imageEquipo}>
                            <Image style={{ flex: 1, height: undefined, width: undefined, }} resizeMode='contain' source={require('../../assets/img/equipo.png')} />
                        </View>
                        <View style={styles.textViewEquipo}>
                            <Text style={styles.nameEquipo}>Ximena Mejía</Text>
                            <Text style={styles.namePuesto}>UX Designer</Text>
                        </View>
                    </View>
                    <View style={styles.cajaEquipo}>
                        <View style={styles.imageEquipo}>
                            <Image style={{ flex: 1, height: undefined, width: undefined, }} resizeMode='contain' source={require('../../assets/img/equipo.png')} />
                        </View>
                        <View style={styles.textViewEquipo}>
                            <Text style={styles.nameEquipo}>Jaime Domínguez</Text>
                            <Text style={styles.namePuesto}>Back-end developer</Text>
                        </View>
                    </View>
                </View>
                <Footer />
            </ScrollView>
        </View>
    );
}



