import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#18181b",
        alignItems: "center",
    },
    scroll: {
        width: "100%",
    },
    likedVagas: {
        width: "100%",
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
    },
    title: {
        width: "100%",
        paddingVertical: 20,
        fontSize: RFPercentage(2),
        fontFamily: 'Inter_400Regular',
        color: "#fff",
        textAlign: "center",
    },
    likedVaga: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center",
    },
    vagaImage: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
    },
    likedVagaName: {
        width: "100%",
        height: 40,
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: RFPercentage(2),
        fontFamily: 'Inter_400Regular',
        color: "#fff",
        backgroundColor: "rgba(24, 24, 27, 0.7)",
    },

});

export {css};
