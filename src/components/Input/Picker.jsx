import React, { useState } from 'react';
import { View,
        Text,
        ScrollView,
        TouchableHighlight,
        StyleSheet,
        } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { RFPercentage } from "react-native-responsive-fontsize";


export default function Picker(props) {
    var PickerValue = props.value;

    if (PickerValue === '') {
        PickerValue = props.placeholder
    }

    const [selectedValue, setSelectedValue] = useState(PickerValue);
    const [isPickerOpen, setIsPickerOpen] = useState(false);

    return (
        <View style={css.container}>
            <TouchableHighlight
            style={css.picker}
            onPress={() => setIsPickerOpen(!isPickerOpen)}
            >
                <>
                <Text style={css.pickerText}>{selectedValue}</Text>
                {isPickerOpen ? <MaterialIcons name="arrow-drop-up" size={30} color="#fff" /> : <MaterialIcons name="arrow-drop-down" size={30} color="#fff" />}
                </>
            </TouchableHighlight>

            {isPickerOpen &&
            <ScrollView
            style={css.pickerModal}
            nestedScrollEnabled={true}
            showsVerticalScrollIndicator
            >
            {props.items.map((item, index) => {
                return (
                    <TouchableHighlight
                    key={index}
                    style={css.pickerItem}
                    onPress={() => {
                        setSelectedValue(item);
                        setIsPickerOpen(false);
                        if (selectedValue !== props.value) {
                            props.updateValue(item);
                        }
                    }}
                    >
                        <Text style={css.pickerItemText}>{item}</Text>
                    </TouchableHighlight>
                )
            }
            )}
            </ScrollView>
            }


        </View>
    )
}

const css = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    picker: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FD2A7B',
        borderRadius: 10,
        paddingVertical: 5,
        zIndex: 2,
    },
    pickerText: {
        color: '#fff',
        fontFamily: 'Inter_600SemiBold',
        fontSize: RFPercentage(1.8),
        paddingLeft: 10,
    },
    pickerModal: {
        backgroundColor: '#27272a',
        maxHeight: 150,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginBottom: 10,
        marginTop: -5,
        zIndex: 1,
    },
    pickerItem: {
        paddingVertical: 10,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#30302a',
    },
    pickerItemText: {
        color: '#fff',
        fontFamily: 'Inter_400Regular',
        fontSize: RFPercentage(1.8),
    },
})

