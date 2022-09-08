import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";

export default function App() {
    return (
        <View style={styles.container}>
            {/* <Example1 /> */}
            <Example2 />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        // alignItems: "center",
        // justifyContent: "center",
    },
});
