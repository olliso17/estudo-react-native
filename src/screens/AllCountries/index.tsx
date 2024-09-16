import { Button, Dimensions, FlatList, Image, Pressable, SafeAreaView, ScrollView, SectionList, StyleSheet, Text, View } from "react-native";
import useGetAllCountries from "../../hooks/getAllcountres";
import { useEffect } from "react";
import useGetCountre from "../../hooks/getCountre";

export default function AllCountries() {
    const { countries, getAll } = useGetAllCountries();
    const { pegaValor } = useGetCountre();

    // countries?.map((value) => {
    //     console.log(value)
    // })
    
    useEffect(() => {
        getAll();

    }, []);
   
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
                {
                    countries?.map((value, index) => (

                        <Pressable key={index} onPress={() => pegaValor(value["capital"])} style={styles.body}>
                            <Image source={{ uri: value["coatOfArms"]['png'] != "" ? value["coatOfArms"]['png'] : value["coatOfArms"]['svg'] }} resizeMode="contain"
                                height={40} width={40} />
                            < Text style={styles.text}>{value['name']['common']}</Text>

                        </Pressable>

                    ))
                }
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll: {
        width: "100%",
    },
    body: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "98%",
        height: 60,
        borderRadius: 10,
        borderWidth: 1,
        margin: 4,

    },
    text: {
        fontSize: 14,
        fontWeight: "bold",


    }
})