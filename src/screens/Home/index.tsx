import { LinearGradient } from "expo-linear-gradient";
import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { StackTypes } from "../../routes/stack";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const navigation = useNavigation<StackTypes>();
  return (
    <LinearGradient style={styles.container} colors={["#42A5EB", "black"]}>
      <Text
        style={{
          margin: 10,
          fontSize: 22,
          fontWeight: "bold",
          textShadowColor: "#4964ff",
          textShadowOffset: { width: 0, height: 2 },
          textShadowRadius: 1,
        }}
      >
        Clique para ver o mundo
      </Text>
      <Pressable
        onPress={() => navigation.navigate("AllCountries")}
        style={{
          borderRadius: 200,
          backgroundColor: "white",
          width: 400,
          height: 400,
          margin: 12,
        }}
      >
        <Image
          source={require("../../assets/terra.jpg")}
          style={{
            borderRadius: 200,
            backgroundColor: "white",
            width: 400,
            height: 400,
          }}
        />
      </Pressable>
    </LinearGradient>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
