import React from 'react';
import { View,
        Text,
        ScrollView, }
from 'react-native';

import { css } from './Css.js';
import ContinuarButton from '../../../components/Button/ContinuarButton';
import ProgressBar from '../../../components/Input/ProgressBar';
import BackButton from '../../../components/Button/BackButton';

function Sobre({navigation}) {

        return (
            <View style={css.container}>
                <ProgressBar percent="80%"/>
                <ScrollView>
                    <BackButton voltar={() => navigation.goBack()}/>
                    <Text style={css.h1}>
                        Sobre {'\n'}
                        a Empresa
                    </Text>
                </ScrollView>
                <ContinuarButton
                    onPress={() => navigation.navigate('Local')}
                />
            </View>
        );
    }

export default Sobre;
