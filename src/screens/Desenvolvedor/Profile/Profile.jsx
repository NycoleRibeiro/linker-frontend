import React, {useState, useEffect} from 'react';
import { View,
        Text,
        ScrollView,
        TouchableHighlight,}
from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import { css } from './Css.js';
import HeaderInfo from '../../../components/ProfileComponents/HeaderInfo.jsx';
import AppHeader from '../../../components/AppHeader.jsx';
import FloatButton from '../../../components/ProfileComponents/FloatButton.jsx';
import ContactButtons from '../../../components/ProfileComponents/ContactButtons.jsx';
import { RFPercentage } from "react-native-responsive-fontsize";

import { desenvolvedores } from '../../../../assets/dadosTeste.js'

//dados para teste, será substituido por dados do banco
const dev = desenvolvedores[0];

//lista de botoes de contato
const contactButtons = ["whatsapp", "email"]
if (dev.linkedin !== "") {
    contactButtons.push("linkedin")
} if (dev.github !== "") {
    contactButtons.push("github")
}

export function Profile({navigation, route}) {

    //dados para teste, será substituido por dados do banco
    if (route.params) {
        const dev = route.params.dev;
    }

    return (
        <View style={css.container}>

            <AppHeader
            headerType='image'/>

            <HeaderInfo
            profileImage={dev.imagens[0]}
            profileName={dev.nome}
            profileBio={dev.bio} />

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
                phone={dev.telefone}
                email={dev.email}
                linkedin={dev.linkedin}
                github={dev.github}/>

                {/* Dados Nascimento, Local e Formação */}
                <View style={{
                    width: "100%",
                    marginLeft: 40,
                }}>

                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        marginTop:30,}}>
                        <FontAwesome5 name="birthday-cake" size={20} color="#3f3f46" />
                        <Text style={{color:'#a1a1aa', marginLeft:15}}>
                            {dev.nascimento.mes} de {dev.nascimento.ano}
                        </Text>
                    </View>

                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        marginTop:5,}}>
                        <Ionicons name="md-location-sharp" size={20} color="#3f3f46" />
                        <Text style={{color:'#a1a1aa', marginLeft:13}}>
                            {dev.localizacao}
                        </Text>
                    </View>

                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        marginTop:5,}}>
                        <Ionicons name="school" size={20} color="#3f3f46" />
                        <Text style={{color:'#a1a1aa', marginLeft:13}}>
                            {dev.formacao}
                        </Text>
                    </View>
                </View>

                {dev.hardSkills.length > 0 &&
                <>
                <Text style={css.title}>Hard Skills</Text>
                <View style={{
                flexDirection: "row",
                flexWrap: "wrap",
                marginHorizontal: 10,
                alignItems: "center",
                justifyContent: "center",
                }}>
                    {dev.hardSkills.map((skill, index) => (
                        <View key={index} style={{
                        backgroundColor: "#27272a",
                        marginRight: 8,
                        marginBottom: 8,
                        paddingHorizontal: 10,
                        borderRadius: 10,
                        }}>
                            <Text style={{
                            color: "#f4f4f5",
                            fontSize: RFPercentage(1.7),
                            fontFamily: 'Inter_400Regular',
                            }}>
                                {skill}
                            </Text>
                        </View>
                    ))}
                </View>
                </>}

                {dev.softSkills.length > 0 &&
                <>
                <Text style={css.title}>Soft Skills</Text>
                <View style={{
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    alignSelf: "flex-start",
                    marginHorizontal: 20,
                }}>
                    {dev.softSkills.map((skill, index) => (
                        <Text
                        key={index}
                        style={{
                            color: "#A1A1AA",
                            fontSize: RFPercentage(1.8),
                            fontFamily: 'Inter_400Regular'
                        }}
                        >
                            • {skill}
                        </Text>
                    ))}
                </View>
                </>}

                {dev.experiencia != '' &&
                <>
                <Text style={css.title}>Experiência</Text>
                <Text style={{
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    alignSelf: "flex-start",
                    marginHorizontal: 20,
                    color: "#A1A1AA",
                    fontSize: RFPercentage(1.8),
                    fontFamily: 'Inter_400Regular'
                }}>
                    {dev.experiencia}
                </Text>
                </>}

                {dev.certificacoes.length > 0 &&
                <>
                <Text style={css.title}>Certificações</Text>
                </>}


            </ScrollView>

            {/* Botão de editar */}
            <FloatButton
            buttonType='edit'
            onPress={() => navigation.navigate('EditProfile', {dev: dev})}/>

        </View>
    );
}

export default Profile;
