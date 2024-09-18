import { Alert, Dimensions, Image, PermissionsAndroid, Platform, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useCallback, useEffect, useRef, useState } from "react";
import MapView, { Callout, Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";
import useGetCountre from "../../hooks/getCountre";
import { RouteProp, useFocusEffect, useNavigation } from "@react-navigation/native";
import { TabNavigation } from "../../routes/tab";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import api from "../../server/api";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigation } from "../../routes/stack";

type Props = NativeStackScreenProps<StackNavigation, 'Countre'>;

export default function Countre({ route }: Props) {
    const { capital } = route.params;
    const [refresh, setRefresh] = useState(false);
    const{countries}= useGetCountre({capital});
    
    const onRefresh = () => {
        setRefresh(true)
        countries
        setRefresh(false)

    }


    return (
        <ScrollView refreshControl={<RefreshControl refreshing={refresh} onRefresh={() => onRefresh} />}>
            {
                countries?.map((data, index) => (

                    <View key={index}  >
                        <View style={styles.top}>
                            <View style={styles.topImage}>
                                <Image source={{ uri: data["coatOfArms"]['png'] }} resizeMode="contain"
                                    height={90} width={90} />
                                {/* <Text style={styles.bandeira}>{data["flag"]} </Text> */}
                            </View>

                            <View style={styles.topTexts}>
                                < Text style={styles.text}>{'País: ' + data['name']['common']}</Text>
                                <Text style={styles.text}>{'Capital: ' + data["capital"]}</Text>
                                <Text style={styles.text}>{'Continente: ' + data["continents"]}</Text>
                                <Text style={styles.text}>{'Bandeira: ' + data["flag"]}</Text>
                                <Text style={styles.text}>{'Linguagens: ' + data["languages"]}</Text>
                                {/* <Text style={styles.text}>{'Moeda: ' + data["currencies"]["EUR"]["name"] + ' ' + data["currencies"]["EUR"]["symbol"]}</Text> */}
                            </View>
                        </View>
                        <View>

                            {
                                <MapView
                                    provider={PROVIDER_GOOGLE}
                                    style={styles.map}
                                    initialRegion={{
                                        latitude: data['latlng'][0],
                                        longitude: data['latlng'][1],
                                        latitudeDelta: 6,
                                        longitudeDelta: 6
                                    }} onMapReady={() => {
                                        Platform.OS === 'android' ?
                                            PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
                                                .then(
                                                    () => {
                                                        console.log('usuario aceitou')
                                                    }) : ''
                                    }}
                                    loadingEnabled={true}

                                >
                                    <Marker key={index} coordinate={{
                                        latitude: data['latlng'][0],
                                        longitude: data['latlng'][1],
                                    }} >
                                        <Callout>
                                            <View style={{ padding: 10 }}>
                                                <Text>{data['name']['common']}</Text>
                                            </View>
                                        </Callout>

                                    </Marker>
                                </MapView>
                            }


                        </View>
                    </View>
                ))

            }
        </ScrollView >


    )
}

const styles = StyleSheet.create({
    container: {

    },
    bandeira: {
        fontSize: 40
    },
    map: {
        marginTop: 10,
        width: Dimensions.get('screen').width,
        height: 700,
    },
    top: {
        flexDirection: "row",
        backgroundColor: "#E0E0E0",
        justifyContent: "center",
        alignItems: "center"
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