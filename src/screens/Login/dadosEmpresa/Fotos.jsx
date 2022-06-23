import React, { useState } from 'react';
import { View,
        Text,
        ScrollView,
        Image,
        TouchableHighlight,}
from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet } from "react-native";

import { css } from './Css.js';
import ContinuarButton from '../../../components/Button/ContinuarButton';
import ProgressBar from '../../../components/Input/ProgressBar';
import BackButton from '../../../components/Button/BackButton';
import ErrorMessage from '../../../components/ErrorMessage';


function Fotos({navigation}) {
    const [images, setImages] = useState([]);
    const [errorMessage, setErrorMessage] = useState(false);

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

    function handleImages() {
        if (images.length == 0) {
            // Se não tiver nenhuma imagem cadastrada, mostra o ErrorMessage
            setErrorMessage(true);
        } else {
            // Retorna o array de imagens cadastradas e vai para a próxima tela
            console.log(images);
            navigation.navigate('Sobre');
        }
    }

    return (
        <View style={css.container}>
            <ProgressBar percent="60%"/>
            <ScrollView>
                <BackButton voltar={() => navigation.goBack()}/>
                <Text style={css.h1}>
                    Adicionar {'\n'}
                    Fotos
                </Text>
                <View style={styles.container}>

                    {/* Container da Foto 1 */}
                    <View style={styles.fotoContainer}>
                        {/* Mostra a Foto 1 se existir */}
                        {images[0] && <Image source={{ uri: images[0] }} style={styles.foto} />}

                        {/* Botão para adicionar a Foto 1 */}
                        {!images[0] &&
                        <TouchableHighlight
                        style={styles.buttonAdd}
                        onPress={pickImage}>
                            <Image
                            source={require("../../../../assets/img/buttons/buttonAdd.png")}
                            style={styles.buttonImage}/>
                        </TouchableHighlight>}

                        {/* Botão para remover a Foto 1 */}
                        {images[0] &&
                        <TouchableHighlight
                        style={styles.buttonDel}
                        onPress={() => {
                            // Caso a foto 1 seja removida e existir uma foto 2, a foto 2 passa para a primeira posição
                            images[1] ? setImages([images[1]]) : setImages([]);
                            console.log("Imagem deletada");
                        }}>
                            <Image
                            source={require("../../../../assets/img/buttons/buttonDel.png")}
                            style={styles.buttonImage}/>
                        </TouchableHighlight>
                        }
                    </View>

                    {/* Container da Foto 2 */}
                    <View style={styles.fotoContainer}>
                        {/* Mostra a Foto 2 se existir */}
                        {images[1] && <Image source={{ uri: images[1] }} style={styles.foto} />}

                        {/* Botão para adicionar a Foto 2 */}
                        {!images[1] &&
                        <TouchableHighlight
                        style={styles.buttonAdd}
                        onPress={pickImage}>
                            <Image
                            source={require("../../../../assets/img/buttons/buttonAdd.png")}
                            style={styles.buttonImage}/>
                        </TouchableHighlight>}

                        {/* Botão para remover a Foto 2 */}
                        {images[1] &&
                        <TouchableHighlight
                        style={styles.buttonDel}
                        onPress={() => {
                            // Caso a foto 2 seja removida, o array recebe apenas a primeira foto
                            setImages([images[0]]);
                            console.log("Imagem deletada");
                        }}>
                            <Image
                            source={require("../../../../assets/img/buttons/buttonDel.png")}
                            style={styles.buttonImage}/>
                        </TouchableHighlight>
                        }

                    </View>
                </View>
            </ScrollView>

            {/* Error message, só aparece se o usuário tentar continuar sem foto */}
            {errorMessage &&
            <ErrorMessage message="Adicione pelo menos 1 foto para continuar"/>}

            <ContinuarButton
                onPress={handleImages}
            />
        </View>
    );
}

export default Fotos;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        height: 300,
        marginLeft: 40,
        marginTop: "25%",
    },
    fotoContainer: {
        //width: 150,
        width: '32%',
        height: '65%',
        //height: 240,
        marginRight: "5%",
        backgroundColor: "#3f3f46",
        borderRadius: 10,
    },
    foto: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    buttonAdd: {
        position: "relative",
        left: "90%",
        top: "90%",
        width: 25,
        height: 25,
        borderRadius: 50,
    },
    buttonDel: {
        position: "relative",
        left: "90%",
        bottom: "10%",
        width: 25,
        height: 25,
        borderRadius: 50,
    },
    buttonImage: {
        width: "100%",
        height: "100%",
    },
});
