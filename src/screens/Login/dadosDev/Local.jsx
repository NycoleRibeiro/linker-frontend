
import React from 'react';
import { View,
    Text, }
from 'react-native';

import { css } from './Css.js';
import ContinuarButton from '../../../components/Button/ContinuarButton';
import ProgressBar from '../../../components/Input/ProgressBar';
import BackButton from '../../../components/Button/BackButton';

function Local({navigation}) {

        return (
            <View style={css.container}>
                <ProgressBar percent="100%"/>
                <BackButton voltar={() => navigation.goBack()}/>
                <Text style={css.h1}>
                    Minha {'\n'}
                    Localização
                </Text>
                <ContinuarButton
                    name="CONCLUIR"
                    //onPress={() => navigation.push('Interesses')}
                    onPress={() => navigation.reset({
                        index: 0,
                        routes: [{
                            name: 'Interesses'
                        }]
                    })}
                />
            </View>
        );
    }

export default Local;