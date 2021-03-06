import React, { useState } from 'react';
import {View,
        Text,
        StyleSheet,
        TextInput,
        TouchableHighlight,
        } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";
import { Ionicons } from '@expo/vector-icons';


export default function TagsInput(props) {
    const [valor, setValor] = useState('');
    const [tags, setTags] = useState(props.tags);


    const addTag = (tag) => {
        setValor([...valor, tag]);
        if (tag.slice(-1) == ',') {
            tag = tag.slice(0, -1);
            setTags([...tags, tag]);
            setValor('');
        }
    }

    const removeTag = (tag) => {
        setTags(tags.filter(t => t !== tag));
    }

    if (tags.length != props.tags.length) {
        props.updateTags(tags);
    }

    return (
        <>
            <TextInput
                style={css.simpleInput}
                placeholder={props.placeholder}
                placeholderTextColor="#A1A1AA"
                selectionColor="#f4f4f5"
                keyboardType="default"
                autoCapitalize='words'
                maxLength={30}
                multiline={false}
                autoCorrect={false}
                value={valor}
                onChangeText={addTag}
            />

            {/* Tags */}
            <View style={css.tags}>
                {tags.map((tag, index) => (
                    <TouchableHighlight
                    style={css.tag}
                    underlayColor="#fd2a7b"
                    onPress={() => removeTag(tag)}
                    >
                        <>
                        <Text key={index} style={css.tagText}>
                            {tag}
                        </Text>
                        <Ionicons name="close" style={css.tagIcon} />
                        </>
                    </TouchableHighlight>
                ))}
            </View>

        </>
    )
}

const css = StyleSheet.create({
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
    tags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 20,
        marginVertical: 5,
    },
    tag: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FE4072',
        borderRadius: 100,
        paddingVertical: 3,
        marginRight: 5,
        marginBottom: 5,
    },
    tagText: {
        paddingLeft: 10,
        color: '#f4f4f5',
        fontFamily: 'Inter_400Regular',
        fontSize: RFPercentage(1.5),
        textAlign: 'center',
    },
    tagIcon: {
        paddingRight: 5,
        color: '#f4f4f5',
        fontSize: RFPercentage(2.3),
        marginLeft: 5,
    }
});
