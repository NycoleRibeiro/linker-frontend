import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const css = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#18181b',
        textColor: '#fff',
    },
    h1: {
        fontSize: RFPercentage(5.3),
        color: '#fff',
        fontFamily: 'Inter_600SemiBold',
        marginTop: 80,
        paddingLeft: 40,
    },
    h1center: {
        fontSize: 35,
        color: '#fff',
        fontFamily: 'Inter_600SemiBold',
        marginTop: 80,
        textAlign: 'center',
    },
});

export {css};
