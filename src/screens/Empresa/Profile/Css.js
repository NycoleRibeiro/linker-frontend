import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const cssProfile = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#18181b",
        //alignItems: "center",
        //justifyContent: "center"
    },
    menuButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#18181b',
        width: '100%',
        height: '5%',
        borderBottomWidth: 0.5,
        borderBottomColor: '#09090A',
    },
    menuButton: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuButtonTextActive: {
        color: '#FE4072',
        fontSize: RFPercentage(1.8),
        textTransform: 'uppercase',
        fontFamily: 'Inter_700Bold',
    },
    menuButtonTextInactive: {
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

export const cssEditProfile = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#18181b",
    },
    containerFotos: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        height: 200,
        marginTop: "5%",
        marginHorizontal: 20,
    },
    fotoContainer: {
        width: '30%',
        height: '95%',
        marginRight: "5%",
        backgroundColor: "#3f3f46",
        borderRadius: 10,
    },
    foto: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    buttonAdd: {
        position: "relative",
        left: "90%",
        top: "90%",
        width: 25,
        height: 25,
        borderRadius: 50,
    },
    buttonDel: {
        position: "relative",
        left: "90%",
        bottom: "10%",
        width: 25,
        height: 25,
        borderRadius: 50,
    },
    buttonImage: {
        width: "100%",
        height: "100%",
    },
    title: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: RFPercentage(2),
        fontFamily: 'Inter_600SemiBold',
        textTransform: 'uppercase',
        color: '#f4f4f5',
        backgroundColor: '#1c1c20',
    },
    simpleInput: {
        marginHorizontal: 20,
        borderWidth: 0.8,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 5,
        borderColor: '#FD2B7A',
        borderRadius: 10,
        fontFamily: 'Inter_400Regular',
        fontSize: RFPercentage(1.8),
        color: '#f4f4f5',
    },
});


