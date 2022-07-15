import React, {useState} from 'react';
import { View,
        Text,
        ScrollView,
        Alert,
        Image,
        TouchableHighlight
    }
from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RFPercentage } from "react-native-responsive-fontsize";
import * as ImagePicker from 'expo-image-picker';

import { css } from './Css.js';
import HeaderInfo from '../../../components/ProfileComponents/HeaderInfo.jsx';
import AppHeader from '../../../components/AppHeader.jsx';
import FloatButton from '../../../components/ProfileComponents/FloatButton.jsx';
import ContactButtons from '../../../components/ProfileComponents/ContactButtons.jsx';
import Certificate from '../../../components/ProfileComponents/Certificate.jsx';
import OptionsModal from '../../../components/ProfileComponents/OptionsModal.jsx';
import SimpleInput from '../../../components/Input/SimpleInput.jsx';

import { desenvolvedores } from '../../../../assets/dadosTeste.js'

//dados para teste, será substituido por dados do banco
const dev = desenvolvedores[0];

//lista de botoes de contato
const contactButtons = ["whatsapp", "email"]
if (dev.linkedin !== "") {
    contactButtons.push("linkedin")
} if (dev.github !== "") {
    contactButtons.push("github")
}

export function Profile({navigation, route}) {

    const [OptionsModalShown, setOptionsModalShown] = useState(false);
    const [certificateDetailsShown, setCertificateDetailsShown] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [certificateTitle, setCertificateTitle] = useState('');
    const [certificateImage, setCertificateImage] = useState('');
    const [certificateLink, setCertificateLink] = useState('');

    //dados para teste, será substituido por dados do banco
    if (route.params) {
        const dev = route.params.dev;
    }

    //função para colocar a imagem no state
    const pickCertificateImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            allowsMultipleSelection: false,
            aspect: [4, 3],
            quality: 1,
        });


        if (!result.cancelled) {
            // Se não cancelado, adiciona a imagem no array
            setCertificateImage(result.uri);
            console.log("Imagem cadastrada");
        }
    };

    // função deletar certificado
    const deleteCertificate = () => {
        Alert.alert(
            'Excluir certificado',
            `Tem certeza que deseja excluir a certificação ${selectedCertificate.title}?`,
            [
                {text: 'Não', style: 'cancel'},
                {text: 'Sim', onPress: () => {
                    // retorna o id do certificado selecionado
                    console.log('certificado excluído: ', selectedCertificate.id);

                    /* REMOVER O CERTIFICADO COM ID {selectedCertificate.id} do banco de dados */

                    // fecha o modal
                    setOptionsModalShown(false);
                }}
            ],
            {cancelable: false}
        );
    }

    // função editar certificado
    const editCertificate = () => {
        // id do certificado a ser editado
        console.log('id certificado: ', selectedCertificate.id);
        if (certificateTitle !== '') {
            /* ATUALIZAR TÍTULO DO CERTIFICADO NO BANCO DE DADOS */
            console.log('novo titulo: ', certificateTitle);
        } if (certificateImage !== '') {
            /* ATUALIZAR IMAGEM DO CERTIFICADO NO BANCO DE DADOS */
            console.log('nova imagem: ', certificateImage);
        } if (certificateLink !== '') {
            /* ATUALIZAR LINK DO CERTIFICADO NO BANCO DE DADOS */
            console.log('novo link: ', certificateLink);
        }

        // fecha o modal e reseta os campos
        setCertificateDetailsShown(false);
        setSelectedCertificate(null);
        setCertificateTitle('');
        setCertificateImage('');
        setCertificateLink('');
    }

    // função criar certificado
    const createCertificate = () => {
        if (certificateTitle === '' || certificateImage === '' || certificateLink === '') {
            Alert.alert(
                'Dados Incompletos',
                'Preencha todos os campos para continuar',
                [
                    {text: 'OK', style: 'cancel'}
                ],
                {cancelable: false}
            );
        } else {
            /* INSERIR CERTIFICADO NO BANCO DE DADOS */
            console.log('titulo: ', certificateTitle);
            console.log('imagem: ', certificateImage);
            console.log('link: ', certificateLink);

            // fecha o modal e reseta os campos
            setCertificateDetailsShown(false);
            setCertificateTitle('');
            setCertificateImage('');
            setCertificateLink('');
        }
    }




    return (
        <View style={css.container}>

            <AppHeader
            headerType='image'/>

            <HeaderInfo
            profileImage={dev.imagens[0]}
            profileName={dev.nome}
            profileBio={dev.bio} />

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
                <ContactButtons
                types={contactButtons}
                phone={dev.telefone}
                email={dev.email}
                linkedin={dev.linkedin}
                github={dev.github}/>

                {/* Dados Nascimento, Local e Formação */}
                <View style={{
                    width: "100%",
                    marginLeft: 40,
                }}>

                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        marginTop:30,}}>
                        <FontAwesome5 name="birthday-cake" size={20} color="#3f3f46" />
                        <Text style={{color:'#a1a1aa', marginLeft:15}}>
                            {dev.nascimento.mes} de {dev.nascimento.ano}
                        </Text>
                    </View>

                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        marginTop:5,}}>
                        <Ionicons name="md-location-sharp" size={20} color="#3f3f46" />
                        <Text style={{color:'#a1a1aa', marginLeft:13}}>
                            {dev.localizacao}
                        </Text>
                    </View>

                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        marginTop:5,}}>
                        <Ionicons name="school" size={20} color="#3f3f46" />
                        <Text style={{color:'#a1a1aa', marginLeft:13}}>
                            {dev.formacao}
                        </Text>
                    </View>
                </View>

                {/* Hard Skills */}
                {dev.hardSkills.length > 0 &&
                <>
                <Text style={css.title}>Hard Skills</Text>
                <View style={{
                flexDirection: "row",
                flexWrap: "wrap",
                marginHorizontal: 10,
                alignItems: "center",
                justifyContent: "center",
                }}>
                    {dev.hardSkills.map((skill, index) => (
                        <View key={index} style={{
                        backgroundColor: "#27272a",
                        marginRight: 8,
                        marginBottom: 8,
                        paddingHorizontal: 10,
                        borderRadius: 10,
                        }}>
                            <Text style={{
                            color: "#f4f4f5",
                            fontSize: RFPercentage(1.7),
                            fontFamily: 'Inter_400Regular',
                            }}>
                                {skill}
                            </Text>
                        </View>
                    ))}
                </View>
                </>}

                {/* Soft Skills */}
                {dev.softSkills.length > 0 &&
                <>
                <Text style={css.title}>Soft Skills</Text>
                <View style={{
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    alignSelf: "flex-start",
                    marginHorizontal: 20,
                }}>
                    {dev.softSkills.map((skill, index) => (
                        <Text
                        key={index}
                        style={{
                            color: "#A1A1AA",
                            fontSize: RFPercentage(1.8),
                            fontFamily: 'Inter_400Regular'
                        }}
                        >
                            • {skill}
                        </Text>
                    ))}
                </View>
                </>}

                {/* Experiência */}
                {dev.experiencia != '' &&
                <>
                <Text style={css.title}>Experiência</Text>
                <Text style={{
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    alignSelf: "flex-start",
                    marginHorizontal: 20,
                    color: "#A1A1AA",
                    fontSize: RFPercentage(1.8),
                    fontFamily: 'Inter_400Regular'
                }}>
                    {dev.experiencia}
                </Text>
                </>}

                {/* Certificações */}
                {dev.certificacoes.length >= 0 &&
                <>
                <Text style={css.title}>Certificações</Text>

                {/* ScrollView Horizontal */}
                <ScrollView horizontal={true}>
                    {dev.certificacoes.map((cert, index) => (
                        <Certificate
                        key={index}
                        id={cert.id}
                        title={cert.title}
                        image={cert.image}
                        onPress={() => {
                            setSelectedCertificate(cert);
                            setOptionsModalShown(true);
                        }}
                        />
                    ))}
                </ScrollView>
                </>
                }

            </ScrollView>






            {/* Botão de editar */}
            <FloatButton
            buttonType='edit'
            onPress={() => navigation.navigate('EditProfile', {dev: dev})}/>

            {/* Botões de opção da vaga */}
            {OptionsModalShown && (
            <OptionsModal
            title={'Certificações'}
            buttons={['editar', 'excluir', 'adicionar']}
            close={() => setOptionsModalShown(false)}
            onPressEdit={() => {
                setOptionsModalShown(false);
                setCertificateDetailsShown(true);
            }}
            onPressDelete={deleteCertificate}
            onPressAdd={() => {
                setSelectedCertificate(null);
                setOptionsModalShown(false);
                setCertificateDetailsShown(true);
            }}
            />
            )}

            {/* Modal Detalhes do certificado (Editar ou Adicionar) */}
            {certificateDetailsShown &&
            <>
                <View
                style={{
                    flexDirection: 'column',
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    backgroundColor: '#18181f',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                }}>

                    {/* Header */}
                    <View
                    style={{
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'center',
                        paddingVertical: 10,
                    }}>
                        <MaterialCommunityIcons
                        name="dots-grid"
                        size={30}
                        color="#52525b"
                        style={{
                            position: 'absolute',
                            left: 10,
                            top: 5,
                        }}/>
                        <Text style={{
                            fontSize: RFPercentage(2.3),
                            color: '#fff',
                            fontFamily: 'Inter_700Bold',
                            textTransform: 'uppercase',
                        }}>
                            {selectedCertificate != null ? 'Editar Certificado' : 'Adicionar Certificado'}
                        </Text>
                    </View>

                    {/* Inputs */}
                    <ScrollView style={{ flex: 1, width: '100%', marginBottom: 50 }}>
                        {/* Imagem */}
                        <View
                        style={{
                            height: 230,
                            marginHorizontal: 20,
                            backgroundColor: '#27272a',
                            borderRadius: 10,
                            overflow: 'hidden',
                            marginBottom: 10,
                        }}
                        >
                            {/* Mostra a imagem se existir */}
                            {(selectedCertificate != null && certificateImage === '' ) &&
                            <Image
                            source={{ uri: selectedCertificate.image }}
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                            />}

                            {certificateImage != '' &&
                            <Image
                            source={{ uri: certificateImage }}
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                            />}

                            {/* Botão para alterar a imagem */}
                            <TouchableHighlight
                            activeOpacity={0.8}
                            underlayColor="#000"
                            onPress={pickCertificateImage}
                            style={{
                                position: "absolute",
                                bottom: 0,
                                width: "100%",
                                height: "20%",
                                backgroundColor: 'rgba(254, 64, 114, 0.8)',
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            >
                                <Text
                                style={{
                                    color: "#f4f4f5",
                                    fontSize: RFPercentage(1.8),
                                    fontFamily: 'Inter_600SemiBold',
                                }}
                                >
                                    Nova Imagem
                                </Text>
                            </TouchableHighlight>
                        </View>

                        {/* Nome */}
                        <Text style={css.title}>Título</Text>
                        <SimpleInput
                        placeholder="Nome do Certificado"
                        value={(selectedCertificate != null && certificateTitle === '')
                        ? selectedCertificate.title
                        : certificateTitle}
                        keyboardType="default"
                        autoCapitalize="words"
                        maxLength={30}
                        onChangeText={(text) => {setCertificateTitle(text);}}
                        multiline={false}
                        numberOfLines={1}
                        textAlignVertical="center"
                        />

                        {/* Link */}
                        <Text style={css.title}>Link</Text>
                        <SimpleInput
                        placeholder="Link para o Certificado"
                        value={(selectedCertificate != null && certificateLink === '')
                        ? selectedCertificate.link
                        : certificateLink}
                        keyboardType="url"
                        autoCapitalize="none"
                        onChangeText={(text) => {setCertificateLink(text);}}
                        multiline={false}
                        numberOfLines={1}
                        textAlignVertical="center"
                        />
                    </ScrollView>

                    {/* Botões salvar e cancelar */}
                    <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        backgroundColor: '#18181f',
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                    }}>
                        <TouchableHighlight
                        activeOpacity={0.8}
                        underlayColor="#000"
                        onPress={() => {
                            setCertificateDetailsShown(false);
                            setCertificateTitle('');
                            setCertificateLink('');
                            setCertificateImage('');
                        }}
                        style={{
                            backgroundColor: '#3f3f46',
                            borderRadius: 20,
                            height: 35,
                            width: '48%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        >
                            <Text
                            style={{
                                color: '#f4f4f5',
                                fontSize: RFPercentage(1.8),
                                fontFamily: 'Inter_600SemiBold',
                                textTransform: 'capitalize',
                            }}
                            >
                                Cancelar
                            </Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                        activeOpacity={0.8}
                        underlayColor="#000"
                        onPress={() => {
                            if (selectedCertificate != null) {
                                editCertificate();
                            } else {
                                createCertificate();
                            }
                        }}
                        style={{
                            backgroundColor: '#fe4072',
                            borderRadius: 20,
                            height: 35,
                            width: '48%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        >
                            <Text
                            style={{
                                color: '#f4f4f5',
                                fontSize: RFPercentage(1.8),
                                fontFamily: 'Inter_600SemiBold',
                                textTransform: 'capitalize',
                            }}
                            >
                                Salvar
                            </Text>
                        </TouchableHighlight>
                    </View>

                </View>
            </>
            }

        </View>
    );
}

export default Profile;
