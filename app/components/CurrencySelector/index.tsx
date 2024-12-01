import React from "react";
import { Text } from "react-native";
import DropDown from "@/app/components/DropDown";

interface CurrencySelectorProps {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  exchangeRates: { currency: string; rate: number }[];
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  label,
  value,
  onValueChange,
  exchangeRates,
}) => {
  return (
    <>
      <Text>{label}:</Text>
      <DropDown
        options={exchangeRates}
        value={value}
        onValueChange={onValueChange}
      />
    </>
  );
};

export default CurrencySelector;
