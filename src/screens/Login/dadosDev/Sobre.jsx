import React from 'react';
import { View,
        Text,
        ScrollView, }
from 'react-native';

import { css } from './Css.js';
import ContinuarButton from '../../../components/Button/ContinuarButton';
import ProgressBar from '../../../components/Input/ProgressBar';
import BackButton from '../../../components/Button/BackButton';
import InputText from '../../../components/Input/InputText';
import AreaText from '../../../components/Input/AreaText';

function Sobre({navigation}) {

        return (
            <View style={css.container}>
                <ProgressBar percent="80%"/>
                <ScrollView>
                    <BackButton voltar={() => navigation.goBack()}/>
                    <Text style={css.h1}>
                        Sobre {'\n'}
                        mim
                    </Text>
                    <AreaText
                        placeholder="Breve descrição sobre você"/>
                    <InputText
                        margintop="10%"
                        icon="linkedin"
                        placeholder="username do linkedin"/>
                    <InputText
                        margintop="0%"
                        icon="github"
                        placeholder="username do github"/>
                </ScrollView>
                <ContinuarButton
                    onPress={() => navigation.navigate('Local')}
                />
            </View>
        );
    }

export default Sobre;
