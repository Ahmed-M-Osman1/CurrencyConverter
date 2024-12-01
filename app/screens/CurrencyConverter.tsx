import { Text, View } from "react-native";
import DropDown from "@/components/DropDown";
import ExchangeRate from "@/constants/ExchangeRate";
export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <DropDown options={ExchangeRate} />
        </View>
    );
}
