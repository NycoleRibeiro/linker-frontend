import React from 'react';
import { View,
        TouchableHighlight,
        StyleSheet,
        Linking,}
from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ContactButtons(props) {
    return (
        <View style={css.buttonsContainer}>
            {props.types.includes('phone') &&
            <TouchableHighlight
            activeOpacity={0.8}
            underlayColor="#18181f"
            onPress={() => Linking.openURL(`tel:${props.phone}`)}
            style={css.button}>

                <FontAwesome5 name="phone-alt" style={css.buttonIcon} />

            </TouchableHighlight>
            }

            {props.types.includes('whatsapp') &&
            <TouchableHighlight
            activeOpacity={0.8}
            underlayColor="#18181f"
            onPress={() => Linking.openURL(`https://api.whatsapp.com/send?phone=${props.phone}`)}
            style={css.button}>
                <FontAwesome5 name="whatsapp" style={css.buttonIcon} />
            </TouchableHighlight>
            }

            {props.types.includes('email') &&
            <TouchableHighlight
            activeOpacity={0.8}
            underlayColor="#18181f"
            onPress={() => Linking.openURL(`mailto:${props.email}`)}
            style={css.button}>

                <MaterialCommunityIcons name="email" style={css.buttonIcon} />

            </TouchableHighlight>
            }

            {props.types.includes('site') &&
            <TouchableHighlight
            activeOpacity={0.8}
            underlayColor="#18181f"
            onPress={() => Linking.openURL(`${props.site}`)}
            style={css.button}>

                <FontAwesome5 name="globe" style={css.buttonIcon} />

            </TouchableHighlight>
            }

            {props.types.includes('linkedin') &&
            <TouchableHighlight
            activeOpacity={0.8}
            underlayColor="#18181f"
            onPress={() => Linking.openURL(`${props.linkedin}`)}
            style={css.button}>
                <FontAwesome5 name="linkedin-in" style={css.buttonIcon} />
            </TouchableHighlight>
            }

            {props.types.includes('github') &&
            <TouchableHighlight
            activeOpacity={0.8}
            underlayColor="#18181f"
            onPress={() => Linking.openURL(`${props.github}`)}
            style={css.button}>
                <FontAwesome5 name="github" style={css.buttonIcon} />
            </TouchableHighlight>
            }


        </View>
    )
}

const css = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginTop: '2%',
        marginHorizontal: 40,
    },
    button: {
        width: 60,
        height: 60,
        borderRadius: 100,
        backgroundColor: '#FE4072',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonIcon: {
        color: '#f4f4f5',
        fontSize: 30,
    }
})

