import { useCallback, useEffect, useState } from "react";
import api from "../server/api";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

type Props = {
   region: string
}

export default function useGetRegions({region }: Props) {
    const [regions, setRegions] = useState([]);
    const fetchRegions = async () => {
        try {
            const response = await api.get(`region/${region}`);
            setRegions(response.data);
        } catch (error) {
            console.error('Erro ao buscar as regiões:', error);
        }
    };

    useFocusEffect(
        useCallback(() => {
            fetchRegions();
        }, [region])
    );
    return { regions, fetchRegions }
}