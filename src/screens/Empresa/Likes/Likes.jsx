import React, {useState, useEffect} from 'react';
import { View,
    Text,
    TouchableHighlight,
    Image,
    ScrollView,}
from 'react-native';
import { css } from './Css.js';

import AppHeader from '../../../components/AppHeader.jsx';
import ContactButtons from '../../../components/ProfileComponents/ContactButtons.jsx';

// Dados teste... remover após implementar banco de dados
import { desenvolvedores } from '../../../../assets/dadosTeste.js'

export function Likes() {
    const [selectedDev, setSelectedDev] = useState('');
    const [showContact, setShowContact] = useState(false);

    return (
        <View style={css.container}>
            <AppHeader
            headerType='image'/>

            <Text style={css.title}>Desenvolvedores que você curtiu</Text>

            <ScrollView style={css.scroll}>
                <View style={css.likedDevs}>
                    {desenvolvedores.map((dev, index) => {
                        return (
                            <TouchableHighlight
                            activeOpacity={0.8}
                            underlayColor="#18181f"
                            onPress={() => {setSelectedDev(dev); setShowContact(true);}}
                            style={{
                                width: "48%",
                                height: 230,
                                backgroundColor: '#000',
                                marginBottom: 15,
                                borderRadius: 15,
                                overflow: 'hidden',
                            }}>
                                <View style={css.likedDev}>
                                    <Image
                                    style={css.devImage}
                                    source={dev.imagens[1] ? {uri: dev.imagens[1]} : {uri: dev.imagens[0]}}/>
                                    <Text style={css.likedDevName}>
                                        {dev.nome}
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        )
                    })}
                </View>
            </ScrollView>

            {showContact && (
                <View
                style={{
                    position: 'absolute',
                    width: '100%',
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingBottom: 10,
                }}>
                    <Text
                    style={{
                        color: '#fff',
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginBottom: 10,
                    }}>
                        {selectedDev.nome}:
                    </Text>
                    <ContactButtons
                    types={['whatsapp', 'email', 'linkedin', 'github']}
                    phone={selectedDev.telefone}
                    email={selectedDev.email}
                    linkedin={selectedDev.linkedin}
                    github={selectedDev.github}/>
                </View>
            )}

        </View>
    );
}

export default Likes;
