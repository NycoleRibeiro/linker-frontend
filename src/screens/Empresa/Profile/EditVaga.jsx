import React, { useState } from 'react';
import { View,
        Text,
        ScrollView,
        TouchableHighlight,
        StyleSheet,
        Switch,
        Alert,
        } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

import { cssEditProfile, cssCreateVaga } from './Css.js';
import AppHeader from '../../../components/AppHeader.jsx';
import SimpleInput from '../../../components/Input/SimpleInput.jsx';
import TagsInput from '../../../components/Input/TagsInput.jsx';
import Picker from '../../../components/Input/Picker.jsx';
import ContinuarButton from '../../../components/Button/ContinuarButton.jsx';

export default function CreateVaga({ navigation, route }) {

    const vaga = route.params.vaga;

    const [nomeVaga, setNomeVaga] = useState(vaga.nome);
    const [descricaoVaga, setDescricaoVaga] = useState(vaga.descricao);
    const [tipoVaga, setTipoVaga] = useState(vaga.tipoDeVaga);
    const [localizacaoVaga, setLocalizacaoVaga] = useState(vaga.localizacao);
    const [requisitosObrigatorios, setRequisitosObrigatorios] = useState(vaga.requisitosObrigatorios);
    const [requisitosDesejaveis, setRequisitosDesejaveis] = useState(vaga.requisitosDesejaveis);
    const [areas, setAreas] = useState(vaga.areas);
    // lista de areas
    const defaultAreas = ['Front-end', 'Desenvolvimento Web', 'Gestão de Projetos', 'Fullstack', 'Big Data', 'Ciência de Dados', 'Banco de Dados', 'Back-end', 'Business Intelligence', 'Mobile', 'Cloud Computing', 'Segurança da Informação']

    const [beneficios, setBeneficios] = useState(vaga.beneficios);
    const [salarioVaga, setSalarioVaga] = useState(vaga.salario);
    const [salarioNegociavel, setSalarioNegociavel] = useState(vaga.salarioNegociavel);


     // Pega as tags do input de requisitos obrigatorios
     const updateTagsRO = (tags) => {
        setRequisitosObrigatorios(tags);
    }

    // Pega as tags do input de requisitos desejaveis
    const updateTagsRD = (tags) => {
        setRequisitosDesejaveis(tags);
    }

    // Pega o valor do input de areas
    const updateArea = (areas) => {
        setAreas(areas);
    }

    // Passa todos os dados para a próxima tela
    const handleDadosVaga = () => {
        if (nomeVaga === '' || tipoVaga === '' || requisitosObrigatorios.length === 0 || salarioVaga === '') {
            // Se os dados obrigatórios não estiverem preenchidos, retorna um alerta
            Alert.alert('Dados Incompletos', 'Preencha todos os campos obrigatórios marcados com * para continuar');
        } else if (localizacaoVaga === '' && tipoVaga != 'remoto') {
            // Se o tipo de vaga não for remoto, a localização é obrigatória
            Alert.alert('Dados Incompletos', 'Caso a vaga não seja remota, preencha o campo de localização');
        } else {
            // Se os dados obrigatórios estiverem preenchidos, atualiza o banco de dados
            /*ATUALIZAR BANCO DE DADOS AQUI*/
            if (nomeVaga != vaga.nome) {
                // Atualiza o nome da vaga
                console.log('Nome antigo: ' + vaga.nome);
                console.log('Nome novo: ' + nomeVaga);
            } if (descricaoVaga != vaga.descricao) {
                // Atualiza a descrição da vaga
                console.log('Descrição antiga: ' + vaga.descricao);
                console.log('Descrição nova: ' + descricaoVaga);
            } if (tipoVaga != vaga.tipoDeVaga) {
                // Atualiza o tipo de vaga
                console.log('Tipo de vaga antigo: ' + vaga.tipoDeVaga);
                console.log('Tipo de vaga novo: ' + tipoVaga);
            } if (localizacaoVaga != vaga.localizacao) {
                // Atualiza a localização da vaga
                console.log('Localização antiga: ' + vaga.localizacao);
                console.log('Localização nova: ' + localizacaoVaga);
            } if (requisitosObrigatorios != vaga.requisitosObrigatorios) {
                // Atualiza os requisitos obrigatórios da vaga
                console.log('Requisitos obrigatórios antigos: ' + vaga.requisitosObrigatorios);
                console.log('Requisitos obrigatórios novos: ' + requisitosObrigatorios);
            } if (requisitosDesejaveis != vaga.requisitosDesejaveis) {
                // Atualiza os requisitos desejáveis da vaga
                console.log('Requisitos desejáveis antigos: ' + vaga.requisitosDesejaveis);
                console.log('Requisitos desejáveis novos: ' + requisitosDesejaveis);
            } if (areas != vaga.areas) {
                // Atualiza as áreas da vaga
                console.log('Áreas antigas: ' + vaga.areas);
                console.log('Áreas novas: ' + areas);
            } if (beneficios != vaga.beneficios) {
                // Atualiza os benefícios da vaga
                console.log('Benefícios antigos: ' + vaga.beneficios);
                console.log('Benefícios novos: ' + beneficios);
            } if (salarioVaga != vaga.salario) {
                // Atualiza o salário da vaga
                console.log('Salário antigo: ' + vaga.salario);
                console.log('Salário novo: ' + salarioVaga);
            } if (salarioNegociavel != vaga.salarioNegociavel) {
                // Atualiza o salário negociável da vaga
                console.log('Salário negociável antigo: ' + vaga.salarioNegociavel);
                console.log('Salário negociável novo: ' + salarioNegociavel);
            }
            // Redireciona para a tela de perfil
            navigation.navigate('ProfileVagas');
        }

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
                {(tipoVaga != 'remoto' && tipoVaga != '')  &&
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
                    Requisitos desejáveis
                </Text>
                <TagsInput
                tags={requisitosDesejaveis}
                updateTags={updateTagsRD}
                placeholder="Adicione as tags separadas por vírgula"
                />

                {/* Áreas */}
                <Text style={cssEditProfile.title}>
                    Área da Vaga *
                </Text>
                <Picker
                value={areas}
                placeholder="Selecione as áreas da vaga"
                updateValue={updateArea}
                items={defaultAreas}
                />

                {/* Benefícios */}
                <Text style={cssEditProfile.title}>
                    Benefícios
                </Text>
                <SimpleInput
                placeholder="Descreva os benefícios que esta vaga oferece"
                value={beneficios}
                multiline={true}
                numberOfLines={5}
                maxLength={500}
                textAlignVertical="top"
                onChangeText={text => setBeneficios(text)}
                />

                {/* Salário */}
                <Text style={cssEditProfile.title}>
                    Salário *
                </Text>
                <SimpleInput
                placeholder="R$"
                value={salarioVaga}
                keyboardType="number-pad"
                onChangeText={text => setSalarioVaga(text)}
                />

                {/* Salário negociável */}
                <View style={{
                flexDirection: 'row',
                marginHorizontal: 20,
                alignItems: 'center',

                }}>
                    <Switch
                    value={salarioNegociavel}
                    onValueChange={() => setSalarioNegociavel(!salarioNegociavel)}
                    thumbColor="#FD2A7B"
                    trackColor={{true: '#fe4072', false: '#3f3f46'}}
                    />
                    <Text style={{
                        color: '#f4f4f5',
                        fontSize: 13,
                        fontFamily: 'Inter_400Regular',
                    }}>
                    Salário negociável
                    </Text>
                </View>

            </ScrollView>
            <ContinuarButton
                name="Atualizar Vaga"
                onPress={handleDadosVaga}
            />
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
