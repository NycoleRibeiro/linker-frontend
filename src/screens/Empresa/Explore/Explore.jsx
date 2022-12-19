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
import FilteredDevs from '../../../components/ProfileComponents/FilteredDevs'


export function Explore() {

    const interesses = ['Front-end', 'Desenvolvimento Web', 'Gestão de Projetos', 'Fullstack', 'Big Data', 'Ciência de Dados', 'Banco de Dados', 'Back-end', 'Business Intelligence', 'Mobile', 'Cloud Computing', 'Segurança da Informação']

    const [currentCategory, setCurrentCategory] = useState(0);
    const [showDevs, setShowDevs] = useState(false);

    return (
        <View style={css.container}>
            <AppHeader
            headerType='image'/>

            {/* Banner divulgando que a empresa pode fazer um anuncio ali, ao clicar redireciona para o email */}
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

            {/* Scroll de botões/lista de interesses */}
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
                                setShowDevs(true);
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

            {/* Mostra os desenvolvedores que tem interesse na categoria selecionada */}
            {showDevs &&
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
                onPress={() => setShowDevs(false)}
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

                {/* Tela de Devs Filtradas */}
                <FilteredDevs
                filtro={currentCategory}
                />
            </View>
            }

        </View>
    );
}

export default Explore;
