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

    const areas = props.value;
    const [selectedValues, setSelectedValues] = useState(areas);
    const [isPickerOpen, setIsPickerOpen] = useState(false);

    // Chama o callback do componente pai para atualizar a lista
    if (selectedValues !== props.value) {
        props.updateValue(selectedValues);
    }

    return (
        <View style={css.container}>
            <TouchableHighlight
            style={css.picker}
            onPress={() => setIsPickerOpen(!isPickerOpen)}
            >
                <>
                    <Text style={css.pickerText}>
                        {props.placeholder}
                    </Text>

                    {isPickerOpen
                    ? <MaterialIcons name="arrow-drop-up" size={30} color="#fff" />
                    : <MaterialIcons name="arrow-drop-down" size={30} color="#fff" />}
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
                    style={selectedValues.includes(item) ? css.pickerItemSelected : css.pickerItem}
                    onPress={() => {
                        // Se o item tiver na lista de valores selecionados, remove-o
                        if (selectedValues.includes(item)) {
                            setSelectedValues(selectedValues.filter(value => value !== item));
                        }
                        // Se o item não tiver na lista de valores selecionados, adiciona-o
                        else {
                            setSelectedValues([...selectedValues, item]);
                        }
                    }}
                    >
                        <>
                            {selectedValues.includes(item) &&
                            <MaterialIcons name="check" size={20} color="#fff" />
                            }
                            <Text
                            style={selectedValues.includes(item)
                            ? css.pickerItemSelectedText
                            : css.pickerItemText
                            }>
                                {item}
                            </Text>
                        </>
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
    pickerItemSelected: {
        flexDirection: 'row',
        paddingVertical: 10,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#30302a',
    },
    pickerItemText: {
        color: '#a1a1aa',
        fontFamily: 'Inter_400Regular',
        fontSize: RFPercentage(1.8),
    },
    pickerItemSelectedText: {
        color: '#fff',
        fontFamily: 'Inter_400Regular',
        fontSize: RFPercentage(1.8),
        marginLeft: 10,
    }
})

