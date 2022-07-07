import React, {useState, useEffect} from 'react';
import { View,
        Text,
        ScrollView,
        TouchableHighlight,}
from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { cssProfile } from './Css.js';
import Vaga from '../../../components/Vagas/Vaga.jsx';
import HeaderInfo from '../../../components/ProfileComponents/HeaderInfo.jsx';
import AppHeader from '../../../components/AppHeader.jsx';
import FloatButton from '../../../components/ProfileComponents/FloatButton.jsx';
import VagaOptions from '../../../components/Vagas/VagaOptions.jsx';

import { empresas } from '../../../../assets/dadosTeste.js'

export function ProfileVagas({navigation, route}) {

    //dados para teste, será substituido por dados do banco
    const empresa = empresas[0];
    if (route.params) {
        const empresa = route.params.empresa;
    }

    const [vagasOptionsShown, setVagasOptionsShown] = useState(false);
    const [selectedVaga, setSelectedVaga] = useState(null);

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
                style={cssProfile.menuButton}>
                    <Text style={cssProfile.menuButtonTextActive}>Vagas</Text>
                </TouchableHighlight>

                <TouchableHighlight
                activeOpacity={0.8}
                underlayColor="#18181f"
                onPress={() => navigation.navigate('Profile', {empresa: empresa})}
                style={cssProfile.menuButton}>
                    <Text style={cssProfile.menuButtonTextInactive}>Perfil</Text>
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

                {empresa.vagas.map((vaga) => {
                    // WARNING: each child in a list should have a unique key prop.
                    // Não consegui resolver ainda
                    return (
                        <Vaga
                        key={vaga.id}
                        title={vaga.nome}
                        areas={vaga.areas}
                        salary={vaga.salario}
                        openOptions={() => {
                            setVagasOptionsShown(true)
                            setSelectedVaga(vaga.id)
                        }}
                        />
                    )
                })}

            </ScrollView>

            {/* Botão de criar nova vaga */}
            <FloatButton
            buttonType='create'
            onPress={() => navigation.navigate('CreateVaga', {empresa: empresa})}
            />

            {/* Botões de opção da vaga */}
            {vagasOptionsShown && (
            <VagaOptions
            title={'Opções da Vaga'}
            close={() => setVagasOptionsShown(false)}
            vagaID={selectedVaga}
            />
            )}

        </View>
    );
}

export default ProfileVagas;
