import React from 'react';
import { Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface CurrencySelectorProps {
    label: string;
    value: string;
    onValueChange: (value: string) => void;
    exchangeRates: { currency: string; rate: number }[];
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({ label, value, onValueChange, exchangeRates }) => {
    return (
        <View>
            <Text>{label}:</Text>
            <Picker selectedValue={value} onValueChange={onValueChange}>
                {exchangeRates.map((item, index) => (
                    <Picker.Item key={index} label={item.currency} value={item.currency} />
                ))}
            </Picker>
        </View>
    );
};

export default CurrencySelector;
