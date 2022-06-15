import React, {useState, useEffect} from 'react';
import { View,
    Text}
from 'react-native';
import { css } from './Css.js';

export function Likes() {
    return (
        <View style={css.container}>
            <Text style={css.title}>Likes</Text>
        </View>
    );
}

export default Likes;
