import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/Themes";


const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    boxTop: {
        width: "100%",
        height:height * .1,
        backgroundColor: themas.colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'flex-start',

    },
    image: {
        resizeMode: 'contain',
        borderRadius: 20
    },

    boxBody: {
        width: "100%",
        height: height * .7,
        backgroundColor: themas.colors.primaryColor,
        justifyContent: 'center',
        alignItems: "center"

    },
    boxFooter: {
        width: "100%",
        height: height * .1,
        backgroundColor: themas.colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',

    }
})