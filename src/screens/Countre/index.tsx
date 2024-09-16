import { Button, Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { getCurrentPositionAsync, LocationAccuracy, LocationObject, requestForegroundPermissionsAsync, watchPositionAsync } from "expo-location";
import MapView, { Marker } from "react-native-maps";
import useGetCountre from "../../hooks/getCountre";

export default function Countre() {
    const { countries, getAll } = useGetCountre();

    countries?.map((value, index) => {
        console.log(value)
    })

    useEffect(() => {
        getAll();

    }, []);


    return (
        <>
            {
                countries?.map((value, index) => (
                    <View>
                        <View style={styles.top}>
                            <View style={styles.topImage}>
                                <Image source={{ uri: value["coatOfArms"]['png'] }} resizeMode="contain"
                                    height={90} width={90} />
                                {/* <Text style={styles.bandeira}>{value["flag"]} </Text> */}
                            </View>

                            <View style={styles.topTexts}>
                               < Text style={styles.text}>{'País: ' + value['name']['common']}</Text>
                                <Text style={styles.text}>{'Capital: ' + value["capital"]}</Text>
                                <Text style={styles.text}>{'Continente: ' + value["continents"]}</Text>
                                <Text style={styles.text}>{'Bandeira: ' + value["flag"]}</Text>
                                <Text style={styles.text}>{'Linguagem: ' + value["languages"]['est']}</Text>
                                <Text style={styles.text}>{'Moeda: ' + value["currencies"]["EUR"]["name"] + ' ' + value["currencies"]["EUR"]["symbol"]}</Text>
                            </View>
                        </View>
                        <View>

                            {
                                <MapView style={styles.map} initialRegion={{
                                    latitude: value['latlng'][0],
                                    longitude: value['latlng'][1],
                                    latitudeDelta: 8,
                                    longitudeDelta: 8
                                }} >
                                    <Marker coordinate={{
                                        latitude: value['latlng'][0],
                                        longitude: value['latlng'][1],
                                    }} />
                                </MapView>
                            }
                            {/* <ButtonTabRoutes color="blue" title="Home" screen="Home" /> */}

                        </View>
                    </View>
                ))
            }
        </>


    )
}

const styles = StyleSheet.create({
    container: {

    },
    bandeira:{
        fontSize:40
    },
    map: {
        marginTop: 10,
        width: Dimensions.get('screen').width,
        height: 700,
    },
    top: {
        flexDirection: "row",
        backgroundColor: "#E0E0E0",
        justifyContent:"center",
        alignItems:"center"
    },
    topImage: {
        padding: 6,
        borderRadius: 100,
        width: 100,
        height: 100,
        // backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center"
    },
    topTexts: {
        margin: 6,
        padding: 6,
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: Dimensions.get('screen').width / 1.4,
        borderRadius: 10,
        borderWidth: 1,
        borderStyle: "dotted",
        backgroundColor: "white"
    },
    text: {
        fontSize: 14,
        fontWeight: "bold"
    }
})