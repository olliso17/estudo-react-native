import { StyleSheet } from "react-native";
import { themas } from "../../global/Themes";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    boxTop: {
        width:"100%",
        height:200,
        backgroundColor:themas.colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',

    },
    image:{
        width:100,
        height:130,
        borderRadius:20
    },
    text:{
        fontWeight:"bold",
        fontSize:16,
        paddingTop:30
    },
    inputText:{
        fontSize:12,
        marginTop:10
    },
    boxInput:{
        width:"100%",
        height:40,
        backgroundColor:themas.colors.inputColor,
        marginTop:10,
        borderRadius:10
    },
    boxBody: {
        width:"100%",
        height:200,
        backgroundColor:themas.colors.primaryColor,
        justifyContent: 'center',
        padding:17

    },
    boxFooter: {
        width:"100%",
        height:200,
        backgroundColor:themas.colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',

    }
})