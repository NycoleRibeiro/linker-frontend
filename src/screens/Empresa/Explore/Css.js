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
    categorias: {
        width: "100%",
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        //marginTop: 20,
    },
    title: {
        width: "100%",
        paddingVertical: 20,
        fontSize: RFPercentage(2),
        fontFamily: 'Inter_400Regular',
        color: "#fff",
        textAlign: "center",
    },
    categoria: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    categoriaImage: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
    },
    categoriaName: {
        width: "90%",
        height: "100%",
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: RFPercentage(2.5),
        fontFamily: 'Inter_700Bold',
        color: "#fff",
        //backgroundColor: "rgba(24, 24, 27, 0.8)",
    },
});

export {css};
