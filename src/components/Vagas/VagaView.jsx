import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
} from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";
import { Ionicons } from '@expo/vector-icons';


export default function VagaView(props) {

    const vaga = props.vaga;
    const empresa = props.empresa;

    console.log("Estou sendo montado");

    if (!vaga || !empresa) {
        return <></>;
    }

    var comprimentoInicial = 30;
    if (props.state == 1) {
        comprimentoInicial = 100;
    }

    const [comprimento, setComprimento] = useState(comprimentoInicial);

    const toggleComprimento = () => {
        if (comprimento === 100) {
            setComprimento(30);
        } else {
            setComprimento(100);
        }
    }


    return (
        <View style={css.container}>
            <View
                onStartShouldSetResponder={() => toggleComprimento()}
                style={{
                    width: '100%',
                    height: `${comprimento}%`,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Image
                    source={empresa.imagens[1] ? { uri: empresa.imagens[1] } : { uri: empresa.imagens[0] }}
                    style={css.img} />

                <View style={css.areasTags}>
                    {vaga.areas.map((area, index) => {
                        return (
                            <View key={index} style={css.areaTag}>
                                <Text style={css.areaTagText}>{area}</Text>
                            </View>
                        )
                    })}
                </View>

                <View style={css.mainInfo}>
                    <Text
                        numberOfLines={2}
                        adjustsFontSizeToFit={true}
                        style={css.nomeVaga}>
                        {vaga.nome}
                    </Text>
                    <Text style={css.tipoVaga}>{vaga.tipoDeVaga}</Text>
                    <View style={css.local}>
                        <Ionicons name="md-location-sharp" size={20} color="#A1A1AA" />
                        <Text style={css.nomeEmpresa}>{empresa.nome}  |</Text>
                        <Text style={css.localizacao}>{vaga.localizacao}</Text>
                    </View>
                </View>
            </View>

            <ScrollView
                onStartShouldSetResponder={() => Alert.alert('View Clicked...')}
                style={css.infoContainer}>
                {vaga.descricao != "" &&
                    <Text style={css.infoText}>{vaga.descricao}</Text>}

                <Text style={css.infoTitle}>Requisitos Obrigatórios</Text>
                <View
                    style={css.requisitos}>
                    {vaga.requisitosObrigatorios.map((requisito, index) => {
                        return (
                            // Se o requisito for igual ao requisito do desenvolvedor, a tag ficará de outra cor
                            <View
                                key={index}
                                style={
                                    props.requisitos.map(r => r.toLowerCase()).includes(requisito.toLowerCase())
                                        ? css.requisitoMatch
                                        : css.requisito
                                }>
                                <Text style={css.requisitoText}>{requisito}</Text>
                            </View>
                        )
                    })}
                </View>

                {vaga.requisitosDesejaveis.length > 0 &&
                    <>
                        <Text style={css.infoTitle}>Requisitos Opcionais</Text>
                        <View
                            style={css.requisitos}>
                            {vaga.requisitosDesejaveis.map((requisito, index) => {
                                return (
                                    // Se o requisito for igual ao requisito do desenvolvedor, a tag ficará de outra cor
                                    <View
                                        key={index}
                                        style={
                                            props.requisitos.map(r => r.toLowerCase()).includes(requisito.toLowerCase())
                                                ? css.requisitoMatch
                                                : css.requisito
                                        }>
                                        <Text style={css.requisitoText}>{requisito}</Text>
                                    </View>
                                )
                            })}
                        </View>
                    </>}

                <Text style={css.infoTitle}>Salário</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={css.infoText}>R$ {vaga.salario}</Text>
                    {vaga.salarioNegociavel === true &&
                        <Text style={css.infoText}> | Salário Negociável</Text>}
                </View>

                {vaga.beneficios != '' &&
                    <>
                        <Text style={css.infoTitle}>Benefícios</Text>
                        <Text style={css.infoText}>{vaga.beneficios}</Text>
                    </>}

            </ScrollView>

        </View>
    )
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(28, 28, 32, 0.9)',
        borderRadius: 20,
        marginHorizontal: 10,
        overflow: 'hidden',
    },
    imgContainer: {
        width: '100%',
        //height: 130,
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        backgroundColor: 'white'
    },
    areasTags: {
        position: 'absolute',
        flexDirection: 'row',
        flexWrap: 'wrap',
        top: 5,
        left: 5,
    },
    areaTag: {
        backgroundColor: 'rgba(24, 24, 27, 0.8)',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginRight: 5,
    },
    areaTagText: {
        fontSize: RFPercentage(1.8),
        color: '#f4f4f5',
    },
    mainInfo: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'rgba(28, 28, 32, 0.9)',
        padding: 10,
        elevation: 5,
    },
    nomeVaga: {
        fontSize: RFPercentage(2.6),
        fontWeight: 'bold',
        color: '#fff',
        width: '70%',
        flexWrap: 'wrap',
    },
    tipoVaga: {
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 5,
        fontSize: RFPercentage(1.8),
        textTransform: 'uppercase',
        color: '#fb6767',
        textAlign: 'center',
        fontFamily: 'Inter_700Bold',
        borderWidth: 1,
        borderColor: '#FD2B7A',
        borderRadius: 5,
    },
    local: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    nomeEmpresa: {
        fontSize: RFPercentage(1.8),
        color: '#A1A1AA',
        marginLeft: 5,
    },
    localizacao: {
        fontSize: RFPercentage(1.8),
        color: '#A1A1AA',
        marginLeft: 5,
    },

    infoContainer: {
        marginHorizontal: 10,
        marginTop: 2,
    },
    infoText: {
        fontSize: RFPercentage(1.9),
        fontFamily: 'Inter_400Regular',
        color: '#A1A1AA',
        marginTop: 5,
        marginBottom: 5,
    },
    infoTitle: {
        fontSize: RFPercentage(2.2),
        fontFamily: 'Inter_600SemiBold',
        color: '#fff',
        marginTop: 15,
        marginBottom: 5,
    },

    requisitos: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 5,
    },
    requisito: {
        backgroundColor: '#27272A',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 2,
        marginRight: 5,
        marginBottom: 5,
    },
    requisitoMatch: {
        backgroundColor: '#FE4072',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 2,
        marginRight: 5,
        marginBottom: 5,
    },
    requisitoText: {
        fontSize: RFPercentage(1.8),
        color: '#f4f4f5',
        fontFamily: 'Inter_400Regular',
    },

});
