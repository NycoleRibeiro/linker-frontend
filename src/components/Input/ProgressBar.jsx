import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from "react-native";

const css = StyleSheet.create({
    progressBar: {
        marginTop: 0,
        backgroundColor: '#27272A',
        height: 5,
    },
});

function ProgressBar(props) {
    return (
        <View style={css.progressBar}>
            <View style={{
                backgroundColor: '#FD2B7A',
                height: 5,
                width: `${props.percent}`,
            }}></View>
        </View>
    );
}


export default ProgressBar;
