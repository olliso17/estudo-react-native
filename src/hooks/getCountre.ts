import { useEffect, useState } from "react";
import api from "../server/api";
import { useNavigation } from "@react-navigation/native";
import { TabTypes } from "../routes/tab";



export default function useGetCountre() {
    const [countries, setCountries] = useState([]);
    const [aCapital, setCapital] = useState('');
    const navigation = useNavigation<TabTypes>();

    function pegaValor(value: React.SetStateAction<string>){
        setCapital(value);
    }
    const getAll= async ()=> {

        const response = await api.get(`capital ${aCapital}`);
        // const response = await api.get('capital/{capital}');
        setCountries(response.data)
     

    }

    return {countries, getAll , setCapital, pegaValor}
}