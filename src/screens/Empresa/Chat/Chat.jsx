import React, {useState, useEffect} from 'react';
import { View,
    Text,
    TouchableHighlight,
    Image,
    ScrollView,}
from 'react-native';
import { css } from './Css.js';

// Dados teste... remover após implementar banco de dados
import { empresas } from '../../../../assets/dadosTeste.js'
import { desenvolvedores } from '../../../../assets/dadosTeste.js'

import AppHeader from '../../../components/AppHeader.jsx';
import ContactButtons from '../../../components/ProfileComponents/ContactButtons.jsx';
import DevView from '../../../components/ProfileComponents/DevView'

export function Chat() {
    //dados para teste, será substituido por dados do banco
    const devs = desenvolvedores;
    const chats = [devs[0], devs[1], devs[2]];
    const [currentChat, setCurrentChat] = useState(0);
    const [showContact, setShowContact] = useState(false);

    return (
        <View style={css.container}>
            <AppHeader
            headerType='image'/>

            {/* Lista dos devs aprovados */}
            <ScrollView style={{width: "100%", marginTop: 20,}}>
                {chats.map((dev, index) => {
                    return (
                        <TouchableHighlight
                        activeOpacity={0.8}
                        underlayColor="#18181f"
                        onPress={() => {
                            setCurrentChat(dev);
                            setShowContact(true);
                        }}
                        style={{
                            height: 80,
                            backgroundColor: '#1c1c20',
                            marginBottom: 5,
                            marginHorizontal: 15,
                            borderRadius: 15,
                            overflow: 'hidden',
                        }}>
                            <View style={css.devAprovado}>
                                <View style={css.imgDev}>
                                    <Image
                                    style={css.devImage}
                                    source={{uri: dev.imagens[0]}}
                                    />
                                </View>
                                <View style={css.dadosVaga}>
                                    {/* Nome do dev */}
                                    <Text style={css.title}> {dev.nome} </Text>
                                    {/* Vaga a qual o desenvolvedor se candidatou */}
                                    <Text style={css.subtitle}> Desenvolvedor(a) Web </Text>
                                </View>

                            </View>
                        </TouchableHighlight>
                    )
                }
                )}
            </ScrollView>

            {/* Quando a empresa clicar no dev aprovado, mostra o currículo do mesmo */}
            {showContact &&
                <View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#18181b',
                    zIndex: 1,
                }}>
                    {/*Botão de Voltar / Fechar curriculo */}
                    <TouchableHighlight
                    activeOpacity={0.8}
                    underlayColor="#18181f"
                    onPress={() => setShowContact(false)}
                    style={{
                        width: '30%',
                        zIndex: 2,
                        paddingLeft: 20,
                        paddingTop: 20,
                        paddingRight: 20,
                        paddingBottom: 5,
                        //backgroundColor: 'red',
                    }}>
                        <Text style={{color: '#fff', fontSize: 20}}>VOLTAR</Text>
                    </TouchableHighlight>

                    <DevView
                    dev={currentChat}
                    />
                </View>
            }

        </View>
    );
}

export default Chat;
