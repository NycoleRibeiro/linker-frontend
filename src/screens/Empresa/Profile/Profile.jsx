import React, {useState, useEffect} from 'react';
import { View,
        Text,
        ScrollView,
        TouchableHighlight,
        Image,}
from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { cssProfile } from './Css.js';
import Vaga from '../../../components/Vagas/Vaga.jsx';
import HeaderInfo from '../../../components/ProfileComponents/HeaderInfo.jsx';

import { empresas } from '../../../../assets/dadosTeste.js'

export function Profile({navigation, route}) {

    //dados para teste, será substituido por dados do banco
    const empresa = empresas[0];
    if (route.params) {
        const empresa = route.params.empresa;
    }

    return (
        <View style={cssProfile.container}>
            <View style={cssProfile.header}>
                <Image
                source={require('../../../../assets/img/headerLogo.png')}
                style={{
                    width: '100%',
                    height: '100%',
                }} />
            </View>

            <HeaderInfo
            profileImage={empresa.imagens[0]}
            profileName={empresa.nome}
            profileBio={empresa.bio} />


            <View style={cssProfile.menuButtons}>
                <TouchableHighlight
                style={cssProfile.menuButton}>
                    <Text style={cssProfile.menuButtonTextVagas}>Vagas</Text>
                </TouchableHighlight>

                <TouchableHighlight
                activeOpacity={0.8}
                underlayColor="#18181f"
                onPress={() => navigation.navigate('EditProfile', {empresa: empresa})}
                style={cssProfile.menuButton}>
                    <Text style={cssProfile.menuButtonTextEdit}>Editar Perfil</Text>
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

            {/* Botão de criar nova vaga */}
            <TouchableHighlight style={cssProfile.buttonCriarVaga}>
                <FontAwesome5
                style={cssProfile.buttonCriarVagaText}
                name="plus" />
            </TouchableHighlight>

        </View>
    );
}

export default Profile;
