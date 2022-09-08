import React, { useState } from "react";
import {
    Button,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
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
                    <TextInput
                        // value={inputPassword}
                        autoFocus={true}
                        style={styles.input}
                        placeholder="User Name"
                        placeholderTextColor="#929292"
                    />
                    <TextInput
                        // value={inputPassword}
                        autoFocus={true}
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#929292"
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style={styles.buttonLogin}>
                        <Text style={styles.buttonLoginText}>Đăng Nhập</Text>
                    </TouchableOpacity>
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
    form: {
        alignItems: "center",
        marginTop: 70,
        position: "relative",
        width: 300,
    },
    input: {
        backgroundColor: "#fff",
        height: 50,
        borderRadius: 20,
        width: 300,
        textAlignVertical: "center",
        paddingHorizontal: 50,
        fontSize: 20,
        textAlign: "center",
    },
    buttonLogin: {
        marginTop: 30,
        backgroundColor: "#99001A",
        width: 300,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    },
});
