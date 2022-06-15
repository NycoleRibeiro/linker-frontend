import React, { useState } from 'react';
import { View,
    Text, }
from 'react-native';

import { css } from './Css.js';
import ContinuarButton from '../../../components/Button/ContinuarButton';
import ProgressBar from '../../../components/Input/ProgressBar';
import BackButton from '../../../components/Button/BackButton';
import PhoneNumber from '../../../components/Input/PhoneNumber';


function Numero({navigation}) {

    return (
        <View style={css.container}>
            <ProgressBar percent="40%"/>
            <BackButton voltar={() => navigation.goBack()}/>
            <Text style={css.h1}>
                Meu {'\n'}
                Número é
            </Text>
            <PhoneNumber/>
            <ContinuarButton
                onPress={() => navigation.navigate('Fotos')}
            />
        </View>
    );
}

export default Numero;
