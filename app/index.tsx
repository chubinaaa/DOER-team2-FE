import { ImageBackground, Pressable, SafeAreaView, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { useRouter } from "expo-router";

export default function TabOneScreen() {
    const router = useRouter();

    const handleContinue = () => {
        router.push("/nextScreen");
    };
    return (
        <View style={styles.container}>
            <ImageBackground
                source={{
                    uri: "https://s3-alpha-sig.figma.com/img/88c5/ba94/7749f3110f5987917c742db34a329603?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dKa1OQKDQ~p80k3fU-wC5K4lFYwYmOb4p2olXfZ3Tm-Do8WZ63rgVXd2TxzsBo1ZTSCH6wy-WFzTSgQVZX2pq4NRtvLqJxM~~Cwa92c6pOQbioSxBfduEgcoV~fhW-J45qtvSc8bCyooYDe54Hx8gllekg9OIW1kwqgRb~oudfCw7Pme~faR0RzOcctnAO4UM9Cjt-Pg0How36QCrkRRNS8PpS1Miihwftc5BOrfuNEjRI8OQTx8pKF4uyT8Bdi7r4gG0fqJpxzoQENVFFg7w1eg7GvGWveIS05s6xpRa-KsnA2Osyn2ySiYmDQxN~Qv~XLyc674sXAjXNVmYlTikg__",
                }}
                style={[styles.background, { height: "100%", width: "100%" }]}
            >
                <SafeAreaView></SafeAreaView>
                <View style={styles.logo}>
                    <Text style={styles.logoLabel}>ლოგო</Text>
                </View>
                <Text style={styles.title}>გამარჯობა!</Text>
                <Text style={styles.text}>დაჯავშნე შენი საპარკინგე ადგილი მარტივად</Text>
                <Pressable
                    style={({ pressed }) => [
                        styles.button,
                        { backgroundColor: pressed ? "#4BA46C" : "#4BA46C" },
                    ]}
                    onPress={handleContinue}
                >
                    <Text style={styles.buttonText}>გაგრძელება</Text>
                </Pressable>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center",
    },
    logo: {
        width: 121,
        height: 81,
        backgroundColor: "#B2B0B0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "6%",
        marginLeft: "6%",
    },
    logoLabel: {
        color: "black",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "400",
    },
    background: {
        flex: 1,
        resizeMode: "cover",
    },
    title: {
        fontSize: 35,
        fontWeight: "bold",
        marginTop: "65%",
        marginLeft: "4%",
    },
    text: {
        fontSize: 20,
        fontWeight: "400",
        marginTop: "12%",
        marginLeft: "4%",
    },
    button: {
        marginVertical: 30,
        height: 65,
        width: "67%",
        borderRadius: 14,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginHorizontal: "auto",
    },
    buttonText: {
        fontSize: 28,
        fontWeight: "bold",
    },
});
