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
  Inter_700Bold,
  Inter_600SemiBold,
  Inter_400Regular
} from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';
import jwtDecode from "jwt-decode";
import * as AuthSession from "expo-auth-session";


export default function App() {

  let [fontsLoaded] = useFonts({
    Inter_700Bold,
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

  return (
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
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
