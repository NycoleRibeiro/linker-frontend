import React from 'react';
import { Text } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

export default function ErrorMessage(props) {
    return (
        <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        style={{
            position: "absolute",
            bottom: 90,
            fontSize: RFPercentage(2),
            color: "#A1A1AA",
            alignSelf: "center",
        }}>
            {props.message}
        </Text>
    );
}

