import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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