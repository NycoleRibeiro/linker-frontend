import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';

import { css } from './Css.js';
import ContinuarButton from '../../../components/Button/ContinuarButton';
import ProgressBar from '../../../components/Input/ProgressBar';
import BackButton from '../../../components/Button/BackButton';

import AsyncStorage from '@react-native-async-storage/async-storage';

function Fotos({ navigation }) {

    const [foto, setFoto] = useState("");


    useEffect(() => {
        AsyncStorage.getItem("user").then(user => JSON.parse(user))
            .then(user => {
                setFoto(user.picture);
            });
    }, []);



    return (
        <View style={css.container}>
            <ProgressBar percent="60%" />
            <BackButton voltar={() => navigation.goBack()} />
            <Text style={css.h1}>
                Adicionar {'\n'}
                Fotos
            </Text>

            <Image
                source={{
                    uri: foto
                }}
                style={{ width: 200, height: 200, borderRadius: 400 / 2 }}
            />



            <ContinuarButton onPress={() => navigation.navigate('Sobre')}
            />
        </View>
    );
}

export default Fotos;
