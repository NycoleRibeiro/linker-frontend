
import React from 'react';
import { View,
        Text,
        ScrollView, }
from 'react-native';

import { css } from './Css.js';
import ContinuarButton from '../../../components/Button/ContinuarButton';
import ProgressBar from '../../../components/Input/ProgressBar';
import BackButton from '../../../components/Button/BackButton';

function Local({navigation}) {

        return (
            <View style={css.container}>
                <ProgressBar percent="100%"/>
                <ScrollView>
                    <BackButton voltar={() => navigation.goBack()}/>
                    <Text style={css.h1}>
                        Local {'\n'}
                        da Empresa
                    </Text>
                </ScrollView>
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
