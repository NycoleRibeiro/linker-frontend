import React, { useState } from 'react';
import { View,
        Text,
        ScrollView,
        Pressable,
    }
from 'react-native';
import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { css } from './Css.js';
import ContinuarButton from '../../../components/Button/ContinuarButton';
import ErrorMessage from '../../../components/ErrorMessage';

function Interesses({navigation, route}) {
    const [errorMessage, setErrorMessage] = useState(false);
    const data = route.data;

    // lista de areas de interesse
    const interesses = ['Front-end', 'Desenvolvimento Web', 'Gestão de Projetos', 'Fullstack', 'Big Data', 'Ciência de Dados', 'Banco de Dados', 'Back-end', 'Business Intelligence', 'Mobile', 'Cloud Computing', 'Segurança da Informação']

    // lista de areas de interesse selecionadas
    const [selectedInterests, setSelectedInteresses] = useState([]);

    // retorna true se o interesse estiver selecionado(na lista de selecionados)
    const isSelected = id => selectedInterests.indexOf(id) !== -1;

    // adiciona ou remove o interesse clicado na lista de selecionados
    function toggleInterest(id) {
        if (isSelected(id)) {
            setSelectedInteresses(selectedInterests.filter(s => s !== id));
        } else {
            setSelectedInteresses([...selectedInterests, id]);
        }
    }

    function handleSelectedInterests() {
        if (selectedInterests.length === 0) {
            // se nenhum interesse estiver selecionado, aparece o ErrorMessage
            setErrorMessage(true);
        } else {
            // insere a lista de interesses selecionados em data
            data.interesses = selectedInterests;
            // aqui o data estará completo (dados opcionais do sobre podem ser uma string vazia)
            // e não poderá ser alterado voltando a tela (apenas no editar usuário)
            console.log(data);
            
            /* ---------------------------------------------------
            ACREDITO QUE SEJA POR AQUI QUE SALVA OS DADOS NO BD
            NÃO SEI FAZER ISSO ENTÃO BOA SORTE PRA QUEM FOR FAZER
            -------------------------------------------------------*/

            // redireciona para página inicial do app
            navigation.reset({
                index: 0,
                routes: [{
                    name: 'AppDesenvolvedor'
                }]
            })
        }
    }

    return (
        <View style={css.container}>
            <ScrollView>
                <Text style={css.h1center}>
                    Selecione as áreas {'\n'}
                    de seu interesse
                </Text>
                <View style={styles.interestsContainer}>
                    {interesses.map((interest) => (
                        <Pressable
                            key={interest}
                            onPress={() => toggleInterest(interest)}
                            activeOpacity={1}
                            style={[styles.interest, isSelected(interest) && styles.interestSelected]}
                        >
                            <Text style={styles.interestText}>{interest}</Text>
                        </Pressable>
                    ))}
                </View>
            </ScrollView>

            {/* Error message, só aparece se o usuário tentar continuar sem os campos obrigatórios */}
            {errorMessage &&
            <ErrorMessage message="Selecione pelo menos uma área"/>}

            <ContinuarButton
                name="Ver Vagas"
                onPress={handleSelectedInterests}
            />
        </View>
    );
}

export default Interesses;


const styles = StyleSheet.create({
    interestsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: "20%",
        marginRight: 20,
        marginLeft: 20,
    },
    interest: {
        marginRight: 10,
        marginBottom: 10,
        backgroundColor: "#27272A",
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    interestSelected: {
        marginRight: 10,
        marginBottom: 10,
        backgroundColor: '#FE4072',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    interestText: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        color: '#fff',
        fontSize: RFPercentage(2.5),
        fontFamily: 'Inter_400Regular',
    }
});
