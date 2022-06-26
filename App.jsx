import React, { useCallback, useState, useEffect } from 'react';
import {
  Button,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  Inter_600SemiBold,
  Inter_400Regular
} from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';
import jwtDecode from "jwt-decode";


import * as AuthSession from "expo-auth-session";


const auth0ClientId = "3LQagDWjq84lFei9y6lEg5JUeZtBBmMh";
const authorizationEndpoint = "https://linker-frontend.us.auth0.com/authorize";
const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });



export default function App() {

  const [name, setName] = useState(null);
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
    if (result) {
      if (result.error) {
        Alert.alert(
          "Authentication error",
          result.params.error_description || "something went wrong"
        );
        return;
      }
      if (result.type === "success") {
        // Retrieve the JWT token and decode it
        const jwtToken = result.params.id_token;
        const decoded = jwtDecode(jwtToken);

        const { name } = decoded;
        setName(name);
      }
    }
  }, [result]);


  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_400Regular
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  // print react native current route
  console.log(Routes.router.getCurrentRoute());

  return (
    <View style={styles.container}>
      {name ? (
        <SafeAreaView
          style={styles.safe}
          onLayout={onLayoutRootView}>
          <StatusBar
            barStyle={'light-content'}
            backgroundColor={'#18181b'}
            translucent={true} />
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </SafeAreaView>
      ) : (
        <Button
          disabled={!request}
          title="Log in with Auth0"
          onPress={() => promptAsync({ useProxy })}
        />
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  safe: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 40,
  },
});
