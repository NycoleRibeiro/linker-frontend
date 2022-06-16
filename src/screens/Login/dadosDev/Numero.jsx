import React, { useState } from 'react';
import { View,
    Text, }
from 'react-native';

import { css } from './Css.js';
import ContinuarButton from '../../../components/Button/ContinuarButton';
import ProgressBar from '../../../components/Input/ProgressBar';
import BackButton from '../../../components/Button/BackButton';
import PhoneInput from "react-native-phone-number-input";


function Numero({navigation}) {
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");

    function handleNumber(text) {
        console.log("Celular:", formattedValue);
        navigation.navigate('Fotos')
    }

    return (
        <View style={css.container}>
            <ProgressBar percent="40%"/>
            <BackButton voltar={() => navigation.goBack()}/>
            <Text style={css.h1}>
                Meu {'\n'}
                Número é
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
            <ContinuarButton
                onPress={handleNumber}
            />
        </View>
    );
}

export default Numero;
