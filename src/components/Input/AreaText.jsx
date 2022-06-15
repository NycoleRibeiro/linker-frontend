import React from 'react';
import { View,
    TextInput,}
from 'react-native';
import { StyleSheet } from "react-native";


function AreaText(props) {
    return (
        <View style={{
            width: '100%',
            height: 90,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 40,
            marginLeft: 30,
            marginTop: "10%",
            }}>
            <TextInput
                style={css.input}
                placeholder={props.placeholder}
                placeholderTextColor="#A1A1AA"
                selectionColor="#f4f4f5"
                keyboardType="default"
                multiline={true}
                numberOfLines={3}
                textAlignVertical="top"
                maxLength={85}
            />
        </View>
    )
}

export default AreaText;

const css = StyleSheet.create({
    input: {
        width: '80%',
        height: '100%',
        padding: 5,
        marginLeft: 10,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#FD2B7A',
        fontFamily: 'Inter_400Regular',
        fontSize: 18,
        color: '#f4f4f5',
      },
});
