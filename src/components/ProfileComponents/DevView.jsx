import React, {useState} from 'react';
import { View,
        Text,
        ScrollView,
        Image,
        TouchableHighlight,
    }
from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { RFPercentage } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";

import ContactButtons from '../../components/ProfileComponents/ContactButtons.jsx';
import Certificate from '../../components/ProfileComponents/Certificate.jsx';

import { desenvolvedores } from '../../../assets/dadosTeste.js'

//dados para teste, será substituido por dados do banco
const dev = desenvolvedores[0];

//lista de botoes de contato
const contactButtons = ["whatsapp", "email"]
if (dev.linkedin !== "") {
    contactButtons.push("linkedin")
} if (dev.github !== "") {
    contactButtons.push("github")
}

export function DevView(props) {

    // dados teste para exibir perguntas e respontas
    const perguntas = [
        {
            pergunta: "Quais suas maiores qualidades?",
            resposta: "Organização e vontade de aprender"
        },
        {
            pergunta: "Quais suas fraquezas?",
            resposta: "Memória ruim"
        },

    ]

    const dev = props.dev;

    var comprimentoInicial = 30;
    if (props.state == 1) {
        comprimentoInicial = 100;
    }

    const [comprimento, setComprimento] = useState(comprimentoInicial);
    const [screen, setScreen] = useState('curriculo');

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
                source={dev.imagens[1] ? {uri: dev.imagens[1]} : {uri: dev.imagens[0]}}
                style={css.img}/>

                <View style={css.areasTags}>
                    {dev.interesses.map((area, index) => {
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
                    style={css.nomeDev}>
                        {dev.nome}
                    </Text>
                    <Text style={css.vagaInscrita}>Vaga: Desenvolvedor Web</Text>
                    <Text style={css.bio}>{dev.bio}</Text>
                </View>
            </View>

            {/* Botões de 'navegação' entre o currículo e teste */}
            <View style={{
                width: '100%',
                flexDirection: 'row',
            }}>
                <TouchableHighlight
                activeOpacity={0.8}
                underlayColor="#18181f"
                onPress={() => setScreen('curriculo')}
                style={{
                    width: '50%',
                    backgroundColor: '#18181f',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 5,
                }}>
                    <Text
                    style={{
                        color: screen == 'curriculo' ? '#fe4072' : '#A1A1AA',
                        fontSize: RFPercentage(1.5),
                        fontFamily: 'Inter_600SemiBold',
                        textTransform: 'uppercase',
                    }}>
                        Currículo
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight
                activeOpacity={0.8}
                underlayColor="#18181f"
                onPress={() => setScreen('teste')}
                style={{
                    width: '50%',
                    backgroundColor: '#18181f',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 5,
                }}>
                    <Text
                    style={{
                        color: screen == 'teste' ? '#fe4072' : '#A1A1AA',
                        fontSize: RFPercentage(1.5),
                        fontFamily: 'Inter_600SemiBold',
                        textTransform: 'uppercase',
                    }}>
                        Teste
                    </Text>
                </TouchableHighlight>
            </View>

            {/* Currículo */}
            <ScrollView
            overScrollMode='never'
            showsVerticalScrollIndicator
            contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
            }}
            // Se o screen for 'teste', fica display none
            style={screen == 'teste'
            ? {
                display: 'none',
            }
            : {
                width: "100%",
                height: "100%",
                paddingHorizontal: 5
            }}
            >
                <ContactButtons
                types={contactButtons}
                phone={dev.telefone}
                email={dev.email}
                linkedin={dev.linkedin}
                github={dev.github}/>

                {/* Dados Nascimento, Local e Formação */}
                <View style={{
                    width: "100%",
                    marginLeft: 40,
                }}>

                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        marginTop:30,}}>
                        <FontAwesome5 name="birthday-cake" size={20} color="#3f3f46" />
                        <Text style={{color:'#a1a1aa', marginLeft:15}}>
                            {dev.nascimento.mes} de {dev.nascimento.ano}
                        </Text>
                    </View>

                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        marginTop:5,}}>
                        <Ionicons name="md-location-sharp" size={20} color="#3f3f46" />
                        <Text style={{color:'#a1a1aa', marginLeft:13}}>
                            {dev.localizacao}
                        </Text>
                    </View>

                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        marginTop:5,}}>
                        <Ionicons name="school" size={20} color="#3f3f46" />
                        <Text style={{color:'#a1a1aa', marginLeft:13}}>
                            {dev.formacao}
                        </Text>
                    </View>
                </View>

                {/* Hard Skills */}
                {dev.hardSkills.length > 0 &&
                <>
                <Text style={css.title}>Hard Skills</Text>
                <View style={{
                flexDirection: "row",
                flexWrap: "wrap",
                marginHorizontal: 10,
                alignItems: "center",
                justifyContent: "center",
                }}>
                    {dev.hardSkills.map((skill, index) => (
                        <View key={index} style={{
                        backgroundColor: "#27272a",
                        marginRight: 8,
                        marginBottom: 8,
                        paddingHorizontal: 10,
                        borderRadius: 10,
                        }}>
                            <Text style={{
                            color: "#f4f4f5",
                            fontSize: RFPercentage(1.7),
                            fontFamily: 'Inter_400Regular',
                            }}>
                                {skill}
                            </Text>
                        </View>
                    ))}
                </View>
                </>}

                {/* Soft Skills */}
                {dev.softSkills.length > 0 &&
                <>
                <Text style={css.title}>Soft Skills</Text>
                <View style={{
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    alignSelf: "flex-start",
                    marginHorizontal: 20,
                }}>
                    {dev.softSkills.map((skill, index) => (
                        <Text
                        key={index}
                        style={{
                            color: "#A1A1AA",
                            fontSize: RFPercentage(1.8),
                            fontFamily: 'Inter_400Regular'
                        }}
                        >
                            • {skill}
                        </Text>
                    ))}
                </View>
                </>}

                {/* Experiência */}
                {dev.experiencia != '' &&
                <>
                <Text style={css.title}>Experiência</Text>
                <Text style={{
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    alignSelf: "flex-start",
                    marginHorizontal: 20,
                    color: "#A1A1AA",
                    fontSize: RFPercentage(1.8),
                    fontFamily: 'Inter_400Regular'
                }}>
                    {dev.experiencia}
                </Text>
                </>}

                {/* Certificações */}
                {dev.certificacoes.length >= 0 &&
                <>
                <Text style={css.title}>Certificações</Text>

                {/* ScrollView Horizontal */}
                <ScrollView horizontal={true}>
                    {dev.certificacoes.map((cert, index) => (
                        <Certificate
                        key={index}
                        id={cert.id}
                        title={cert.title}
                        image={cert.image}
                        />
                    ))}
                </ScrollView>
                </>
                }

            </ScrollView>

            {/* Teste */}
            <ScrollView
            overScrollMode='never'
            showsVerticalScrollIndicator
            contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
            }}
            // Se o screen for 'curriculo', fica display none
            style={screen == 'curriculo'
            ? {
                display: 'none',
            }
            : {
                width: "100%",
                height: "100%",
                paddingHorizontal: 5
            }}
            >
                {perguntas.map((pergunta, index) => (
                    <View key={index} style={{
                        width: "100%",
                        marginTop:20,
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <Text
                        style={{
                            color:'#fff',
                            fontFamily: 'Inter_600SemiBold',
                            fontSize: RFPercentage(1.8),
                            marginBottom:5,
                        }}>
                            {pergunta.pergunta}
                        </Text>
                        <Text
                        style={{
                            width: "100%",
                            color:'#a1a1aa',
                            fontSize: RFPercentage(1.8),
                            fontFamily: 'Inter_400Regular',
                            backgroundColor: '#18181f',
                            //backgroundColor: 'red',
                            paddingVertical: 10,
                            borderRadius: 10,
                            borderWidth: 0.5,
                            borderColor: '#3f3f46',
                            textAlign: "center",
                        }}>
                            {pergunta.resposta}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

export default DevView;



export const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(28, 28, 32, 0.9)',
        borderRadius: 20,
        marginHorizontal: 10,
        overflow: 'hidden',
    },
    title: {
        width: "100%",
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 5,
        marginBottom: 5,
        fontSize: RFPercentage(2),
        fontFamily: 'Inter_600SemiBold',
        textTransform: 'uppercase',
        textAlign: "center",
        color: '#f4f4f5',
        backgroundColor: '#1c1c20',
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
    nomeDev: {
        fontSize: RFPercentage(2.6),
        fontWeight: 'bold',
        color: '#fff',
        width: '70%',
        flexWrap: 'wrap',
    },
    vagaInscrita: {
        fontSize: RFPercentage(2),
        color: '#FF7556',
        fontWeight: 'bold',
    },
    bio: {
        fontSize: RFPercentage(1.8),
        color: '#A1A1AA',
        marginTop: 15,
    },

});
