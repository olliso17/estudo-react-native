import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import useGetAllCountries from "../../hooks/getAllcountres";
import { useEffect, useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StackNavigation, StackTypes } from "../../routes/stack";
import { styles } from "./styles";
import api from "../../server/api";
import useGetRegions from "../../hooks/getRegions";


export default function Regions() {
    const route = useRoute<RouteProp<StackNavigation, 'Regions'>>()
    const [countre, setCountries] = useState()
    const navigation = useNavigation<StackTypes>();
    const { region } = route.params;
    const { regions, fetchRegions } = useGetRegions({ region });

    useEffect(() => {
        fetchRegions()
        console.log(regions)
    }, [regions])


    return (
        <LinearGradient style={styles.container} colors={['#42A5EB', "#2B6EEB"]}>
            <ScrollView showsVerticalScrollIndicator={true} style={styles.scroll} >
                <Text>Países da(s) {region}</Text>

                <View style={styles.viewContainer}>
                    <View style={styles.vieBody}>
                        <TextInput style={styles.textInput} placeholder="Pesquise o país:" />

                        <Pressable onPress={() => { console.log('foi') }} style={styles.button}>
                            <MaterialIcons name="search" size={24} color="black" />
                        </Pressable>
                    </View>
                    {
                        regions?.map((value, index) => (
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

