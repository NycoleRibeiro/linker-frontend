import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    Image,
    Button,
}
    from 'react-native';
import { css } from './Css.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function postUser(user) {
    console.log(user);
    // post the user object to /users endpoint on localhost
    await fetch('http://192.168.2.105:3000/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user.jwt
        },
        body: JSON.stringify(user)
    });
}

export function Profile() {
    // Load user from AsyncStorage
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        AsyncStorage.getItem("user").then(user => JSON.parse(user))
            .then(user => {
                AsyncStorage.getItem('jwttoken').then(jwt => {
                    setUser({...user, jwt});
                    setIsLoading(false);
                })
            }
            );
    }, []);

    return (
        <View style={css.container}>
            {isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : <ProfileDetails user={user}></ProfileDetails>}
        </View>
    );
}

function ProfileDetails({ user }) {
    return (
        <View style={css.container}>

            <Image source={{ uri: user.picture }} style={{ marginBottom: 12, width: 80, height: 80, borderRadius: 400 / 2 }} />

            <Text style={css.title}>
                {user.name}
            </Text>

            <Text style={{ color: "#fff" }}>
                username: @{user.nickname}
            </Text>
            <Text style={{ color: "#fff" }}>
                id: {user.sub}
            </Text>

            <Button title="Post user" onPress={() => postUser(user)}></Button>


        </View>
    );
}

export default Profile;
