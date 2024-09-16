import { Button } from "react-native";
import { TabNavigation, TabTypes } from "../routes/tab";
import { TabNavigationState, useNavigation } from "@react-navigation/native";

type ScreenProps = {
    title: string,
    screen:keyof TabNavigation,
    color: string
}

export default function ButtonTabRoutes({title, screen,color}:ScreenProps) {
    const navigation = useNavigation<TabTypes>();
    return (
        <Button
            color={color}
            title={title}
            onPress={() => navigation.navigate(screen)}
        />
    )
}