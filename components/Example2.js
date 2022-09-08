import React, { useState } from "react";
import {
    Button,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

const Example2 = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View></View>
            <View style={styles.header}>
                <Text style={styles.appName}>MY APP</Text>
            </View>
            <View>
                <View style={styles.form}>
                    <TextInput></TextInput>
                    <TextInput></TextInput>
                </View>
                <View>
                    <Button title="Login" />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Example2;

const TEXT = {
    color: "#fff",
    textAlign: "center",
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FF0055",
        flex: 1,
        alignItems: "center",
        paddingTop: 200,
    },
    header: {},
    appName: {
        ...Text,
        fontSize: 30,
    },
    form: {},
});
