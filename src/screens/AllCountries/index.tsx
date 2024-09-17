import { Image, Pressable, RefreshControl, ScrollView, StyleSheet, Text, View } from "react-native";
import useGetAllCountries from "../../hooks/getAllcountres";
import { useCallback, useEffect, useState } from "react";
import { TabNavigation } from "../../routes/tab";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../routes/stack";


type AllCountriesScreenProp = NativeStackNavigationProp<TabNavigation, 'AllCountries'>;

export default function AllCountries() {
    const { countries, getAll } = useGetAllCountries();
    const navigation = useNavigation<AllCountriesScreenProp>();
 
    useEffect(() => {
    
        getAll();

    }, []);

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll} >
                {
                    countries?.map((value, index) => (
                        <Pressable key={index} onPress={() => navigation.navigate('Countre', { capital: value['capital'][0]})} style={styles.body}>
                            <Image source={{ uri: value["coatOfArms"]['png'] != "" ? value["coatOfArms"]['png'] : value["coatOfArms"]['svg'] }} resizeMode="contain"
                                height={40} width={40} />
                            < Text style={styles.text}>{value['name']['common']}</Text>

                        </Pressable>

                    ))
                }
            </ScrollView>
        </View >

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
        backgroundColor: 'gray'

    },
    text: {
        fontSize: 14,
        fontWeight: "bold",


    }
})