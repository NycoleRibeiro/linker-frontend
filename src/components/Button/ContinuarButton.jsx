import React from 'react';
import { Text,
        TouchableHighlight,
        View,}
  from 'react-native';
import { StyleSheet } from "react-native";


function ContinuarButton(props) {
  return (
    <View style={css.container}>
        <TouchableHighlight
            style={css.continuarButton}
            underlayColor="#000"
            onPress={props.onPress}>
            <Text style={css.continuarButtonText}>{props.name ? props.name : 'CONTINUAR'}</Text>
        </TouchableHighlight>
    </View>
  );
}

export default ContinuarButton;

const css = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    continuarButton: {
        width: '90%',
        alignItems: 'center',
        marginTop: "165%",
        paddingVertical: 15,
        borderRadius: 60,
        backgroundColor: '#27272A',
    },
    continuarButtonText: {
        fontSize: 16,
        color: '#FFF',
        fontFamily: 'Inter_600SemiBold',
        textTransform: 'uppercase',
    },
});
