import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#18181b",
        alignItems: "center",
    },
    title: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        fontSize: RFPercentage(2),
        fontFamily: 'Inter_400Regular',
        color: "#fff",
    },
    scroll: {
        width: "100%",
    },
    likedDevs: {
        width: "100%",
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
    },
    likedDev: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center",
    },
    devImage: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
    },
    likedDevName: {
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
