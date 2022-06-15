import React from 'react';
import { View,
    TextInput,}
from 'react-native';
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';


function InputText(props) {
    return (
        <View style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            height: 50,
            marginRight: 40,
            marginLeft: 30,
            marginTop: `${props.margintop}`,
            }}>
            <MaterialCommunityIcons
                style={css.icon}
                name={props.icon}
                size={30}
                color="#52525B" />
            <TextInput
                style={css.input}
                placeholder={props.placeholder}
                placeholderTextColor="#A1A1AA"
                selectionColor="#f4f4f5"
                keyboardType="default"
                autoCapitalize="words"
                maxLength={30}
            />
        </View>
    )
}

export default InputText;

const css = StyleSheet.create({

    icon: {
        position: 'absolute',
        marginLeft: -25,
    },
    input: {
        width: '80%',
        borderWidth: 1,
        paddingLeft: 5,
        marginLeft: 10,
        borderBottomColor: '#FD2B7A',
        borderTopColor: '#18181b',
        borderLeftColor: '#18181b',
        borderRightColor: '#18181b',
        fontFamily: 'Inter_400Regular',
        fontSize: 20,
        color: '#f4f4f5',
      },
});
