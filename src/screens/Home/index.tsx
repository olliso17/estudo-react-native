import { Image, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TabTypes } from "../../routes/tab";
import { styles } from "./style";

export default function Home() {
    const navigation = useNavigation<TabTypes>();
    return (
        <View style={styles.container}>
            <View style={styles.boxTop}>
                <Text>Bem vido ao app fofo de estudos</Text>
            </View>
            <View style={styles.boxBody}>
                <Image style={styles.image} source={require('../../assets/bluey.png')}/>
            </View>
            <View></View>
        </View>

    )
}