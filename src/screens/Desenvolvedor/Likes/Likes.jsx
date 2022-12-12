import React, {useState, useEffect} from 'react';
import { View,
    Text,
    TouchableHighlight,
    Image,
    ScrollView,}
from 'react-native';
import { css } from './Css.js';

import AppHeader from '../../../components/AppHeader.jsx';
import VagaView from '../../../components/Vagas/VagaView'
import TestView from '../../../components/Vagas/TestView'

// Dados teste... remover após implementar banco de dados
import { empresas } from '../../../../assets/dadosTeste.js'
import { desenvolvedores } from '../../../../assets/dadosTeste.js'

export function Likes() {
    //dados para teste, será substituido por dados do banco
    const empresa = empresas[0];
    // Requisitos do desenvolvedor (requisitos em comum com os pedidos na vaga ficarão de outra cor)
    const req2Match = desenvolvedores[0].hardSkills


    const pendentTests = [empresa.vagas[0], empresa.vagas[1]]
    const completedTests = [empresa.vagas[2], empresa.vagas[3], empresa.vagas[4]]
    const [currentVaga, setCurrentVaga] = useState(0);
    const [showTest, setShowTest] = useState(false);
    const [showVaga, setShowVaga] = useState(false);

    return (
        <View style={css.container}>
            <AppHeader
            headerType='image'/>

            <ScrollView style={css.scroll}>
                <View style={css.likedVagas}>

                    {/* Vagas cujo o teste não foi feito, ao clicar mostra o teste */}
                    <Text style={css.title}>Vagas com teste pendente</Text>
                    {pendentTests.map((vaga, index) => {
                        return (
                            <TouchableHighlight
                            key={index}
                            activeOpacity={0.8}
                            underlayColor="#18181f"
                            onPress={() => { setCurrentVaga(vaga); setShowTest(true); }}
                            style={{
                                width: "48%",
                                height: 230,
                                backgroundColor: '#000',
                                marginBottom: 15,
                                borderRadius: 15,
                                overflow: 'hidden',
                            }}>
                                <View style={css.likedVaga}>
                                    <Image
                                    style={css.vagaImage}
                                    source={empresa.imagens[1] ? {uri: empresa.imagens[1]} : {uri: empresa.imagens[0]}}/>
                                    <Text style={css.likedVagaName}>
                                        {vaga.nome}
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        )
                    })}

                    {/* Vagas cujo o teste já foi realizado, ao clicar mostra os detalhes da vaga */}
                    <Text style={css.title}>Vagas Curtidas</Text>
                    {completedTests.map((vaga, index) => {
                        return (
                            <TouchableHighlight
                            activeOpacity={0.8}
                            underlayColor="#18181f"
                            onPress={() => { setCurrentVaga(vaga); setShowVaga(true); }}
                            style={{
                                width: "48%",
                                height: 230,
                                backgroundColor: '#000',
                                marginBottom: 15,
                                borderRadius: 15,
                                overflow: 'hidden',
                            }}>
                                <View style={css.likedVaga}>
                                    <Image
                                    style={css.vagaImage}
                                    source={empresa.imagens[1] ? {uri: empresa.imagens[1]} : {uri: empresa.imagens[0]}}/>
                                    <Text style={css.likedVagaName}>
                                        {vaga.nome}
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        )
                    })}
                </View>
            </ScrollView>

            {/* Modal para mostrar o teste */}
            {showTest &&
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
                {/*Botão de Voltar / Fechar */}
                <TouchableHighlight
                activeOpacity={0.8}
                underlayColor="#18181f"
                onPress={() => setShowTest(false)}
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

                <TestView
                perguntasTeste={currentVaga.perguntasTeste}
                setShowTest={setShowTest}/>
            </View>
            }


            {/* Mostrar os detalhes da vaga */}
            {showVaga &&
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
                {/*Botão de Voltar / Fechar */}
                <TouchableHighlight
                activeOpacity={0.8}
                underlayColor="#18181f"
                onPress={() => setShowVaga(false)}
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

                <VagaView
                vaga={currentVaga}
                empresa={empresa}
                state={0}
                requisitos={req2Match}
                />
            </View>
            }

        </View>
    );
}

export default Likes;
