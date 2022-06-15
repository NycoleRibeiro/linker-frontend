import React, { useState } from 'react';

import PhoneInput from "react-native-phone-number-input";

function PhoneNumber() {
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    console.log("Country number:", formattedValue, "Number:", value);

    return (
        <PhoneInput
            defaultCode="BR"
            layout="second"
            placeholder="DDD + Número"
            withDarkTheme
            onChangeText={(text) => {
                setValue(text);
            }}
            onChangeFormattedText={(text) => {
                setFormattedValue(text);
            }}
            containerStyle={{
                backgroundColor: '#18181b',
                marginLeft: 40,
                marginTop: '30%',
                height: 50,
                width: '80%',
            }}
            textContainerStyle={{
                backgroundColor: '#18181b',
                paddingLeft: 10,
                marginLeft: 10,
                borderWidth: 1,
                borderBottomColor: '#FD2B7A',
                borderTopColor: '#18181b',
                borderLeftColor: '#18181b',
                borderRightColor: '#18181b',
            }}
            textInputStyle={{
                fontFamily: 'Inter_400Regular',
                color: '#f4f4f5',
            }}
            codeTextStyle={{
                color: '#f4f4f5',
            }}
            textInputProps={{
                placeholderTextColor: '#A1A1AA',
            }}
            countryPickerButtonStyle={{
                backgroundColor: '#1C1C20',
                borderRadius: 20,
            }}

        />
    )
}

export default PhoneNumber;
