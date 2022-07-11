import React, {useState } from 'react';
import { View,
        Text,
        TextInput,
        ScrollView,
        TouchableHighlight,
        Image,
        Alert,}
from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { cssEditProfile } from './Css.js';
import ContinuarButton from '../../../components/Button/ContinuarButton';
import AppHeader from '../../../components/AppHeader.jsx';
import SimpleInput from '../../../components/Input/SimpleInput.jsx';
import TagsInput from '../../../components/Input/TagsInput.jsx';

export default function EditProfile({ navigation, route }) {

    //dados para teste, será substituido por dados do banco
    const dev = route.params.dev;

    //variaveis que podem ser editadas
    const [images, setImages] = useState(dev.imagens);
    const [nome, setNome] = useState(dev.nome);
    const [description, setDescription] = useState(dev.bio);
    const [telefone, setTelefone] = useState(dev.telefone);
    const [localizacao, setLocalizacao] = useState(dev.localizacao);
    const [linkedin, setLinkedin] = useState(dev.linkedin);
    const [github, setGithub] = useState(dev.github);
    const [formacao, setFormacao] = useState(dev.formacao);
    const [experiencia, setExperiencia] = useState(dev.experiencia);
    const [hardSkills, setHardSkills] = useState(dev.hardSkills);
    const [softSkills, setSoftSkills] = useState(dev.softSkills);

    //função para colocar a imagem no state
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            allowsMultipleSelection: false,
            aspect: [3, 5],
            quality: 1,
        });

        console.log("Imagem cadastrada");

        if (!result.cancelled) {
            // Se não cancelado, adiciona a imagem no array
            setImages(prevState => [...prevState, result.uri]);
        }
    };

    function handleEditedProfile() {
        if (images.length == 0 || nome == "" || telefone == "" || localizacao == "") {
            // Se dado obrigatório estiver em branco, mostra o Alerta
            Alert.alert(
                "Dados em branco",
                "Preencha todos os campos obrigatórios *"
            );
        } else {
            // Atualiza o perfil
            console.log("Perfil atualizado");
            if (images.length != 0) {
                dev.imagens = images;
            }
            if (nome != dev.nome) {
                dev.nome = nome;
            }
            if (description != dev.bio) {
                dev.bio = description;
            }
            if (telefone != dev.telefone) {
                dev.telefone = telefone;
            }
            if (localizacao != dev.localizacao) {
                dev.localizacao = localizacao;
            }
            if (linkedin != dev.linkedin) {
                dev.linkedin = linkedin;
            }
            if (github != dev.github) {
                dev.github = github;
            }
            if (formacao != dev.formacao) {
                dev.formacao = formacao;
            }
            if (experiencia != dev.experiencia) {
                dev.experiencia = experiencia;
            }
            if (hardSkills != dev.hardSkills) {
                dev.hardSkills = hardSkills;
            }
            if (softSkills != dev.softSkills) {
                dev.softSkills = softSkills;
            }


            // Redireciona para a tela de perfil
            console.log("Redirecionando para a tela de perfil");
            navigation.navigate('Profile', { dev: dev });
        }
    }

    return (
        <View style={cssEditProfile.container}>

            <AppHeader
            headerType='text'
            headerText='Editar Perfil'/>

            <ScrollView>

                {/* Imagens */}
                <View style={cssEditProfile.containerFotos}>
                    {/* Container da Foto 1 */}
                    <View style={cssEditProfile.fotoContainer}>
                        {/* Mostra a Foto 1 se existir */}
                        {images[0] && <Image source={{ uri: images[0] }} style={cssEditProfile.foto} />}

                        {/* Botão para adicionar a Foto 1 */}
                        {!images[0] &&
                        <TouchableHighlight
                        style={cssEditProfile.buttonAdd}
                        onPress={pickImage}>
                            <Image
                            source={require("../../../../assets/img/buttons/buttonAdd.png")}
                            style={cssEditProfile.buttonImage}/>
                        </TouchableHighlight>}

                        {/* Botão para remover a Foto 1 */}
                        {images[0] &&
                        <TouchableHighlight
                        style={cssEditProfile.buttonDel}
                        onPress={() => {
                            // Caso a foto 1 seja removida e existir uma foto 2, a foto 2 passa para a primeira posição
                            images[1] ? setImages([images[1]]) : setImages([]);
                            console.log("Imagem deletada");
                        }}>
                            <Image
                            source={require("../../../../assets/img/buttons/buttonDel.png")}
                            style={cssEditProfile.buttonImage}/>
                        </TouchableHighlight>
                        }
                    </View>

                    {/* Container da Foto 2 */}
                    <View style={cssEditProfile.fotoContainer}>
                        {/* Mostra a Foto 2 se existir */}
                        {images[1] && <Image source={{ uri: images[1] }} style={cssEditProfile.foto} />}

                        {/* Botão para adicionar a Foto 2 */}
                        {!images[1] &&
                        <TouchableHighlight
                        style={cssEditProfile.buttonAdd}
                        onPress={pickImage}>
                            <Image
                            source={require("../../../../assets/img/buttons/buttonAdd.png")}
                            style={cssEditProfile.buttonImage}/>
                        </TouchableHighlight>}

                        {/* Botão para remover a Foto 2 */}
                        {images[1] &&
                        <TouchableHighlight
                        style={cssEditProfile.buttonDel}
                        onPress={() => {
                            // Caso a foto 2 seja removida, o array recebe apenas a primeira foto
                            setImages([images[0]]);
                            console.log("Imagem deletada");
                        }}>
                            <Image
                            source={require("../../../../assets/img/buttons/buttonDel.png")}
                            style={cssEditProfile.buttonImage}/>
                        </TouchableHighlight>
                        }

                    </View>
                </View>

                {/* Nome */}
                <Text style={cssEditProfile.title}>Nome *</Text>
                <SimpleInput
                placeholder="Digite seu nome"
                value={nome}
                keyboardType="default"
                autoCapitalize="words"
                maxLength={30}
                onChangeText={(text) => {setNome(text);}}
                multiline={false}
                numberOfLines={1}
                textAlignVertical="center"
                />

                {/* Sobre */}
                <Text style={cssEditProfile.title}>Sobre</Text>
                <SimpleInput
                placeholder="Digite algo sobre você"
                value={description}
                keyboardType="default"
                autoCapitalize="sentences"
                maxLength={100}
                onChangeText={(text) => {setDescription(text);}}
                multiline={true}
                numberOfLines={3}
                textAlignVertical="top"
                />

                {/* Telefone */}
                <Text style={cssEditProfile.title}>Celular *</Text>
                <SimpleInput
                placeholder="Digite seu número de celular"
                value={telefone}
                keyboardType="numeric"
                autoCapitalize="none"
                maxLength={15}
                onChangeText={(text) => {setTelefone(text);}}
                multiline={false}
                numberOfLines={1}
                textAlignVertical="center"
                />

                {/* Localização */}
                <Text style={cssEditProfile.title}>Localização *</Text>
                <SimpleInput
                placeholder="Digite sua localização"
                value={localizacao}
                keyboardType="default"
                autoCapitalize="words"
                maxLength={30}
                onChangeText={(text) => {setLocalizacao(text);}}
                multiline={false}
                numberOfLines={1}
                textAlignVertical="center"
                />

                {/* Linkedin */}
                <Text style={cssEditProfile.title}>Linkedin</Text>
                <SimpleInput
                placeholder="Digite seu Linkedin"
                value={linkedin}
                keyboardType="default"
                autoCapitalize="none"
                onChangeText={(text) => {setLinkedin(text);}}
                multiline={false}
                numberOfLines={1}
                textAlignVertical="center"
                />

                {/* Github */}
                <Text style={cssEditProfile.title}>Github</Text>
                <SimpleInput
                placeholder="Digite seu Github"
                value={github}
                keyboardType="default"
                autoCapitalize="none"
                onChangeText={(text) => {setGithub(text);}}
                multiline={false}
                numberOfLines={1}
                textAlignVertical="center"
                />

                {/* Formação */}
                <Text style={cssEditProfile.title}>Formação</Text>
                <SimpleInput
                placeholder="Digite sua formação"
                value={formacao}
                keyboardType="default"
                autoCapitalize="sentences"
                maxLength={100}
                onChangeText={(text) => {setFormacao(text);}}
                multiline={true}
                numberOfLines={3}
                textAlignVertical="top"
                />

                {/* Experiência */}
                <Text style={cssEditProfile.title}>Experiência</Text>
                <SimpleInput
                placeholder="Digite sua experiência"
                value={experiencia}
                keyboardType="default"
                autoCapitalize="none"
                maxLength={85}
                onChangeText={(text) => {setExperiencia(text);}}
                multiline={true}
                numberOfLines={3}
                textAlignVertical="top"
                />

                {/* Hard Skills */}
                <Text style={cssEditProfile.title}>Hard Skills</Text>
                <TagsInput
                placeholder="Digite suas hard skills separadas por vírgula"
                valor={hardSkills}
                tags={hardSkills}
                updateTags={(tags) => setHardSkills(tags)}
                />

                {/* Soft Skills */}
                <Text style={cssEditProfile.title}>Soft Skills</Text>
                <TagsInput
                placeholder="Digite suas soft skills separadas por vírgula"
                valor={softSkills}
                tags={softSkills}
                updateTags={(tags) => setSoftSkills(tags)}
                />

            </ScrollView>

            <ContinuarButton
                name='Concluído'
                onPress={handleEditedProfile}
            />
        </View>
    )
}
