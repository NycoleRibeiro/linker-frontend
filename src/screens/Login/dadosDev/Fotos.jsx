import React from 'react';
import { View,
    Text, }
from 'react-native';

import { css } from './Css.js';
import ContinuarButton from '../../../components/Button/ContinuarButton';
import ProgressBar from '../../../components/Input/ProgressBar';
import BackButton from '../../../components/Button/BackButton';


function Fotos({navigation}) {

        return (
            <View style={css.container}>
                <ProgressBar percent="60%"/>
                <BackButton voltar={() => navigation.goBack()}/>
                <Text style={css.h1}>
                    Adicionar {'\n'}
                    Fotos
                </Text>
                <ContinuarButton
                    onPress={() => navigation.navigate('Sobre')}
                />
            </View>
        );
    }

export default Fotos;
