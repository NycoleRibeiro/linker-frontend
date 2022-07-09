import React, { useState } from 'react';
import { View,
        Text,
        ScrollView,
        TouchableHighlight,
        StyleSheet,
        Switch,
        Alert,
        } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

import { cssEditProfile, cssCreateVaga } from './Css.js';
import AppHeader from '../../../components/AppHeader.jsx';
import VagaView from '../../../components/Vagas/VagaView.jsx';

export default function VagaDetails({ navigation, route }) {

    const vaga = route.params.vaga;
    const empresa = route.params.empresa;

    return (
        <View style={cssEditProfile.container}>
            <AppHeader
            headerType='image'/>

            <VagaView
            vaga={vaga}
            empresa={empresa}/>

        </View>
    )
}

const cssCheckBox = StyleSheet.create({
    checkBox: {
        backgroundColor: '#3f3f46',
        borderRadius: 10,
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    checkBoxSelected: {
        backgroundColor: '#FD2A7B',
        borderRadius: 10,
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    checkBoxText: {
        fontFamily: 'Inter_600SemiBold',
        fontSize: RFPercentage(1.8),
        color: '#f4f4f5',
    }
});
