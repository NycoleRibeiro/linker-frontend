import React, {useState} from 'react';
import { View,
        Text,
        ScrollView,
        TouchableHighlight,
        Alert,}
from 'react-native';

import { cssProfile } from './Css.js';
import Vaga from '../../../components/Vagas/Vaga.jsx';
import HeaderInfo from '../../../components/ProfileComponents/HeaderInfo.jsx';
import AppHeader from '../../../components/AppHeader.jsx';
import FloatButton from '../../../components/ProfileComponents/FloatButton.jsx';
import OptionsModal from '../../../components/ProfileComponents/OptionsModal.jsx';

import { empresas } from '../../../../assets/dadosTeste.js'

export function ProfileVagas({navigation, route}) {

    //dados para teste, será substituido por dados do banco
    const empresa = empresas[0];
    if (route.params) {
        const empresa = route.params.empresa;
    }

    const [OptionsModalShown, setOptionsModalShown] = useState(false);
    const [selectedVaga, setSelectedVaga] = useState(null);


    // Redireciona para a tela de editar vaga
    const editVaga = () => {
        // envia os dados da vaga clicada para a próxima tela
        navigation.navigate('EditVaga', {vaga: selectedVaga});
    }

    // função para excluir vaga
    const deleteVaga = () => {
        Alert.alert(
            'Excluir vaga',
            'Tem certeza que deseja excluir esta vaga?',
            [
                {text: 'Não', style: 'cancel'},
                {text: 'Sim', onPress: () => {
                    // retorna o id da vaga selecionada
                    console.log('vaga excluída: ', selectedVaga.id);

                    /* REMOVER A VAGA COM ID {selectedVaga.id} do banco de dados */

                    // fecha o modal
                    setOptionsModalShown(false);
                }}
            ],
            {cancelable: false}
        );



    }

    // Redireciona para a tela de editar vaga
    const vagaDetails = () => {
        // envia os dados da vaga clicada para a próxima tela
        navigation.navigate('VagaDetails', {vaga: selectedVaga, empresa: empresa});
    }

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

                {empresa.vagas.map((vaga, index) => {
                    // WARNING: each child in a list should have a unique key prop.
                    // Não consegui resolver ainda
                    return (
                        <Vaga
                        key={vaga.id}
                        id={vaga.id}
                        title={vaga.nome}
                        areas={vaga.areas}
                        salary={vaga.salario}
                        openOptions={() => {
                            setOptionsModalShown(true)
                            // Atribui o id da vaga clicada para o estado
                            setSelectedVaga(vaga)
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
            {OptionsModalShown && (
            <OptionsModal
            title={'Opções da Vaga'}
            buttons={['editar', 'excluir', 'detalhes']}
            close={() => setOptionsModalShown(false)}
            onPressEdit={editVaga}
            onPressDelete={deleteVaga}
            onPressDetail={vagaDetails}
            />
            )}

        </View>
    );
}

export default ProfileVagas;
