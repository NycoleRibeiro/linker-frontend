import React, { useState } from 'react';
import { View,
        Text,
        ScrollView, }
from 'react-native';
import { StyleSheet } from "react-native";

import { css } from './Css.js';
import ContinuarButton from '../../../components/Button/ContinuarButton';
import ProgressBar from '../../../components/Input/ProgressBar';
import BackButton from '../../../components/Button/BackButton';
import { Picker } from '@react-native-picker/picker'
import { Cidades, Estados } from '../../../../assets/cidades-estados'

function Local({navigation}) {
    const states = Estados();
    const [selectedState, setSelectedState] = useState('');

    const cities = Cidades();
    const [selectedCity, setSelectedCity] = useState('');

    var citiesByState = [];
    cities.map(city => {
        if (city.estado === selectedState) {
            citiesByState = city.cidades;
        }})

    function handleLocal(text) {
        console.log("Localização:", selectedCity, "-", selectedState);
        navigation.reset({
            index: 0,
            routes: [{
                name: 'Interesses'
            }]
        })
    }

    return (
        <View style={css.container}>
            <ProgressBar percent="100%"/>
                <ScrollView>
                <BackButton voltar={() => navigation.goBack()}/>
                <Text style={css.h1}>
                    Minha {'\n'}
                    Localização
                </Text>
                <Picker
                style={{
                    marginLeft: 40,
                    marginRight: 40,
                    marginTop: "25%",
                    backgroundColor: '#1c1c20',
                    color: '#fff',
                }}
                mode="dropdown"
                dropdownIconColor="#fff"
                selectedValue={selectedState}
                onValueChange={(itemValue) => setSelectedState(itemValue)}
                >
                    <Picker.Item
                        label="Selecione seu estado"
                        value=""
                        style={{
                            backgroundColor: '#1c1c20',
                            color: '#fff',
                        }} />
                    {states.map(state => (
                        <Picker.Item
                        key={state.value}
                        label={state.label}
                        value={state.value}
                        style={{
                            backgroundColor: '#1c1c20',
                            color: '#fff',
                        }} />
                    ))}
                </Picker>
                <Picker
                style={{
                    marginLeft: 40,
                    marginRight: 40,
                    marginTop: 10,
                    backgroundColor: '#1c1c20',
                    color: '#fff',
                }}
                mode="dropdown"
                dropdownIconColor="#fff"
                selectedValue={selectedCity}
                onValueChange={(itemValue) => setSelectedCity(itemValue)}
                >
                    <Picker.Item
                        label="Selecione sua cidade"
                        value=""
                        style={{
                            backgroundColor: '#1c1c20',
                            color: '#fff',
                        }} />
                    {citiesByState.map(city => (
                        <Picker.Item
                        key={city}
                        label={city}
                        value={city}
                        style={{
                            backgroundColor: '#1c1c20',
                            color: '#fff',
                        }} />
                    ))}
                </Picker>
            </ScrollView>
            <ContinuarButton
                name="CONCLUIR"
                onPress={handleLocal}
            />
        </View>
    );
}

export default Local;
