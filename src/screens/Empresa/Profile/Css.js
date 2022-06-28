import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#18181b",
        alignItems: "center",
        justifyContent: "center"
    },
    header: {
        width: '100%',
        height: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#18181b'
    },
    bioContainer: {
        width: '100%',
        minHeight: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#18181b',
        paddingVertical: 5
    },
    imageContainer: {
        width: 120,
        height: 120,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImage: {
        width: "100%",
        height: "100%",
        borderRadius: 100,
        resizeMode: 'cover'
    },
    nomeEmpresa: {
        fontSize: RFPercentage(3.5),
        color: '#f4f4f4',
        fontFamily: 'Inter_700Bold',
        marginTop: 5,
    },
    bioEmpresa: {
        fontSize: RFPercentage(1.8),
        color: '#a1a1aa',
        fontFamily: 'Inter_400Regular',
        textAlign: 'center',
        paddingHorizontal: 20,
        marginTop: 5
    },
    menuButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#18181b',
        width: '100%',
        height: '5%'
    },
    menuButton: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuButtonTextVagas: {
        color: '#FE4072',
        fontSize: RFPercentage(1.8),
        textTransform: 'uppercase',
        fontFamily: 'Inter_700Bold',
    },
    menuButtonTextEdit: {
        color: '#A1A1AA',
        fontSize: RFPercentage(1.8),
        textTransform: 'uppercase',
        fontFamily: 'Inter_700Bold',
    },
    buttonCriarVaga: {
        position: 'absolute',
        width: 50,
        height: 50,
        right: 10,
        bottom: "2%",
        borderRadius: 100,
        backgroundColor: '#4caf50',
        //backgroundColor: '#fe4072',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        shadowColor: '#000',
    },
    buttonCriarVagaText: {
        color: '#f4f4f5',
        fontSize: RFPercentage(4),
        fontFamily: 'Inter_700Bold',
        textTransform: 'lowercase',
    },
});

export {css};
