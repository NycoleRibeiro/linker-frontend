import { StyleSheet } from "react-native";

const css = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        justifyContent: 'center',
    },
    content: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: '30%',
    },
    loginButton: {
        flexDirection: 'row',
        width: '85%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 18,
        marginBottom: 12,
        borderRadius: 60,
        backgroundColor: '#fff',
        boxShadow: '5px 5px 2px rgba(255, 255, 255, 0.45)',
    },
    loginButtonIcon: {
        position: 'absolute',
        start: '5%',
    },
    loginButtonText: {
        fontSize: 16,
        color: '#726368',
        fontFamily: 'Inter_600SemiBold',
        //paddingLeft: '5%',
    },
});

export {css};