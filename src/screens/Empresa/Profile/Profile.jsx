import React, {useState, useEffect} from 'react';
import { View,
        Text,
        ScrollView,
        TouchableHighlight,
        Image,}
from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { css } from './Css.js';
import Vaga from '../../../components/Vagas/Vaga.jsx';
import { empresas } from '../../../../assets/dadosTeste.js'

export function Profile() {

    //dados para teste, será substituido por dados do banco
    const empresa = empresas[0];

    return (
        <View style={css.container}>
            <View style={css.header}>
                <Image
                source={require('../../../../assets/img/headerLogo.png')}
                style={{
                    width: '100%',
                    height: '100%',
                }} />
            </View>
            <View style={css.bioContainer}>
                <View style={css.imageContainer}>
                    <Image
                    source={{uri: empresa.imagens[0]}}
                    style={css.profileImage} />
                </View>

                <Text
                numberOfLines={1}
                adjustsFontSizeToFit
                style={css.nomeEmpresa}>
                    {empresa.nome}
                </Text>

                <Text
                numberOfLines={3}
                adjustsFontSizeToFit
                style={css.bioEmpresa}>
                    {empresa.bio}
                </Text>
            </View>
            <View style={css.menuButtons}>
                <TouchableHighlight
                style={css.menuButton}>
                    <Text style={css.menuButtonTextVagas}>Vagas</Text>
                </TouchableHighlight>
                <TouchableHighlight
                activeOpacity={0.8}
                underlayColor="#18181f"
                onPress={() => alert('Pressed!')}
                style={css.menuButton}>
                    <Text style={css.menuButtonTextEdit}>Editar Perfil</Text>
                </TouchableHighlight>
            </View>
            <ScrollView
            overScrollMode='never'
            showsVerticalScrollIndicator
            contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
            }}
            style={{
                width: "100%",
                height: "100%",
                paddingHorizontal: 5}}
            >

                {empresa.vagas.map((vaga) => {
                    return (
                        <Vaga
                        key={vaga.id}
                        title={vaga.nome}
                        areas={vaga.areas}
                        salary={vaga.salario}/>
                    )
                })}

            </ScrollView>
            <TouchableHighlight style={css.buttonCriarVaga}>
                <FontAwesome5
                style={css.buttonCriarVagaText}
                name="plus" />
            </TouchableHighlight>

        </View>
    );
}

export default Profile;
