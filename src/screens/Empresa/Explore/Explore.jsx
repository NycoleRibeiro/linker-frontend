import React, {useState, useEffect} from 'react';
import { View,
    Text,
    TouchableHighlight,
    Image,
    ScrollView,
    Linking,}
from 'react-native';
import { css } from './Css.js';
import { LinearGradient } from 'expo-linear-gradient';

import AppHeader from '../../../components/AppHeader.jsx';
import VagaView from '../../../components/Vagas/VagaView'

// Dados teste... remover após implementar banco de dados
import { empresas } from '../../../../assets/dadosTeste.js'
import { desenvolvedores } from '../../../../assets/dadosTeste.js'

export function Explore() {

    const interesses = ['Front-end', 'Desenvolvimento Web', 'Gestão de Projetos', 'Fullstack', 'Big Data', 'Ciência de Dados', 'Banco de Dados', 'Back-end', 'Business Intelligence', 'Mobile', 'Cloud Computing', 'Segurança da Informação']

    return (
        <View style={css.container}>
            <AppHeader
            headerType='image'/>

            <TouchableHighlight
            style={{
                width: '90%',
                height: 150,
                overflow: 'hidden',
                marginTop: 20,
                marginBottom: 20,
                borderRadius: 15,
            }}
            onPress={() => {Linking.openURL(`mailto:suportelinker@gmail.com?subject=Quero anunciar minha empresa no Linker&body=Gostaria que me enviasse os planos de anúncio para este email`)}}
            >
                <Image
                source={require('../../../../assets/img/exploreBgs/02.png')}
                style={{
                    width: '100%',
                    height: '100%',
                }}/>
            </TouchableHighlight>

            <ScrollView style={css.scroll}>
                <View style={css.categorias}>
                    {interesses.map((categoria, index) => {
                        return (
                            <TouchableHighlight
                            key={index}
                            activeOpacity={0.8}
                            underlayColor="#18181f"
                            onPress={() => { }}
                            style={{
                                width: "48%",
                                height: 100,
                                backgroundColor: '#000',
                                marginBottom: 15,
                                borderRadius: 15,
                                overflow: 'hidden',
                            }}>
                                <LinearGradient
                                style={css.categoria}
                                // versão 1 (Preto)
                                colors={['#000', '#18181b', '#000']}
                                // versão 2 (Cores Linker)
                                //colors={['#FE3E73', '#FB6D59']}
                                //start={{x:0,y:1}}
                                //end={{x:1,y:0}}
                                //locations={[.5,0.8]}
                                >
                                    <Text style={css.categoriaName}>
                                        {categoria}
                                    </Text>
                                </LinearGradient>

                            </TouchableHighlight>
                        )
                    })}

                </View>
            </ScrollView>
        </View>
    );
}

export default Explore;
