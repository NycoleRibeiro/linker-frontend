import React from 'react';
import { View,
    Text, }
from 'react-native';

import { css } from './Css.js';
import ContinuarButton from '../../../components/Button/ContinuarButton';
import ProgressBar from '../../../components/Input/ProgressBar';

function Numero({navigation}) {

        return (
            <View style={css.container}>
                <ProgressBar percent="40%"/>
                <Text style={css.h1}>
                    Número {'\n'}
                    da Empresa
                </Text>
                <ContinuarButton
                    onPress={() => navigation.navigate('Fotos')}
                />
            </View>
        );
    }

export default Numero;
