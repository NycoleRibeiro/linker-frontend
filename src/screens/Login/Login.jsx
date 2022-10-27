import React, { useState, useEffect, useCallback } from 'react';
import { View, ImageBackground, StyleSheet, StatusBar, Button } from 'react-native';
import { css } from './Css.js';
import LoginButton from '../../components/Button/LoginButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserService from '../../service/UserService.js';
import ApiClient from '../../service/ApiClient.js';

import {
    useFonts,
    Inter_600SemiBold,
    Inter_400Regular
} from '@expo-google-fonts/inter';


import jwtDecode from "jwt-decode";
import * as AuthSession from "expo-auth-session";


const auth0ClientId = "3LQagDWjq84lFei9y6lEg5JUeZtBBmMh";
const authorizationEndpoint = "https://linker-frontend.us.auth0.com/authorize";
const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });

const userService = UserService.getInstance();

async function persistLoggedInUser(jwt, decoded) {
    const userToPersist = {
        sub: decoded.sub,
        name: decoded.name,
        phone: "+5511234567",
        photo: decoded.picture,
        about: "I am a developer",
        linkedin: "https://www.linkedin.com/",
        github: "https://github.com/",
        location: "Rio Grande -- RS",
        interests: ["Java", "React", "React Native"],
    }

    try {
        await userService.saveUser(userToPersist);
    } catch(error) {
        console.log(error);
    }
}

function followAppFlow(props) {
    props.navigation.reset({
      index: 0,
      routes: [{
        name: props.route.params.id === 'desenvolvedor' ? 'DadosDevRoutes' : 'DadosEmpresaRoutes'
      }]
    });
}

let checkAuthInterval;

// React Native component with Auth0 Login button
function Login(props) {
    const [jwtToken, setJwtToken] = useState('');
    const [useProxy, setUseProxy] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    let decoded;
    if (jwtToken != '') {
        ApiClient.setAuthorizationToken(jwtToken);
        decoded = jwtDecode(jwtToken);
        console.log({
            jwtToken,
            decoded
        });
    }

    const [request, result, promptAsync] = AuthSession.useAuthRequest(
        {
            redirectUri,
            clientId: auth0ClientId,
            // id_token will return a JWT token
            responseType: "id_token",
            // retrieve the user's profile
            scopes: ["openid", "profile"],
            extraParams: {
                // ideally, this will be a random value
                nonce: "nonce",
            },
        },
        { authorizationEndpoint }
    );

    useEffect(() => {
        // set isAuthenticated to true if user exists in AsyncStorage
        AsyncStorage.getItem("user").then(function (user) {
            if (user) {
                setIsAuthenticated(true);
            }
        });

        AsyncStorage.getItem("jwttoken").then(function (jwt) {
            if (jwt) {
                setJwtToken(jwt);
            }
        });

        if (jwtToken) {
            clearInterval(checkAuthInterval);
            followAppFlow(props);
        }

        checkAuthInterval = setInterval(() => {
            if (result) {
                try {
                    const jwtToken = result.params.id_token;
                    console.log({jwtToken})
                    ApiClient.setAuthorizationToken(jwtToken);

                    const tokenPersistencePromise = AsyncStorage.setItem('jwttoken', jwtToken);
                    const userPersistencePromise = userService.saveUser(decoded);
                    Promise.all(tokenPersistencePromise, userPersistencePromise)
                        .then(async () => {
                            clearInterval(checkAuthInterval);
                            persistLoggedInUser(jwtToken, decoded);
                            setJwtToken(jwtToken);
                            setIsAuthenticated(true);
                        });
                } catch (error) {
                    console.log(error)
                }
                // followAppFlow(props);
            } else {
            }
        }, 2000)
    }, [result]);

    if (isAuthenticated) followAppFlow(props);



    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    const [fontsLoaded] = useFonts({
        Inter_600SemiBold,
        Inter_400Regular
    });

    if (!fontsLoaded) {
        return null;
    }

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={css.container}>
            <ImageBackground
                source={require('../../../assets/img/loginscreen.png')}
                resizeMode="cover"
                style={css.background} />
            <View style={css.content}>
                <Button disabled={!request} title="Log in with Auth0" onPress={() => promptAsync({ useProxy, showInRecents: true })} />
                <Button title="Save user" onPress={() => persistLoggedInUser(jwtToken, decoded)} />
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});

export default Login;



