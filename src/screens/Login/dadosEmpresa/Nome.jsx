import React, { useState } from 'react';
import { View,
    Text,
    ScrollView,
    TextInput,}
from 'react-native';
import { StyleSheet } from "react-native";

import { css } from './Css.js';
import ContinuarButton from '../../../components/Button/ContinuarButton';
import ProgressBar from '../../../components/Input/ProgressBar';


function Nome({navigation}) {
    const [nome, setNome] = React.useState("");

    function handleNome(text) {
        console.log("Nome:",nome);
        navigation.navigate('Numero')
    }

    return (
        <View
        style={css.container}
        enabled={true}>
            <ProgressBar percent="20%"/>
            <ScrollView>
                <Text style={css.h1}>
                    Nome {'\n'}
                    da Empresa
                </Text>

                <TextInput
                    style={style.input}
                    placeholder="Nome Fantasia"
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
            <ContinuarButton
                onPress={handleNome}
                />
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
