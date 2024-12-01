// create drop down component
    import React, {useState} from 'react';
    import {View, Text, TouchableOpacity} from 'react-native';
    import {styles} from './style';
    type Options = {
        currency: string;
        rate: number;
    }[];

    export default ({options}: {options:Options}) => {
        const [isOpen, setIsOpen] = useState(false);
        const [selected, setSelected] = useState(options[0]);
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => setIsOpen(!isOpen)}
                    style={styles.dropdown}
                >
                    <Text>{selected.currency}</Text>
                </TouchableOpacity>
                {isOpen && (
                    <View style={styles.dropdown}>
                        {options.map((option, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => {
                                    setSelected(option);
                                    setIsOpen(false);
                                }}
                            >
                                <Text>{option.currency}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
            </View>
        );
    }
