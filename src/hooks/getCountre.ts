import { useCallback, useEffect, useState } from "react";
import api from "../server/api";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

type Props = {
    capital: string
}

export default function useGetCountre({ capital }: Props) {
    const [countries, setCountries] = useState([]);
    const fetchCountries = async () => {
        try {
            const response = await api.get(`capital/${capital}`);
            setCountries(response.data);
        } catch (error) {
            console.error('Erro ao buscar países:', error);
        }
    };

    useFocusEffect(
        useCallback(() => {
            fetchCountries();
        }, [capital])
    );
    return { countries, fetchCountries }
}