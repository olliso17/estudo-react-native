import { Button, Image, Text, TextInput, View } from "react-native";
import { styles } from "./style";
import { themas } from "../../global/Themes";
import { useNavigation } from "@react-navigation/native";
import { TabTypes } from "../../routes/tab";
// import { StackTypes } from "../../assets/routes/stack";

export default function Login() {
    // const navigation = useNavigation<StackTypes>();
    const navigation = useNavigation<TabTypes>();
    return (
        <View style={styles.container}>
            <View style={styles.boxTop}>
                <Image style={styles.image} source={require('../../assets/logo.png')} />
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
            </View>
            <View>
                <Button
                    title="Campo de Cadastro"
                    onPress={() => navigation.navigate('CreateUser')}
                />
            </View>
        </View>

    )
}