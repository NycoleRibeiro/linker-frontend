import React, {useState, useEffect} from 'react';
import { View,
    Text}
from 'react-native';
import { css } from './Css.js';

export function Chat() {
    return (
        <View style={css.container}>
            <Text style={css.title}>Chat</Text>
        </View>
    );
}

export default Chat;
