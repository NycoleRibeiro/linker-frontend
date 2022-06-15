import React, {useState, useEffect} from 'react';
import { View,
    Text}
from 'react-native';
import { css } from './Css.js';

export function Home() {
    return (
        <View style={css.container}>
            <Text style={css.title}>Home</Text>
        </View>
    );
}

export default Home;
