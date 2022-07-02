import React from 'react';
import { View,
        Text,
        Pressable, }
        from 'react-native';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { RFPercentage } from "react-native-responsive-fontsize";

export default function Vaga(props) {
    return (
        <Pressable
        key={props.key}
        onPress={() => console.log('Pressed!')}
        style={({ pressed }) => [
            {
              backgroundColor: pressed
                ? '#151517'
                : '#1c1c20'
            },
            styles.container
          ]}>

            <MaterialCommunityIcons
            style={styles.icon}
            name="dots-grid"
            size={28}
            color="#52525b" />

            <Text
            numberOfLines={1}
            adjustsFontSizeToFit
            style={styles.title}>
                {props.title}
            </Text>

            <Text style={styles.salary}>
                R$ {props.salary}
            </Text>

            <View style={styles.areasContainer}>
                {props.areas.map((area) => (
                    <Text style={styles.area}>{area}</Text>
                ))}
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        minHeight: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
        paddingHorizontal: 10,
    },
    icon: {
        position: 'absolute',
        left: 10,
        top: 10,
    },
    title: {
        fontSize: RFPercentage(2.4),
        color: '#f4f4f4',
        fontFamily: 'Inter_700Bold',
        marginTop: 10,
    },
    salary: {
        fontSize: RFPercentage(2),
        color: '#a1a1aa',
        fontFamily: 'Inter_600SemiBold',
        marginTop: 5,
    },
    areasContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    area: {
        fontSize: RFPercentage(1.9),
        color: '#f4f4f5',
        fontFamily: 'Inter_400Regular',
        marginRight: 5,
        backgroundColor: '#27272a',
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 50,
    },
});
