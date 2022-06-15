import React, { useCallback } from "react";
import { NativeBaseProvider,
        Box,
        StatusBar } from "native-base";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts,
        Inter_600SemiBold,
        Inter_400Regular } from '@expo-google-fonts/inter';


export default function App() {

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

    return (
        <NativeBaseProvider>
            <StatusBar
            barStyle={'light-content'}
            backgroundColor={'#18181b'}
            translucent={true} />
            <Box size="full" safeAreaTop>
                Hello world
            </Box>
        </NativeBaseProvider>
    );
}
