import React from 'react';
import { View,
    Text,}
from 'react-native';

import { css } from './Css.js';
import ContinuarButton from '../../../components/Button/ContinuarButton';
import ProgressBar from '../../../components/Input/ProgressBar';

function Nome({navigation}) {

        return (
            <View style={css.container}>
                <ProgressBar percent="20%"/>
                <Text style={css.h1}>
                    Nome {'\n'}
                    da Empresa
                </Text>
                <ContinuarButton
                    onPress={() => navigation.navigate('Numero')}
                />
            </View>
        );
    }

export default Nome;
