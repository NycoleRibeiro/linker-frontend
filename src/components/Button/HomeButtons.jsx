import { StyleSheet,
        TouchableHighlight,
        View,
        Image,
        } from "react-native";

import { RFPercentage } from "react-native-responsive-fontsize";


export default function HomeButtons(props) {
    return (
        <View style={css.buttonsSet}>
            <TouchableHighlight
            activeOpacity={0.8}
            underlayColor="#fe4072"
            onPress={() => props.onPressPass()}
            style={css.button}>
                <Image
                style={css.buttonImage}
                source={require('../../../assets/img/buttons/passButton.png')}/>
            </TouchableHighlight>

            <TouchableHighlight
            activeOpacity={0.8}
            underlayColor="#109a29"
            onPress={() => props.onPressOk()}
            style={css.button}>
                <Image
                style={css.buttonImageMiddle}
                source={require('../../../assets/img/buttons/okButton.png')}/>
            </TouchableHighlight>

            <TouchableHighlight
            activeOpacity={0.8}
            underlayColor="#ff7755"
            onPress={() => props.onPressReturn()}
            style={css.button}>
                <Image
                style={css.buttonImage}
                source={require('../../../assets/img/buttons/returnButton.png')}/>
            </TouchableHighlight>
        </View>
    )
}

const css = StyleSheet.create({
    buttonsSet: {
        flex: 0.2,
        backgroundColor: 'rgba(28, 28, 32, 0.9)',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '2%',
        borderRadius: 100,
    },
    buttonImage: {
        width: 70,
        height: 70,
    },
    buttonImageMiddle: {
        width: 85,
        height: 85,
    }
});

