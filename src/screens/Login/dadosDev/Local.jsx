import React, { useState } from 'react';
import { View,
        Text,
        ScrollView,
        TextInput, }
from 'react-native';
import { StyleSheet } from "react-native";

import { css } from './Css.js';
import ContinuarButton from '../../../components/Button/ContinuarButton';
import ProgressBar from '../../../components/Input/ProgressBar';
import BackButton from '../../../components/Button/BackButton';
import ErrorMessage from '../../../components/ErrorMessage';

function Local({navigation, route}) {
    const [state, setState] = useState('');
    const [city, setCity] = React.useState("");

    const [errorMessage, setErrorMessage] = useState(false);

    const data = route.params;

    function handleLocal(text) {
        if (state && city) {
            // Insere a localização no data e vai para a próxima tela
            data.local = {
                cidade: city,
                estado: state,
            };
            navigation.reset({
                index: 0,
                routes: [{
                    name: 'Interesses',
                    data: data
                }]
            })
        }
        else {
            // Se o usuário não preencheu os campos, mostra o ErrorMessage
            setErrorMessage(true);
        }
    }

    return (
        <View style={css.container}>
            <ProgressBar percent="100%"/>
            <ScrollView>
                <BackButton voltar={() => navigation.goBack()}/>
                <Text style={css.h1}>
                    Minha {'\n'}
                    Localização
                </Text>

                <View style={{marginTop: "30%"}}>
                    <TextInput
                        style={style.input}
                        placeholder="Estado"
                        placeholderTextColor="#A1A1AA"
                        selectionColor="#f4f4f5"
                        keyboardType="default"
                        autoCapitalize="words"
                        onChangeText={(text) => {
                            setState(text);
                        }}
                    />
                    <TextInput
                        style={style.input}
                        placeholder="Cidade"
                        placeholderTextColor="#A1A1AA"
                        selectionColor="#f4f4f5"
                        keyboardType="default"
                        autoCapitalize="words"
                        onChangeText={(text) => {
                            setCity(text);
                        }}
                    />
                </View>
            </ScrollView>

            {/* Error message, só aparece se o usuário tentar continuar sem os campos obrigatórios */}
            {errorMessage &&
            <ErrorMessage message="Você precisa escrever sua cidade e estado"/>}

            <ContinuarButton
                name="CONCLUIR"
                onPress={handleLocal}
            />
        </View>
    );
}

export default Local;

const style = StyleSheet.create({
    input: {
        width: '80%',
        borderWidth: 1,
        paddingLeft: 5,
        marginRight: 40,
        marginLeft: 40,
        marginBottom: 50,
        borderBottomColor: '#FD2B7A',
        borderTopColor: '#18181b',
        borderLeftColor: '#18181b',
        borderRightColor: '#18181b',
        fontFamily: 'Inter_400Regular',
        fontSize: 20,
        color: '#f4f4f5',
      },
});
