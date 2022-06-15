
import React from 'react';
import { View,
    Text, }
from 'react-native';

import { css } from './Css.js';
import ContinuarButton from '../../../components/Button/ContinuarButton';
import ProgressBar from '../../../components/Input/ProgressBar';

function Local({navigation}) {

        return (
            <View style={css.container}>
                <ProgressBar percent="100%"/>
                <Text style={css.h1}>
                    Local {'\n'}
                    da Empresa
                </Text>
                <ContinuarButton
                    name="CONCLUIR"
                    onPress={() => navigation.reset({
                        index: 0,
                        routes: [{
                            name: 'AppEmpresa'
                        }]
                    })}
                />
            </View>
        );
    }

export default Local;
