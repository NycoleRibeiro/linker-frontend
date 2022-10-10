import React, {useState} from 'react';
import { View,
        Text,
        ScrollView,
        TextInput
    }
from 'react-native';

import { RFPercentage } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";


export function DevView(props) {

    // dados teste para exibir perguntas
    const teste = props.perguntasTeste

    // guarda o valor do input
    const [inputValue, setInputValue] = useState('')
    console.log(inputValue)

    return (
        <View style={css.container}>

            {/* Teste */}
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
                paddingHorizontal: 5
            }}
            >
                {teste.map((pergunta, index) => (
                    <View key={index} style={{
                        width: "100%",
                        marginTop:20,
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <Text
                        style={{
                            color:'#fff',
                            fontFamily: 'Inter_600SemiBold',
                            fontSize: RFPercentage(1.8),
                            marginBottom:5,
                        }}>
                            {pergunta}
                        </Text>


                        {/* Input pro usuario digitar a resposta */}
                        <TextInput
                        style={{
                            width: "100%",
                            marginHorizontal: 20,
                            borderWidth: 0.8,
                            paddingHorizontal: 10,
                            paddingVertical: 5,
                            marginVertical: 5,
                            borderColor: '#FD2B7A',
                            borderRadius: 10,
                            fontFamily: 'Inter_400Regular',
                            fontSize: RFPercentage(1.8),
                            color: '#f4f4f5',
                        }}
                        placeholder="Digite sua resposta"
                        placeholderTextColor="#A1A1AA"
                        value={inputValue}
                        selectionColor="#f4f4f5"
                        keyboardType="default"
                        autoCapitalize="none"
                        maxLength={100}
                        onChangeText={text => setInputValue(text)}
                        multiline={true}
                        autoCorrect={false}
                        numberOfLines={4}
                        textAlignVertical="top"
                        />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

export default DevView;



export const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(28, 28, 32, 0.9)',
        borderRadius: 20,
        marginHorizontal: 10,
        overflow: 'hidden',
    },
    title: {
        width: "100%",
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 5,
        marginBottom: 5,
        fontSize: RFPercentage(2),
        fontFamily: 'Inter_600SemiBold',
        textTransform: 'uppercase',
        textAlign: "center",
        color: '#f4f4f5',
        backgroundColor: '#1c1c20',
    },
    imgContainer: {
        width: '100%',
        //height: 130,
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: '100%',
        height: '100%',
    },
    areasTags: {
        position: 'absolute',
        flexDirection: 'row',
        flexWrap: 'wrap',
        top: 5,
        left: 5,
    },
    areaTag: {
        backgroundColor: 'rgba(24, 24, 27, 0.8)',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginRight: 5,
    },
    areaTagText: {
        fontSize: RFPercentage(1.8),
        color: '#f4f4f5',
    },
    mainInfo: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'rgba(28, 28, 32, 0.9)',
        padding: 10,
        elevation: 5,
    },
    nomeDev: {
        fontSize: RFPercentage(2.6),
        fontWeight: 'bold',
        color: '#fff',
        width: '70%',
        flexWrap: 'wrap',
    },
    vagaInscrita: {
        fontSize: RFPercentage(2),
        color: '#FF7556',
        fontWeight: 'bold',
    },
    bio: {
        fontSize: RFPercentage(1.8),
        color: '#A1A1AA',
        marginTop: 15,
    },

});
