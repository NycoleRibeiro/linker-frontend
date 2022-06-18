import React, { useState, useEffect } from 'react';
import { View,
        Text,
        ScrollView,
        Image,
        Button,
        TouchableHighlight, }
from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet } from "react-native";

import { css } from './Css.js';
import ContinuarButton from '../../../components/Button/ContinuarButton';
import ProgressBar from '../../../components/Input/ProgressBar';
import BackButton from '../../../components/Button/BackButton';


function Fotos({navigation}) {
    const [image, setImage] = useState(null);
    const [image2, setImage2] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            allowsMultipleSelection: false,
            aspect: [3, 5],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const pickImage2 = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            allowsMultipleSelection: false,
            aspect: [3, 5],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage2(result.uri);
        }
    };

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

                    <View style={styles.fotoContainer}>
                        {image && <Image source={{ uri: image }} style={styles.foto} />}

                        {!image &&
                        <TouchableHighlight
                        style={styles.buttonAdd}
                        onPress={pickImage}>
                            <Image
                            source={require("../../../../assets/img/buttons/buttonAdd.png")}
                            style={styles.buttonImage}/>
                        </TouchableHighlight>}

                        {image &&
                        <TouchableHighlight
                        style={styles.buttonDel}
                        onPress={() => { setImage(null); }}>
                            <Image
                            source={require("../../../../assets/img/buttons/buttonDel.png")}
                            style={styles.buttonImage}/>
                        </TouchableHighlight>
                        }
                    </View>

                    <View style={styles.fotoContainer}>
                        {image2 && <Image source={{ uri: image2 }} style={styles.foto} />}

                        {!image2 &&
                        <TouchableHighlight
                        style={styles.buttonAdd}
                        onPress={pickImage2}>
                            <Image
                            source={require("../../../../assets/img/buttons/buttonAdd.png")}
                            style={styles.buttonImage}/>
                        </TouchableHighlight>}

                        {image2 &&
                        <TouchableHighlight
                        style={styles.buttonDel}
                        onPress={() => { setImage2(null); }}>
                            <Image
                            source={require("../../../../assets/img/buttons/buttonDel.png")}
                            style={styles.buttonImage}/>
                        </TouchableHighlight>
                        }

                    </View>

                </View>
            </ScrollView>
            <ContinuarButton
                onPress={() => navigation.navigate('Sobre')}
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
        width: 150,
        height: 240,
        marginRight: "5%",
        backgroundColor: "#3f3f46",
        borderRadius: 10,
    },
    foto: {
        width: 150,
        height: 240,
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
        width: 25,
        height: 25,
    },
});
