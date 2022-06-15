import React from 'react';
import { Text,
        TouchableHighlight,}
  from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet } from "react-native";


function LoginButton(props) {
  return (
    <TouchableHighlight
        style={css.loginButton}
        underlayColor="#f4f4f5"
        onPress={props.onPress}>
        <>
        <FontAwesome
          style={css.loginButtonIcon}
          name={props.icon}
          size={32}
          color="#726368" />
        <Text style={css.loginButtonText}>{props.title}</Text>
        </>
    </TouchableHighlight>
  );
}

export default LoginButton;

const css = StyleSheet.create({
    loginButton: {
        flexDirection: 'row',
        width: '85%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 18,
        marginBottom: 12,
        borderRadius: 60,
        backgroundColor: '#fff',
        boxShadow: '5px 5px 2px rgba(255, 255, 255, 0.45)',
    },
    loginButtonIcon: {
        position: 'absolute',
        start: '5%',
    },
    loginButtonText: {
        fontSize: 16,
        color: '#726368',
        fontFamily: 'Inter_600SemiBold',
    },
});
