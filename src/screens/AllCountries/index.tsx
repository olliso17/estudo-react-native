import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import useGetAllCountries from "../../hooks/getAllcountres";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { styles } from "./styles";
import { StackTypes } from "../../routes/stack";


export default function AllCountries() {
    const { countries, getAll } = useGetAllCountries();
    const navigation = useNavigation<StackTypes>();
    // const navigation = useNavigation<TabTypes>();

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

