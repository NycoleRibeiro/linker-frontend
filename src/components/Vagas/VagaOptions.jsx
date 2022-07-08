import React, { useState } from 'react';
import { View,
        Text,
        TouchableHighlight,
        Pressable,
        Animated, }
        from 'react-native';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { RFPercentage } from "react-native-responsive-fontsize";

export default function VagaOptions(props) {
    const [bottom] = useState(new Animated.Value(-190));

    Animated.timing(
        bottom,
        {
            toValue: 0,
            duration: 600,
            useNativeDriver: false,
        }
    ).start();

    return (
        <Pressable
        style={css.blur}
        onPress={props.close}>

            <Animated.View style={{
                flexDirection: 'column',
                position: 'absolute',
                bottom: bottom,
                width: '100%',
                height: '30%',
                alignItems: 'center',
                backgroundColor: '#18181f',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
            }}>
                <View style={css.header}>
                    <MaterialCommunityIcons
                    name="dots-grid"
                    size={30}
                    color="#52525b"
                    style={{
                        position: 'absolute',
                        left: 10,
                        top: 5,
                    }}/>
                    <Text style={css.title}>
                        {props.title}
                    </Text>
                </View>


                <View style={css.buttonsArea}>

                    {/*BOTÃO EDITAR*/}
                    <View style={css.buttonArea}>
                        <TouchableHighlight
                        underlayColor="#fd2a7b"
                        style={css.button}
                        onPress={props.onPressEdit}>
                                <MaterialIcons
                                name="edit"
                                style={css.buttonIcon}/>
                        </TouchableHighlight>
                        <Text style={css.buttonLabel}>
                            editar
                        </Text>
                    </View>

                    {/*BOTÃO EXCLUIR*/}
                    <View style={css.buttonArea}>
                        <TouchableHighlight
                        underlayColor="#ff0000"
                        style={css.buttonAttention}
                        onPress={props.onPressDelete}>
                                <MaterialCommunityIcons
                                name="trash-can"
                                style={css.buttonIcon}/>
                        </TouchableHighlight>
                        <Text style={css.buttonLabel}>
                            excluir
                        </Text>
                    </View>

                    {/*BOTÃO DETALHES*/}
                    <View style={css.buttonArea}>
                        <TouchableHighlight
                        underlayColor="#fd2a7b"
                        style={css.button}
                        onPress={props.onPressDetail}>
                                <MaterialCommunityIcons
                                name="text-long"
                                style={css.buttonIcon}/>
                        </TouchableHighlight>
                        <Text style={css.buttonLabel}>
                            detalhes
                        </Text>
                    </View>
                </View>
            </Animated.View>
        </Pressable>
    )
}

const css = StyleSheet.create({
    blur: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        zIndex: 1,
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    title: {
        fontSize: RFPercentage(2.3),
        color: '#fff',
        fontFamily: 'Inter_700Bold',
        textTransform: 'uppercase',
    },
    buttonsArea: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonArea: {
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    button: {
        width: 80,
        height: 80,
        borderRadius: 100,
        backgroundColor: '#FE4072',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    buttonAttention: {
        width: 80,
        height: 80,
        borderRadius: 100,
        backgroundColor: '#7c0000',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    buttonIcon: {
        color: '#fff',
        fontSize: 55,
    },
    buttonLabel: {
        fontSize: RFPercentage(1.8),
        color: '#fff',
        fontFamily: 'Inter_400Regular',
        textTransform: 'lowercase',
        marginTop: 10,
    },
});
