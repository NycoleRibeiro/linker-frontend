import React from 'react';
import { Text } from 'react-native';

export default function ErrorMessage(props) {
    return (
        <Text style={{
            position: "absolute",
            bottom: "10%",
            fontSize: 18,
            color: "#A1A1AA",
            alignSelf: "center",
        }}>
            {props.message}
        </Text>
    );
}

