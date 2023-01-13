import React, {useState, useEffect} from 'react';
import { View,
        Text,
        ScrollView,
        TouchableHighlight,
        Linking,}
from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { cssProfile } from './Css.js';
import HeaderInfo from '../../../components/ProfileComponents/HeaderInfo.jsx';
import AppHeader from '../../../components/AppHeader.jsx';
import FloatButton from '../../../components/ProfileComponents/FloatButton.jsx';
import ContactButtons from '../../../components/ProfileComponents/ContactButtons.jsx';


import { empresas } from '../../../../assets/dadosTeste.js'

//dados para teste, será substituido por dados do banco
const empresa = empresas[0];

//lista de botoes de contato
const contactButtons = ["whatsapp", "email"]
if (empresa.site !== "") {
    contactButtons.push("site")
}

export function Profile({navigation, route}) {

    //dados para teste, será substituido por dados do banco
    if (route.params) {
        const empresa = route.params.empresa;
    }

    return (
        <View style={cssProfile.container}>

            <AppHeader
            headerType='image'/>

            <HeaderInfo
            profileImage={empresa.imagens[0]}
            profileName={empresa.nome}
            profileBio={empresa.bio} />


            <View style={cssProfile.menuButtons}>
                <TouchableHighlight
                activeOpacity={0.8}
                underlayColor="#18181f"
                onPress={() => navigation.navigate('ProfileVagas', {empresa: empresa})}
                style={cssProfile.menuButton}>
                    <Text style={cssProfile.menuButtonTextInactive}>Vagas</Text>
                </TouchableHighlight>

                <TouchableHighlight
                style={cssProfile.menuButton}>
                    <Text style={cssProfile.menuButtonTextActive}>Perfil</Text>
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
                <ContactButtons
                types={contactButtons}
                phone={empresa.telefone}
                email={empresa.email}
                site={empresa.site}/>

                <View style={{width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop:18}}>
                    <Ionicons name="md-location-sharp" size={20} color="#3f3f46" />
                    <Text style={{color:'#a1a1aa', marginLeft:5}}>
                        {empresa.localizacao}
                    </Text>
                </View>

            </ScrollView>

            {/*Botão de Sugestões/Dúvidas/Denuncias */}
            <TouchableHighlight
            activeOpacity={0.8}
            underlayColor="#18181f"
            onPress={() => {Linking.openURL(`mailto:suportelinker@gmail.com?subject=Digite aqui uma das opções (Sugestão, Dúvida ou Denúncia)&body=Digite aqui sua sugestão, dúvida ou denúncia. Em caso de denúncias, envie o print do problema em anexo. Retornaremos o mais breve possível.`)}}
            style={{
                position: 'absolute',
                zIndex: 2,
                right: 20,
                top: 40,
                borderRadius: 15,
            }}>
                <Ionicons name="information-circle-outline" size={24} color="white" />
            </TouchableHighlight>

            {/* Botão de editar */}
            <FloatButton
            buttonType='edit'
            onPress={() => navigation.navigate('EditProfile', {empresa: empresa})}/>

        </View>
    );
}

export default Profile;
