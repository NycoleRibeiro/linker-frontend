import React from 'react';
import { View,
    Text, }
from 'react-native';

import { css } from './Css.js';
import ContinuarButton from '../../../components/Button/ContinuarButton';
import ProgressBar from '../../../components/Input/ProgressBar';

function Sobre({navigation}) {

        return (
            <View style={css.container}>
                <ProgressBar percent="80%"/>
                <Text style={css.h1}>
                    Sobre {'\n'}
                    a Empresa
                </Text>
                <ContinuarButton
                    onPress={() => navigation.navigate('Local')}
                />
            </View>
        );
    }

export default Sobre;
