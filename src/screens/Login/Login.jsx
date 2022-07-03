import React, { useState, useEffect, useCallback } from 'react';
import { View, ImageBackground, StyleSheet, StatusBar, Button } from 'react-native';
import { css } from './Css.js';
import LoginButton from '../../components/Button/LoginButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
console.log(redirectUri);


async function persistLoggedInUser(jwt, decoded) {
  console.log("attempting to persist user in the database");
  const userToPersist = {
    name: decoded.name,
    phone: "+551 123 456",
    photo: decoded.picture,
    about: "I am a developer",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    state: "RS",
    city: "Rio Grande",
    interests: ["Java", "React", "React Native"],
  }
  // post the user to the server
  try {
    await fetch('http://0.0.0.0:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + jwt
      },
      body: JSON.stringify(userToPersist)
    });
  } catch (e) {
    console.log("Error persisting user in the database", e);
  }
}

function followAppFlow(props) {
  // Se for desenvolvedor redireciona para os dados iniciais do desenvolvedor
  props.navigation.reset({
    index: 0,
    routes: [{
      name: props.route.params.id === 'desenvolvedor' ? 'DadosDevRoutes' : 'DadosEmpresaRoutes'
    }]
  });

}

// React Native component with Auth0 Login button
function Login(props) {
  const [name, setName] = useState('');
  const [useProxy, setUseProxy] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // set isAuthenticated to true if user exists in AsyncStorage
    AsyncStorage.getItem("user").then(user => user ? setIsAuthenticated(true) : null);

    if (result) {
      try {
        const jwtToken = result.params.id_token;
        const decoded = jwtDecode(jwtToken);
        const tokenPersistencePromise = AsyncStorage.setItem('jwttoken', jwtToken);
        const userPersistencePromise = AsyncStorage.setItem('user', JSON.stringify(decoded));
        Promise.all(tokenPersistencePromise, userPersistencePromise)
          .then(async () => {
            await persistLoggedInUser(jwtToken, decoded);
            setIsAuthenticated(true);
          });
      } catch (error) {
        console.log(error)
      }
      // followAppFlow(props);
    }
  }, [result]);

  if (isAuthenticated) followAppFlow(props);


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
        <Button
          disabled={!request}
          title="Log in with Auth0"
          onPress={() => promptAsync({ useProxy, showInRecents: true })}
        />
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



