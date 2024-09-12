import { Button, Image, Text, TextInput, View } from "react-native";
// import { styles } from "./style";
import { themas } from "../../global/Themes";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackTypes } from "../../assets/routes/stack";

export default function CreateUser() {
    const navigation = useNavigation<StackTypes>();

    return (
        <View>
            {/* <View style={styles.boxTop}>
                <Image style={styles.image} source={require('../../assets/logo.jpeg')} />
                <Text style={styles.text}>Bem vindo ao app de teste!</Text>

            </View>
            <View style={styles.boxBody}>
                <Text style={styles.inputText}>Insira o Email:</Text>
                <View style={styles.boxInput}>
                    <TextInput />
                </View>
                <Text style={styles.inputText}>Insira a Senha:</Text>
                <View style={styles.boxInput}>
                    <TextInput />

                </View>
            </View>
            <View style={styles.boxFooter}>
                <Button color={themas.colors.colorButton} title="Clicar" />
            </View> */}
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