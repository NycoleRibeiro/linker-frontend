import React from 'react';
import { View,
        Text,
        ScrollView, }
from 'react-native';

import { css } from './Css.js';
import ContinuarButton from '../../../components/Button/ContinuarButton';

function Interesses({navigation}) {

        return (
            <View style={css.container}>
                <ScrollView>
                    <Text style={css.h1center}>
                        Selecione as áreas {'\n'}
                        de seu interesse
                    </Text>
                </ScrollView>
                <ContinuarButton
                    name="Ver Vagas"
                    onPress={() => navigation.reset({
                        index: 0,
                        routes: [{
                            name: 'AppDesenvolvedor'
                        }]
                    })}
                />
            </View>
        );
    }

export default Interesses;
