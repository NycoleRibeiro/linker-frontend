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
            style={cssProfile.buttonCreate}>
                <FontAwesome5
                style={cssProfile.buttonCreateIcon}
                name="plus" />
            </TouchableHighlight>}

            {props.buttonType === 'edit' &&
            <TouchableHighlight
            style={cssProfile.buttonEdit}>
                <MaterialIcons
                style={cssProfile.buttonEditIcon}
                name="edit" />
            </TouchableHighlight>}
        </>

    );
}

const cssProfile = StyleSheet.create({
    buttonCreate: {
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
    buttonCreateIcon: {
        color: '#f4f4f5',
        fontSize: RFPercentage(4),
        fontFamily: 'Inter_700Bold',
        textTransform: 'lowercase',
    },
    buttonEdit: {
        position: 'absolute',
        width: 50,
        height: 50,
        right: 10,
        bottom: "2%",
        borderRadius: 100,
        backgroundColor: '#fe4072',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        shadowColor: '#000',
    },
    buttonEditIcon: {
        color: '#f4f4f5',
        fontSize: RFPercentage(4),
        fontFamily: 'Inter_700Bold',
        textTransform: 'lowercase',
    },
})
