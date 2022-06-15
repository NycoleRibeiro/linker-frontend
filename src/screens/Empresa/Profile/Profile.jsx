import React, {useState, useEffect} from 'react';
import { View,
    Text}
from 'react-native';
import { css } from './Css.js';

export function Profile() {
    return (
        <View style={css.container}>
            <Text style={css.title}>Profile</Text>
        </View>
    );
}

export default Profile;
