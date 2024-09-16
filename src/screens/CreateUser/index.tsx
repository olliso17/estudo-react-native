import { Button, Image, Text, TextInput, View } from "react-native";
import ButtonTabRoutes from "../../components/ButtonRoutes";
import useGetAllCountries from "../../hooks/getAllcountres";

export default function CreateUser() {
    const countre = useGetAllCountries();
    console.log(countre)
    return (
        <View>
            <View>
                <Text>Foi</Text>
                <ButtonTabRoutes color="blue" title="Home" screen="Home" />
            </View>
        </View>

    )
}