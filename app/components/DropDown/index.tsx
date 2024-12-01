// create drop down component
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "./style";
type Options = {
  currency: string;
  rate: number;
}[];

export default ({
  options,
  value,
  onValueChange,
}: {
  options: Options;
  value: string;
  onValueChange: (value: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setIsOpen(!isOpen)}
        style={styles.dropdown}
      >
        <Text>{value}</Text>
      </TouchableOpacity>
      <Modal
        visible={isOpen}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setIsOpen(false)} // note: this for android back button only
      >
        <TouchableWithoutFeedback onPress={() => setIsOpen(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select Currency</Text>
              {options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    onValueChange(option.currency);
                    setIsOpen(false); // Close modal after selection
                  }}
                  style={styles.option}
                >
                  <Text>{option.currency}</Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity
                onPress={() => setIsOpen(false)}
                style={styles.closeButton}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};
