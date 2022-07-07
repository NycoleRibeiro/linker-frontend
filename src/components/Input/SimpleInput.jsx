import React from 'react';
import {StyleSheet,
        TextInput,
        } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";


export default function SimpleInput(props) {
    return (
        <TextInput
            style={css.simpleInput}
            placeholder={props.placeholder}
            placeholderTextColor="#A1A1AA"
            value={props.value}
            selectionColor="#f4f4f5"
            keyboardType="default"
            autoCapitalize={props.autoCapitalize}
            maxLength={props.maxLength}
            onChangeText={props.onChangeText}
            multiline={props.multiline}
            autoCorrect={false}
            numberOfLines={props.numberOfLines}
            textAlignVertical={props.textAlignVertical}
        />
    )
}

const css = StyleSheet.create({
    simpleInput: {
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
    }
});
