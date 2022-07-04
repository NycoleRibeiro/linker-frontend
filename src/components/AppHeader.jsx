import React from 'react';
import { View,
        Text,
        Image,
        StyleSheet,}
from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";


export default function AppHeader(props) {

    return (
        <View style={cssProfile.header}>
            {props.headerType === 'image' &&
                <Image
                source={require('../../assets/img/headerLogo.png')}
                style={{
                    width: '100%',
                    height: '100%',
                }} />
            }
            {props.headerType === 'text' &&
                <Text style={cssProfile.headerText}>{props.headerText}</Text>
            }

        </View>
    )
}


const cssProfile = StyleSheet.create({
    header: {
        width: '100%',
        height: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#18181b'
    },
    headerText: {
        color: '#FE4072',
        fontSize: RFPercentage(1.8),
        textTransform: 'uppercase',
        fontFamily: 'Inter_700Bold',
    },
})
