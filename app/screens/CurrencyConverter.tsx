import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import CurrencySelector from "../components/CurrencySelector";
import CurrencyInput from "../components/CurrencyInput";
import ExchangeRate from "@/constants/ExchangeRate";

export default function CurrencyConverter() {
  const [sourceCurrency, setSourceCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("EUR");
  const [sourceCurrencyAmount, setSourceCurrencyAmount] = useState<string>("");
  const [targetCurrencyAmount, setTargetCurrencyAmount] = useState<string>("");

  const convertCurrency = (
    amount: string,
    setState: (value: string) => void,
    isTarget: boolean,
  ) => {
    if (!amount || isNaN(Number(amount))) {
      setState("");
      return;
    }

    const sourceRate = ExchangeRate.find(
      (item) => item.currency === sourceCurrency,
    )?.rate;
    const targetRate = ExchangeRate.find(
      (item) => item.currency === targetCurrency,
    )?.rate;

    if (sourceRate && targetRate) {
      const finalAmount =
        (parseFloat(amount) / (isTarget ? targetRate : sourceRate)) *
        (isTarget ? sourceRate : targetRate);
      setState(finalAmount.toFixed(2));
    }
  };

  const handleSourceAmountChange = (amount: string) => {
    setSourceCurrencyAmount(amount);
    convertCurrency(amount, setTargetCurrencyAmount, false);
  };

  const handleTargetAmountChange = (amount: string) => {
    setTargetCurrencyAmount(amount);
    convertCurrency(amount, setSourceCurrencyAmount, true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Currency Converter</Text>
      <Text>Start typing to get your currency change</Text>
      <CurrencySelector
        label="Source Currency"
        value={sourceCurrency}
        onValueChange={setSourceCurrency}
        exchangeRates={ExchangeRate}
      />

      <CurrencyInput
        label={`Amount in ${sourceCurrency}`}
        value={sourceCurrencyAmount}
        onChange={handleSourceAmountChange}
      />

      <CurrencySelector
        label="Target Currency"
        value={targetCurrency}
        onValueChange={setTargetCurrency}
        exchangeRates={ExchangeRate}
      />

      <CurrencyInput
        label={`Amount in ${targetCurrency}`}
        value={targetCurrencyAmount}
        onChange={handleTargetAmountChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
});
