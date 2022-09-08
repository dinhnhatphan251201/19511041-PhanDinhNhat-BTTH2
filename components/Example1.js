import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const Example1 = () => {
    const [inputValue, setInputValue] = useState("");
    const [result, setResult] = useState("");

    const handleClick = () => {
        setResult(inputValue);
    };

    return (
        <View style={styles.container}>
            <View style={styles.inpurContainer}>
                <TextInput
                    value={inputValue}
                    onChangeText={(newText) => setInputValue(newText)}
                    style={styles.input}
                ></TextInput>
            </View>
            <Button onPress={handleClick} title="Click Me" />
            <View>
                <Text>input value: {result}</Text>
            </View>
        </View>
    );
};

export default Example1;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: "#fff",
        // alignItems: "center",
        // justifyContent: "center",
    },
    inpurContainer: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        height: 24,
        marginBottom: 20,
    },
    input: {
        height: 20,
        backgroundColor: "#ffffff",
        paddingLeft: 15,
        paddingRight: 15,
    },
});
