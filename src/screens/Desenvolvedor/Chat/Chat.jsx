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

import AppHeader from '../../../components/AppHeader.jsx';
import ContactButtons from '../../../components/ProfileComponents/ContactButtons.jsx';

export function Chat() {
    //dados para teste, será substituido por dados do banco
    const empresa = empresas[0];
    const chats = [empresas[0].vagas[0], empresas[0].vagas[1], empresas[0].vagas[2], empresas[0].vagas[3],];
    const [currentChat, setCurrentChat] = useState(0);
    const [showContact, setShowContact] = useState(false);

    return (
        <View style={css.container}>
            <AppHeader
            headerType='image'/>

            {/* Lista de Vagas das empresas nas quais o teste foi aprovado */}
            <ScrollView style={{width: "100%", marginTop: 20,}}>
                {chats.map((vaga, index) => {
                    return (
                        <TouchableHighlight
                        key={index}
                        activeOpacity={0.8}
                        underlayColor="#18181f"
                        onPress={() => {
                            // ********** AVISO **********
                            // Era pra setar o CurrentChat com a empresa a qual o chat/vaga pertence
                            // pra poder puxar os dados dos contatos dela para exibir no ContactButtons
                            // mas não sei como funciona o banco de dados pra fazer isso, então
                            // fique a vontade pra modificar o que quiser pra fazer funcionar ou
                            // fazer do jeito que fique mais facil
                            setCurrentChat(empresa);
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
                            <View style={css.vagaAprovada}>
                                <View style={css.imgEmpresa}>
                                    <Image
                                    style={css.vagaImage}
                                    source={{uri: empresa.imagens[0]}}/>
                                </View>
                                <View style={css.dadosVaga}>
                                    {/* Nome da vaga */}
                                    <Text style={css.title}> {vaga.nome} </Text>
                                    {/* Empresa a qual a vaga pertence */}
                                    <Text style={css.subtitle}> Google </Text>
                                </View>

                            </View>
                        </TouchableHighlight>
                    )
                }
                )}
            </ScrollView>

            {/* Modal para mostrar o contato da empresa */}
            {showContact &&
                <View
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '20%',
                    bottom: 0,
                    backgroundColor: '#18181b',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text
                    style={{
                    width: "100%",
                    paddingBottom: 20,
                    fontSize: 20,
                    fontFamily: 'Inter_600SemiBold',
                    color: "#fff",
                    textAlign: 'center',
                    }}>
                        Contatos de: {empresa.nome}
                    </Text>
                    <ContactButtons
                    types={["whatsapp", "email"]}
                    phone={empresa.telefone}
                    email={empresa.email}/>
                </View>
            }

        </View>
    );
}

export default Chat;
