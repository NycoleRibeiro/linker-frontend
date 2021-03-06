import React from 'react';
import { View,
        Text,
        Image,
        TouchableHighlight,}
from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Certificate(props) {
    return (
        <TouchableHighlight
        onPress={props.onPress}
        underlayColor="#18181b"
        style={{
            width: 250,
            height: 150,
            backgroundColor: '#000',
            marginHorizontal: 10,
            borderRadius: 10,
            overflow: 'hidden',
        }}
        >
            <>
            <Image
            source={{uri: props.image}}
            style={{
                width: '100%',
                height: '100%',
                resizeMode: "cover",
            }}
            />

            <View
            style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                height: "40%",
                backgroundColor: 'rgba(24, 24, 27, 0.8)',
                alignItems: "center",
                justifyContent: "center",
            }}
            >
                <Text
                style={{
                    color: "#f4f4f5",
                    fontSize: RFPercentage(2.5),
                    fontFamily: 'Inter_600SemiBold',
                }}
                >
                    {props.title}
                </Text>

                <MaterialCommunityIcons
                name="dots-grid"
                size={28}
                color="#A1A1AA"
                style={{
                    position: 'absolute',
                    left: 5,
                }}/>
            </View>
            </>
        </TouchableHighlight>
    )
}
