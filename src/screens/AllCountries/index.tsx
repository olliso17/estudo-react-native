import { Button, Image, Pressable, RefreshControl, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import useGetAllCountries from "../../hooks/getAllcountres";
import {useEffect } from "react";
import { TabNavigation } from "../../routes/tab";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type AllCountriesScreenProp = NativeStackNavigationProp<TabNavigation, 'AllCountries'>;

export default function AllCountries() {
    const { countries, getAll } = useGetAllCountries();
    const navigation = useNavigation<AllCountriesScreenProp>();

    useEffect(() => {

        getAll();

    }, []);

    return (
        <LinearGradient style={styles.container} colors={['#42A5EB', "#2B6EEB"]}>
            <ScrollView showsVerticalScrollIndicator={true} style={styles.scroll} >
                <View style={styles.viewContainer}>
                    <View style={styles.vieBody}>
                        <TextInput style={styles.textInput} placeholder="Pesquise o país:" />

                        <Pressable onPress={() => { console.log('foi') }} style={styles.button}>
                            <MaterialIcons name="search" size={24} color="black" />
                        </Pressable>
                    </View>

                    {
                        countries?.map((value, index) => (
                            <Pressable key={index} onPress={() => navigation.navigate('Countre', { capital: value['capital'][0] })} style={styles.body}>
                                <LinearGradient colors={['#42A5EB', "#2B6EEB"]} style={styles.image}>
                                    <Image source={{ uri: value["coatOfArms"]['png'] != "" ? value["coatOfArms"]['png'] : value["coatOfArms"]['svg'] }} resizeMode="contain"
                                        height={60} width={60} />
                                </LinearGradient>
                                <View style={styles.containerText}>
                                    < Text style={styles.text}>{value['name']['common']}</Text>
                                </View>
                            </Pressable>

                        ))
                    }
                </View>
            </ScrollView>
        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    scroll: {
        width: "100%",
    },
    viewContainer: {
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    vieBody: {
        width: "95%",
        backgroundColor: "white",
        height: 35,
        margin: 4,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

    },
    body: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "45%",
        height: 130,
        borderRadius: 10,
        borderWidth: 1,
        margin: 4,
        backgroundColor: 'white'

    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        width: "10%",
        borderWidth: 1,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderColor: "gray",
        height: "100%"
    },
    textInput: {
        height: "100%",
        width: "85%",
        marginLeft: 4,
        marginRight: 4
    },
    image: {
        width: "40%",
        // backgroundColor:"#7FC0EB",
        height: 100,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    containerText: {
        width: "50%",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 14,
        fontWeight: "bold",


    }
})