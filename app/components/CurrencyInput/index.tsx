import React from 'react';
import { TextInput, Text, View } from 'react-native';

interface CurrencyInputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({ label, value, onChange }) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput
                style={{ height: 40, borderColor: '#ccc', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 }}
                keyboardType="numeric"
                value={value}
                onChangeText={onChange}
                placeholder={`Enter amount`}
            />
        </View>
    );
};

export default CurrencyInput;
