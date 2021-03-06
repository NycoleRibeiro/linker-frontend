import React from 'react';
import { View,
        TouchableHighlight,
        StyleSheet,}
from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { RFPercentage } from "react-native-responsive-fontsize";


export default function FloatButton(props) {

    return (
        <>
            {props.buttonType === 'create' &&
            <TouchableHighlight
            onPress={props.onPress}
            underlayColor="#109a29"
            style={cssProfile.button}>
                <FontAwesome5
                style={cssProfile.buttonIcon}
                name="plus" />
            </TouchableHighlight>}

            {props.buttonType === 'edit' &&
            <TouchableHighlight
            onPress={props.onPress}
            underlayColor="#109a29"
            style={cssProfile.button}>
                <MaterialIcons
                style={cssProfile.buttonIcon}
                name="edit" />
            </TouchableHighlight>}
        </>

    );
}

const cssProfile = StyleSheet.create({
    button: {
        position: 'absolute',
        width: 50,
        height: 50,
        right: 10,
        bottom: "2%",
        borderRadius: 100,
        backgroundColor: '#4caf50',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        shadowColor: '#000',
    },
    buttonIcon: {
        color: '#f4f4f5',
        fontSize: RFPercentage(4),
        fontFamily: 'Inter_700Bold',
        textTransform: 'lowercase',
    },
})
