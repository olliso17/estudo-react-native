import { Dimensions, StyleSheet } from "react-native";

export 
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
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 10,
        margin: 4,
        backgroundColor: "white",
        padding:6
    },
    topImage: {
        padding: 6,
        borderRadius: 10,
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center"
    },
    topTexts: {

        justifyContent: 'center',
        alignItems: 'flex-start',
        width: Dimensions.get('screen').width / 1.5,

        backgroundColor: "white"
    },
    text: {
        fontSize: 14,
        fontWeight: "bold"
    }
})