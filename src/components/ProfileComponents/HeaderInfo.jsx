import React from 'react';
import { View,
        Text,
        Image,
        StyleSheet,}
from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

export default function HeaderInfo(props) {

    return (
        <View style={cssProfile.bioContainer}>
            <View style={cssProfile.imageContainer}>
                <Image
                source={{uri: props.profileImage}}
                style={cssProfile.profileImage} />
            </View>

            <Text
            numberOfLines={1}
            adjustsFontSizeToFit
            style={cssProfile.profileName}>
                {props.profileName}
            </Text>

            <Text
            numberOfLines={3}
            adjustsFontSizeToFit
            style={cssProfile.profileBio}>
                {props.profileBio}
            </Text>
        </View>
    )
}


const cssProfile = StyleSheet.create({
    bioContainer: {
        width: '100%',
        minHeight: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#18181b',
        paddingVertical: 5
    },
    imageContainer: {
        width: 120,
        height: 120,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImage: {
        width: "100%",
        height: "100%",
        borderRadius: 100,
        resizeMode: 'cover'
    },
    profileName: {
        fontSize: RFPercentage(3.5),
        color: '#f4f4f4',
        fontFamily: 'Inter_700Bold',
        marginTop: 5,
    },
    profileBio: {
        fontSize: RFPercentage(1.8),
        color: '#a1a1aa',
        fontFamily: 'Inter_400Regular',
        textAlign: 'center',
        paddingHorizontal: 20,
        marginTop: 5
    },
})
