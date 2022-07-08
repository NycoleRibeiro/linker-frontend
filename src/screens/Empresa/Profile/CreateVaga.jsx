import React, { useState } from 'react';
import { View,
        Text,
        ScrollView,
        TouchableHighlight,
        StyleSheet,
        } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

import { cssEditProfile, cssCreateVaga } from './Css.js';
import AppHeader from '../../../components/AppHeader.jsx';
import SimpleInput from '../../../components/Input/SimpleInput.jsx';
import TagsInput from '../../../components/Input/TagsInput.jsx';
import Picker from '../../../components/Input/Picker.jsx';

export default function CreateVaga(props) {
    const [nomeVaga, setNomeVaga] = useState('');
    const [descricaoVaga, setDescricaoVaga] = useState('');
    const [tipoVaga, setTipoVaga] = useState('');
    const [localizacaoVaga, setLocalizacaoVaga] = useState('');
    const [requisitosObrigatorios, setRequisitosObrigatorios] = useState([]);
    const [requisitosDesejaveis, setRequisitosDesejaveis] = useState([]);
    const [area, setArea] = useState('');
    // lista de areas
    const areas = ['Front-end', 'Desenvolvimento Web', 'Gestão de Projetos', 'Fullstack', 'Big Data', 'Ciência de Dados', 'Banco de Dados', 'Back-end', 'Business Intelligence', 'Mobile', 'Cloud Computing', 'Segurança da Informação']

    const [beneficios, setBeneficios] = useState('');
    const [salarioVaga, setSalarioVaga] = useState('');
    const [salarioNegociavel, setSalarioNegociavel] = useState(false);


    // Pega as tags do input de requisitos obrigatorios
    const updateTagsRO = (tags) => {
        setRequisitosObrigatorios(tags);
    }

    // Pega as tags do input de requisitos desejaveis
    const updateTagsRD = (tags) => {
        setRequisitosDesejaveis(tags);
    }

    // Pega o valor do input de area
    const updateArea = (area) => {
        setArea(area);
        console.log(area);
    }

    return (
        <View style={cssEditProfile.container}>
            <AppHeader
            headerType='text'
            headerText='Info da Vaga'/>

            <ScrollView>

                {/* Nome */}
                <Text style={cssEditProfile.title}>
                    Nome *
                </Text>
                <SimpleInput
                placeholder="Digite um título para a vaga"
                value={nomeVaga}
                autoCapitalize="words"
                maxLength={30}
                onChangeText={text => setNomeVaga(text)}
                multiline={false}
                />

                {/* Descrição */}
                <Text style={cssEditProfile.title}>
                    Descrição
                </Text>
                <SimpleInput
                placeholder="Descrição da vaga"
                value={descricaoVaga}
                multiline={true}
                numberOfLines={5}
                maxLength={500}
                textAlignVertical="top"
                onChangeText={text => setDescricaoVaga(text)}
                />

                {/* Tipo de vaga */}
                <Text style={cssEditProfile.title}>
                    Tipo de vaga *
                </Text>
                {/* CheckBox que retorna se o tipo de vaga é presencial, híbrido ou remoto */}
                <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 20,}}>
                    <TouchableHighlight
                    style={tipoVaga === 'presencial' ? cssCheckBox.checkBoxSelected : cssCheckBox.checkBox}
                    onPress={() => setTipoVaga('presencial')}
                    underlayColor="#52525b"
                    >
                        <Text style={cssCheckBox.checkBoxText}>
                            Presencial
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                    style={tipoVaga === 'hibrido' ? cssCheckBox.checkBoxSelected : cssCheckBox.checkBox}
                    onPress={() => setTipoVaga('hibrido')}
                    underlayColor="#52525b"
                    >
                        <Text style={cssCheckBox.checkBoxText}>
                            Híbrido
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                    style={tipoVaga === 'remoto' ? cssCheckBox.checkBoxSelected : cssCheckBox.checkBox}
                    onPress={() => setTipoVaga('remoto')}
                    underlayColor="#52525b"
                    >
                        <Text style={cssCheckBox.checkBoxText}>
                            Remoto
                        </Text>
                    </TouchableHighlight>
                </View>

                {/* Localização */}
                {tipoVaga != 'remoto'  &&
                <>
                <Text style={cssEditProfile.title}>
                    Localização *
                </Text>
                <SimpleInput
                placeholder="Localização da vaga"
                value={localizacaoVaga}
                autoCapitalize="words"
                maxLength={30}
                onChangeText={text => setLocalizacaoVaga(text)}
                multiline={false}
                />
                </>
                }

                {/* Requisitos obrigatórios */}
                <Text style={cssEditProfile.title}>
                    Requisitos obrigatórios *
                </Text>
                <TagsInput
                tags={requisitosObrigatorios}
                updateTags={updateTagsRO}
                placeholder="Adicione as tags separadas por vírgula"
                />

                {/* Requisitos desejáveis */}
                <Text style={cssEditProfile.title}>
                    Requisitos desejáveis *
                </Text>
                <TagsInput
                tags={requisitosDesejaveis}
                updateTags={updateTagsRD}
                placeholder="Adicione as tags separadas por vírgula"
                />

                {/* Área */}
                <Text style={cssEditProfile.title}>
                    Área da Vaga *
                </Text>
                <Picker
                value={area}
                placeholder="Selecione uma área"
                updateValue={updateArea}
                items={areas}
                />





            </ScrollView>
        </View>
    )
}

const cssCheckBox = StyleSheet.create({
    checkBox: {
        backgroundColor: '#3f3f46',
        borderRadius: 10,
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    checkBoxSelected: {
        backgroundColor: '#FD2A7B',
        borderRadius: 10,
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    checkBoxText: {
        fontFamily: 'Inter_600SemiBold',
        fontSize: RFPercentage(1.8),
        color: '#f4f4f5',
    }
});
