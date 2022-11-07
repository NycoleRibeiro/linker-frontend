import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#18181b",
        alignItems: "center",
    },
    vagaAprovada: {
        flex: 1,
        flexDirection: "row",
    },
    imgEmpresa: {
        width: 60,
        height: 60,
        borderRadius: 60,
        marginTop: 10,
        marginLeft: 10,
        backgroundColor: "#fff",
        overflow: "hidden",
    },
    vagaImage: {
        width: "100%",
        height: "100%",
    },
    dadosVaga: {
        justifyContent: "center",
    },
    title: {
        width: "100%",
        paddingHorizontal: 20,
        fontSize: RFPercentage(2.2),
        fontFamily: 'Inter_600SemiBold',
        color: "#fff",
    },
    subtitle: {
        width: "100%",
        paddingHorizontal: 20,
        paddingTop: 5,
        fontSize: RFPercentage(2),
        fontFamily: 'Inter_600SemiBold',
        color: "#a1a1aa",
    },
});

export {css};
