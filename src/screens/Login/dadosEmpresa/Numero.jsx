import React, { useState } from 'react';
import { View,
        Text,
        ScrollView, }
from 'react-native';

import { css } from './Css.js';
import ContinuarButton from '../../../components/Button/ContinuarButton';
import ProgressBar from '../../../components/Input/ProgressBar';
import BackButton from '../../../components/Button/BackButton';
import PhoneInput from "react-native-phone-number-input";
import ErrorMessage from '../../../components/ErrorMessage';


function Numero({navigation, route}) {
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [errorMessage, setErrorMessage] = useState(false);

    const data = route.params;

    function handleNumber() {
        if (formattedValue && value) {
            // Insere o numero no objeto data e vai para a próxima tela
            data.numero = formattedValue;
            navigation.navigate('Fotos', data)
        } else {
            // Se o usuário não preencheu o campo, mostra o ErrorMessage
            setErrorMessage(true);
        }
    }

    return (
        <View style={css.container}>
            <ProgressBar percent="40%"/>
            <ScrollView>
                <BackButton voltar={() => navigation.goBack()}/>
                <Text style={css.h1}>
                    Número {'\n'}
                    da Empresa
                </Text>
                <PhoneInput
                defaultCode="BR"
                layout="second"
                placeholder="DDD + Número"
                withDarkTheme
                onChangeText={(text) => {
                    setValue(text);
                }}
                onChangeFormattedText={(text) => {
                    setFormattedValue(text);
                }}
                containerStyle={{
                    backgroundColor: '#18181b',
                    marginLeft: 40,
                    marginTop: '30%',
                    height: 50,
                    width: '80%',
                }}
                textContainerStyle={{
                    backgroundColor: '#18181b',
                    paddingLeft: 10,
                    marginLeft: 10,
                    borderWidth: 1,
                    borderBottomColor: '#FD2B7A',
                    borderTopColor: '#18181b',
                    borderLeftColor: '#18181b',
                    borderRightColor: '#18181b',
                }}
                textInputStyle={{
                    fontFamily: 'Inter_400Regular',
                    color: '#f4f4f5',
                }}
                codeTextStyle={{
                    color: '#f4f4f5',
                }}
                textInputProps={{
                    placeholderTextColor: '#A1A1AA',
                }}
                countryPickerButtonStyle={{
                    backgroundColor: '#1C1C20',
                    borderRadius: 20,
                }}
                />
            </ScrollView>

            {/* Error message, só aparece se o usuário tentar continuar sem os campos obrigatórios */}
            {errorMessage &&
            <ErrorMessage message="Digite um número para continuar"/>}

            <ContinuarButton
                onPress={handleNumber}
            />
        </View>
    );
}

export default Numero;

