import React, { useState } from 'react';
import { View,
        Text,
        ScrollView,
        TouchableHighlight,
        StyleSheet,
        Alert,
        } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons';

import { cssEditProfile, cssCreateVaga } from './Css.js';
import AppHeader from '../../../components/AppHeader.jsx';
import SimpleInput from '../../../components/Input/SimpleInput.jsx';
import ContinuarButton from '../../../components/Button/ContinuarButton.jsx';

export default function CreateTeste({ navigation, route }) {
    const [perguntas, setPerguntas] = useState(['']);
    const DadosVaga = route.params;

    const handleVaga = () => {
        if (perguntas.length === 0) {
            // Se não tiver nenhuma pergunta, retorna alerta
            Alert.alert('Dados Incompletos', 'Insira pelo menos uma pergunta');
        } else if (perguntas.some(pergunta => pergunta === '')) {
            // Se alguma pergunta tiver valor vazio, retorna alerta
            Alert.alert('Algum Campo de Pergunta está em Branco', 'Você pode excluir a pergunta ou preencher com um texto');
        } else {
            /* PARTE PARA ENVIAR A VAGA PARA O BD
            cada dado digitado na tela anterior pode ser acessado
            atraves do DadosVaga.nomeDaConst

            Alguns dados são opcionais e podem vir vazios */
            console.log(DadosVaga);
            console.log(perguntas);

            // Redirecionar de volta para o perfil da empresa
            navigation.navigate('ProfileVagas');
        }

    }

    return (
        <View style={cssEditProfile.container}>
            <AppHeader
            headerType='text'
            headerText='Teste da Vaga'/>

            <ScrollView>
                {/* Perguntas */}
                {perguntas.map((pergunta, index) => {
                    return (
                        <>
                        <View style={{
                        backgroundColor: '#1c1c20',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        }}>
                            <Text style={{
                            paddingVertical: 10,
                            paddingHorizontal: 20,
                            fontSize: RFPercentage(2),
                            fontFamily: 'Inter_600SemiBold',
                            textTransform: 'uppercase',
                            color: '#f4f4f5',
                            }}>
                                Pergunta {index + 1}
                            </Text>

                            {/* Excluir pergunta */}
                            <TouchableHighlight
                            style={{
                                paddingRight: 20,
                                paddingVertical: 5,
                            }}
                            onPress={() => {
                                setPerguntas(perguntas.filter((_, i) => i !== index));
                            }
                            }>
                                <Feather name="delete" size={24} color="#52525b" />
                            </TouchableHighlight>


                        </View>

                        <SimpleInput
                        placeholder="Digite a pergunta"
                        value={pergunta}
                        multiline={true}
                        numberOfLines={5}
                        maxLength={500}
                        textAlignVertical="top"
                        onChangeText={text => {
                            setPerguntas(perguntas.map((_, i) => i === index ? text : perguntas[i]));
                        }}
                        />
                        </>
                    )
                })}

                {/* Adicionar Pergunta */}
                <TouchableHighlight
                style={{
                    backgroundColor: '#00aa73',
                    borderRadius: 10,
                    marginHorizontal: 20,
                    marginVertical: 10,
                    borderWidth: 1,
                    borderColor: '#109a29',
                }}
                onPress={() => {
                    setPerguntas([...perguntas, ''])
                }
                }>
                    <Text style={{
                        paddingVertical: 8,
                        color: '#f4f4f5',
                        fontSize: RFPercentage(2),
                        textTransform: 'uppercase',
                        textAlign: 'center',
                        fontFamily: 'Inter_600SemiBold',
                    }}>
                        Adicionar Nova Pergunta
                    </Text>
                </TouchableHighlight>

            </ScrollView>
            <ContinuarButton
                name="Concluir"
                onPress={handleVaga}
            />
        </View>
    )
}

const css = StyleSheet.create({

});
