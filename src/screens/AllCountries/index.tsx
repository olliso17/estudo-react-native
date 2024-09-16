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
        <View style={styles.container}>
            {
                countries?.map((value, index) => (

                    <Pressable onPress={() => console.log('foi')} style={styles.body}>
                        <Image source={{ uri: value["coatOfArms"]['png'] != "" ? value["coatOfArms"]['png'] : value["coatOfArms"]['svg'] }} resizeMode="contain"
                            height={40} width={40} />
                        < Text style={styles.text}>{value['name']['common']}</Text>

                    </Pressable>



                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       flex:1,
       justifyContent: "flex-start",
       alignItems: "center",
       flexWrap:"wrap",
       flexDirection: "row",
       width: "100%"
    },
    body:{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: Dimensions.get("screen").width/2.5,
        borderRadius:10,
        borderWidth:1,
        margin:2,
        
    },
    text: {
        fontSize: 14,
        fontWeight: "bold",
        textDecorationLine:'line-through'

    }
})