import { Button, Image, Text, TextInput, View } from "react-native";
// import { styles } from "./style";
import {useNavigation } from '@react-navigation/native';
import { StackTypes } from "../../routes/stack";

export default function CreateUser() {
    const navigation = useNavigation<StackTypes>();

    return (
        <View>
            <View>
                <Text>Foi</Text>
                <Button
                    title="Home"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </View>

    )
}