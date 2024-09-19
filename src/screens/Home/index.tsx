import { LinearGradient } from "expo-linear-gradient";
import { Button, Image, StyleSheet, View } from "react-native";
import { StackTypes } from "../../routes/stack";
import { useNavigation } from "@react-navigation/native";

export function Home() {
    const navigation = useNavigation<StackTypes>();
    return (
        <LinearGradient style={styles.container} colors={['#42A5EB', "#2B6EEB"]}>
            <View style={{ borderRadius: 200, backgroundColor: "white", width: 300, height: 300, margin: 12 }}>
                <Image source={require("../../assets/terra.jpg")} style={{ borderRadius: 200, backgroundColor: "white", width: 300, height: 300 }}/>
            </View>
            <Button
                color={"blue"}
                title={"AllCountries"}
                onPress={() => navigation.navigate('AllCountries')}
            />
        </LinearGradient>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"

    },
})