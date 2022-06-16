import React, { useState } from 'react';
import { View,
        Text,
        ScrollView,
        TextInput, }
from 'react-native';
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { css } from './Css.js';
import ContinuarButton from '../../../components/Button/ContinuarButton';
import ProgressBar from '../../../components/Input/ProgressBar';
import BackButton from '../../../components/Button/BackButton';

function Sobre({navigation}) {
    const [description, setDescription] = React.useState("");
    const [linkSite, setLinkSite] = React.useState("");

    function handleAbout(text) {
        console.log("Descrição:", description);
        console.log("LinkSite:", linkSite);

        navigation.navigate('Local')
    }

    return (
        <View style={css.container}>
            <ProgressBar percent="80%"/>
            <ScrollView>
                <BackButton voltar={() => navigation.goBack()}/>
                <Text style={css.h1}>
                    Sobre {'\n'}
                    a Empresa
                </Text>
                {/* INPUT DESCRIPTION */}
                <View style={{
                    width: '100%',
                    height: 90,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 40,
                    marginLeft: 30,
                    marginTop: "25%",
                    }}>
                    <TextInput
                        style={style.inputArea}
                        placeholder="|Breve descrição da empresa"
                        placeholderTextColor="#A1A1AA"
                        selectionColor="#f4f4f5"
                        keyboardType="default"
                        autoCorrect={false}
                        multiline={true}
                        numberOfLines={3}
                        textAlignVertical="top"
                        maxLength={85}
                        onChangeText={(text) => {
                            setDescription(text);
                        }}
                    />
                </View>

                {/* INPUT SITE EMPRESA */}
                <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 50,
                marginRight: 40,
                marginLeft: 40,
                marginTop: "10%",
                }}>
                    <MaterialCommunityIcons
                        style={style.icon}
                        name="link-variant"
                        size={30}
                        color="#52525B" />
                    <TextInput
                        style={style.input}
                        placeholder="Link do Site"
                        placeholderTextColor="#A1A1AA"
                        selectionColor="#f4f4f5"
                        keyboardType="url"
                        autoCapitalize="none"
                        autoCorrect={false}
                        maxLength={30}
                        onChangeText={(text) => {
                            setLinkSite(text);
                        }}
                    />
                </View>
            </ScrollView>
            <ContinuarButton
                onPress={handleAbout}
            />
        </View>
    );
}

export default Sobre;

const style = StyleSheet.create({
    inputArea: {
        width: '80%',
        height: '100%',
        padding: 10,
        marginLeft: 10,
        borderRadius: 15,
        backgroundColor: '#1C1C20',
        fontFamily: 'Inter_400Regular',
        fontSize: 18,
        color: '#A1A1AA',
    },
    icon: {
        width: '10%',
    },
    input: {
        width: '88%',
        borderWidth: 1,
        paddingLeft: 5,
        marginRight: 10,
        marginLeft: "2%",
        borderBottomColor: '#FD2B7A',
        borderTopColor: '#18181b',
        borderLeftColor: '#18181b',
        borderRightColor: '#18181b',
        fontFamily: 'Inter_400Regular',
        fontSize: 18,
        color: '#f4f4f5',
    },
});
