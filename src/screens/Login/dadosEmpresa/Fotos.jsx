import React from 'react';
import { View,
        Text,
        ScrollView, }
from 'react-native';

import { css } from './Css.js';
import ContinuarButton from '../../../components/Button/ContinuarButton';
import ProgressBar from '../../../components/Input/ProgressBar';
import BackButton from '../../../components/Button/BackButton';

function Fotos({navigation}) {

        return (
            <View style={css.container}>
                <ProgressBar percent="60%"/>
                <ScrollView>
                    <BackButton voltar={() => navigation.goBack()}/>
                    <Text style={css.h1}>
                        Adicionar {'\n'}
                        Fotos
                    </Text>
                </ScrollView>
                <ContinuarButton
                    onPress={() => navigation.navigate('Sobre')}
                />
            </View>
        );
    }

export default Fotos;
