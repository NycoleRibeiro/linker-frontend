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
import FilteredVagas from '../../../components/Vagas/FilteredVagas'


export function Explore() {

    const interesses = ['Front-end', 'Desenvolvimento Web', 'Gestão de Projetos', 'Fullstack', 'Big Data', 'Ciência de Dados', 'Banco de Dados', 'Back-end', 'Business Intelligence', 'Mobile', 'Cloud Computing', 'Segurança da Informação']

    const [currentCategory, setCurrentCategory] = useState(0);
    const [showVagas, setShowVagas] = useState(false);

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
            onPress={() => {Linking.openURL(`https://www.rocketseat.com.br/`)}}
            >
                <Image
                source={require('../../../../assets/img/exploreBgs/01.jpg')}
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
                            onPress={() => {
                                setCurrentCategory(categoria);
                                setShowVagas(true);
                            }}
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
                                colors={['#0b0b0b', '#18181b', '#0b0b0b']}
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

            {showVagas &&
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
                onPress={() => setShowVagas(false)}
                style={{
                    position: 'absolute',
                    zIndex: 2,
                    right: 10,
                    top: 40,
                    backgroundColor: 'green',
                    borderRadius: 15,
                }}>
                    <Text
                    style={{
                        color: '#fff',
                        fontSize: 20,
                        padding: 10,
                        }}>
                            VOLTAR
                    </Text>
                </TouchableHighlight>

                {/* Tela de Vagas Filtradas */}
                <FilteredVagas
                filtro={currentCategory}
                />
            </View>
            }

        </View>
    );
}

export default Explore;
