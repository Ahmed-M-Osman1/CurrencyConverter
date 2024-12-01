import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import CurrencySelector from '../components/CurrencySelector';
import CurrencyInput from '../components/CurrencyInput';

const exchangeRates = [
    { currency: 'USD', rate: 1 },
    { currency: 'EUR', rate: 0.85 },
    { currency: 'GBP', rate: 0.75 },
    { currency: 'JPY', rate: 110 },
    { currency: 'INR', rate: 73 },
    { currency: 'AUD', rate: 1.35 },
    { currency: 'CAD', rate: 1.25 },
    { currency: 'CNY', rate: 6.45 },
    { currency: 'BRL', rate: 5.3 },
];

export default function CurrencyConverter() {
    const [sourceCurrency, setSourceCurrency] = useState('USD');
    const [targetCurrency, setTargetCurrency] = useState('EUR');
    const [amount, setAmount] = useState('');
    const [convertedAmount, setConvertedAmount] = useState(null);

    const handleConversion = () => {
        if (isNaN(amount) || parseFloat(amount) <= 0) {
            alert('Please enter a valid amount.');
            return;
        }
        if (sourceCurrency === targetCurrency) {
            alert('Source and Target currencies cannot be the same.');
            return;
        }

        const sourceRate = exchangeRates.find((item) => item.currency === sourceCurrency)?.rate || 0;
        const targetRate = exchangeRates.find((item) => item.currency === targetCurrency)?.rate || 0;
        const result = (parseFloat(amount) * targetRate) / sourceRate;
        setConvertedAmount(result.toFixed(2));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Currency Converter</Text>

            <CurrencySelector
                label="Source Currency"
                value={sourceCurrency}
                onValueChange={setSourceCurrency}
                exchangeRates={exchangeRates}
            />

            <CurrencySelector
                label="Target Currency"
                value={targetCurrency}
                onValueChange={setTargetCurrency}
                exchangeRates={exchangeRates}
            />

            <CurrencyInput
                label={`Amount in ${sourceCurrency}`}
                value={amount}
                onChange={setAmount}
            />

            <Button title="Convert" onPress={handleConversion} />

            {convertedAmount !== null && (
                <Text style={styles.result}>
                    {amount} {sourceCurrency} = {convertedAmount} {targetCurrency}
                </Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
    },
    result: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
    },
});
