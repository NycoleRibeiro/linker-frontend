import React from 'react';
import { TouchableHighlight } from 'react-native';
import { StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

function BackButton(props) {
    return (
        <TouchableHighlight
            style={css.backButton}
            onPress={props.voltar} >
            <MaterialIcons
                name="keyboard-arrow-left"
                size={50}
                color="#3f3f46" />
        </TouchableHighlight>

    );
  }

  export default BackButton;

  const css = StyleSheet.create({
    backButton: {
        position: 'absolute',
        top: 10,
    },
  });
