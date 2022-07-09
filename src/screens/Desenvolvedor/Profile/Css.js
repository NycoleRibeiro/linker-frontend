import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#18181b",
    },
    title: {
        width: "100%",
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 5,
        marginBottom: 5,
        fontSize: RFPercentage(2),
        fontFamily: 'Inter_600SemiBold',
        textTransform: 'uppercase',
        textAlign: "center",
        color: '#f4f4f5',
        backgroundColor: '#1c1c20',
    },
});

export {css};
