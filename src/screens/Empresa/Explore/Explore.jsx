import React, {useState, useEffect} from 'react';
import { View,
    Text}
from 'react-native';
import { css } from './Css.js';

export function Explore() {
    return (
        <View style={css.container}>
            <Text style={css.title}>Explorar</Text>
        </View>
    );
}

export default Explore;
