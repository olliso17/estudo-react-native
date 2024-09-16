import { Button, Dimensions, FlatList, Image, Pressable, SafeAreaView, ScrollView, SectionList, StyleSheet, Text, View } from "react-native";
import useGetAllCountries from "../../hooks/getAllcountres";
import { useEffect } from "react";

export default function AllCountries() {
    const { countries, getAll } = useGetAllCountries();

    countries?.map((value) => {
        console.log(value)
    })

    useEffect(() => {
        getAll();

    }, []);

    return (
        <>
            <ScrollView style={styles.container}>
                {
                    countries?.map((value, index) => (


                        <Pressable key={index} onPress={() => console.log('foi')} style={styles.body}>
                            <Image source={{ uri: value["coatOfArms"]['png'] != "" ? value["coatOfArms"]['png'] : value["coatOfArms"]['svg'] }} resizeMode="contain"
                                height={40} width={40} />
                            < Text style={styles.text}>{value['name']['common']}</Text>

                        </Pressable>




                    ))
                }
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        width: "100%"
    },
    body: {

        justifyContent: "flex-start",
        alignItems: "center",
        width: "40%",
        borderRadius: 10,
        borderWidth: 1,
        margin: 2,

    },
    text: {
        fontSize: 14,
        fontWeight: "bold",


    }
})