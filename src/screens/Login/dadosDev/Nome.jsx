import React, { useState } from 'react';
import { View,
    Text,
    TextInput,
    ScrollView,}
from 'react-native';
import { StyleSheet } from "react-native";

import { css } from './Css.js';
import ContinuarButton from '../../../components/Button/ContinuarButton';
import ProgressBar from '../../../components/Input/ProgressBar';
import ErrorMessage from '../../../components/ErrorMessage';

function Nome({navigation}) {
    const [nome, setNome] = React.useState("");
    const [errorMessage, setErrorMessage] = useState(false);

    // variavel que vai ser passada para todas as telas
    const data = {nome: '', numero: '', fotos: '', sobre: '', local: '', interesses: ''};

    function handleNome() {
        if (nome) {
            // Insere o nome no objeto data e vai para a próxima tela
            data.nome = nome;
            navigation.navigate('Numero', data);
        } else {
            // Se o usuário não preencheu o campo, mostra o ErrorMessage
            setErrorMessage(true);
        }

    }

    return (
        <View
        style={css.container}
        enabled={true}>
            <ProgressBar percent="20%"/>
            <ScrollView>
                <Text style={css.h1}>
                    Meu {'\n'}
                    nome é
                </Text>

                <TextInput
                    style={style.input}
                    placeholder="Nome e Sobrenome"
                    placeholderTextColor="#A1A1AA"
                    selectionColor="#f4f4f5"
                    keyboardType="default"
                    autoCapitalize="words"
                    maxLength={30}
                    onChangeText={(text) => {
                        setNome(text);
                    }}
                />
            </ScrollView>

            {/* Error message, só aparece se o usuário tentar continuar sem os campos obrigatórios */}
            {errorMessage &&
            <ErrorMessage message="Digite seu nome para continuar"/>}

            <ContinuarButton onPress={handleNome}/>
        </View>
    );
}

export default Nome;

const style = StyleSheet.create({
    input: {
        width: '80%',
        borderWidth: 1,
        paddingLeft: 5,
        marginRight: 40,
        marginLeft: 40,
        marginTop: "30%",
        borderBottomColor: '#FD2B7A',
        borderTopColor: '#18181b',
        borderLeftColor: '#18181b',
        borderRightColor: '#18181b',
        fontFamily: 'Inter_400Regular',
        fontSize: 20,
        color: '#f4f4f5',
      },
});
