import React from 'react';
import { View,
    Text,
    ScrollView,}
from 'react-native';

import { css } from './Css.js';
import ContinuarButton from '../../../components/Button/ContinuarButton';
import ProgressBar from '../../../components/Input/ProgressBar';
import InputText from '../../../components/Input/InputText';


function Nome({navigation}) {
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
                <InputText
                    placeholder="Nome e Sobrenome"
                    margintop="30%"/>
            </ScrollView>
            <ContinuarButton
                onPress={() => navigation.navigate('Numero')}
                />
        </View>
    );
}

export default Nome;
