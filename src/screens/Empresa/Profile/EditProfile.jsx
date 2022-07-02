import React, {useState, useEffect} from 'react';
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
import { empresas } from '../../../../assets/dadosTeste.js'
import ErrorMessage from '../../../components/ErrorMessage';
import ContinuarButton from '../../../components/Button/ContinuarButton';

export default function EditProfile({ navigation, route }) {

    //dados para teste, será substituido por dados do banco
    const empresa = route.params.empresa;

    const [images, setImages] = useState(empresa.imagens);
    const [nome, setNome] = useState(empresa.nome);
    const [description, setDescription] = useState(empresa.bio);
    const [linkSite, setLinkSite] = useState(empresa.site);
    const [telefone, setTelefone] = useState(empresa.telefone);
    const [localizacao, setLocalizacao] = useState(empresa.localizacao);

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
            if (nome != empresa.nome) {
                empresa.nome = nome;
            }
            if (description != empresa.bio) {
                empresa.bio = description;
            }
            if (linkSite != empresa.site) {
                empresa.site = linkSite;
            }
            if (telefone != empresa.telefone) {
                empresa.telefone = telefone;
            }
            if (localizacao != empresa.localizacao) {
                empresa.localizacao = localizacao;
            }
            if (images.length != 0) {
                empresa.imagens = images;
            }
            // Redireciona para a tela de perfil
            console.log("Redirecionando para a tela de perfil");
            navigation.navigate('Profile', { empresa: empresa });
        }
    }

    return (
        <View style={cssEditProfile.container}>
            <View style={cssEditProfile.header}>
                <Text style={cssEditProfile.headerText}>Editar Perfil</Text>
            </View>
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
                <Text style={cssEditProfile.title}>Nome da Empresa *</Text>
                <TextInput
                style={cssEditProfile.simpleInput}
                placeholder="Nome da Empresa"
                placeholderTextColor="#A1A1AA"
                value={nome}
                selectionColor="#f4f4f5"
                keyboardType="default"
                autoCapitalize="words"
                maxLength={30}
                onChangeText={text => setNome(text)}
                />

                {/* Sobre */}
                <Text style={cssEditProfile.title}>Sobre a Empresa</Text>
                <TextInput
                style={cssEditProfile.simpleInput}
                placeholder="Breve descrição da empresa"
                placeholderTextColor="#A1A1AA"
                value={description}
                selectionColor="#f4f4f5"
                keyboardType="default"
                autoCorrect={false}
                multiline={true}
                numberOfLines={3}
                textAlignVertical="top"
                maxLength={85}
                onChangeText={(text) => {
                    setDescription(text);
                }}
                />

                {/* Site */}
                <Text style={cssEditProfile.title}>Site</Text>
                <TextInput
                style={cssEditProfile.simpleInput}
                placeholder="Link do site da empresa"
                placeholderTextColor="#A1A1AA"
                value={linkSite}
                selectionColor="#f4f4f5"
                keyboardType="url"
                autoCorrect={false}
                maxLength={30}
                onChangeText={text => setLinkSite(text)}
                />

                {/* Telefone */}
                <Text style={cssEditProfile.title}>Telefone *</Text>
                <TextInput
                style={cssEditProfile.simpleInput}
                placeholder="Telefone da empresa"
                placeholderTextColor="#A1A1AA"
                value={telefone}
                selectionColor="#f4f4f5"
                keyboardType="phone-pad"
                maxLength={15}
                onChangeText={text => setTelefone(text)}
                />

                {/* Localização */}
                <Text style={cssEditProfile.title}>Localização *</Text>
                <TextInput
                style={cssEditProfile.simpleInput}
                placeholder="Localização da empresa"
                placeholderTextColor="#A1A1AA"
                value={localizacao}
                selectionColor="#f4f4f5"
                keyboardType="default"
                autoCorrect={false}
                maxLength={30}
                onChangeText={text => setLocalizacao(text)}
                />


            </ScrollView>

            <ContinuarButton
                name='Concluído'
                onPress={handleEditedProfile}
            />
        </View>
    )
}
