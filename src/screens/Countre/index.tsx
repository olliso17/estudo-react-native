import {Image, PermissionsAndroid, Platform, RefreshControl, ScrollView,Text, View } from "react-native";
import {useState } from "react";
import MapView, { Callout, Marker, PROVIDER_GOOGLE} from "react-native-maps";
import useGetCountre from "../../hooks/getCountre";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackNavigation } from "../../routes/stack";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";

type Props = NativeStackScreenProps<StackNavigation, 'Countre'>;

export default function Countre({ route }: Props) {
    const { capital } = route.params;
    const [refresh, setRefresh] = useState(false);
    const { countries } = useGetCountre({ capital });

    const onRefresh = () => {
        setRefresh(true)
        countries
        setRefresh(false)

    }


    return (
        <LinearGradient style={styles.container} colors={['#42A5EB', "#2B6EEB"]}>
            <ScrollView refreshControl={<RefreshControl refreshing={refresh} onRefresh={() => onRefresh} />}>
                {
                    countries?.map((data, index) => (

                        <View key={index}  >
                            <View style={styles.top}>
                                <LinearGradient colors={['#42A5EB', "#2B6EEB"]} style={styles.topImage}>
                                    <Image source={{ uri: data["coatOfArms"]['png'] }} resizeMode="contain"
                                        height={80} width={80} />
                                    {/* <Text style={styles.bandeira}>{data["flag"]} </Text> */}
                                </LinearGradient>

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

        </LinearGradient>
    )
}
