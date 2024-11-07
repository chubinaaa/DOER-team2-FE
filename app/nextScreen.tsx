import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";

export default function TabOneScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>შემდეგი ეკრანი...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    text: {
        fontSize: 20,
        fontWeight: "400",
        marginTop: "12%",
        marginLeft: "4%",
    },
});
