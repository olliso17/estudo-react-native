import { useEffect, useState } from "react";
import api from "../server/api";


export default function useGetAllCountries() {
    const [countries, setCountries] = useState([]);


    const getAll= async ()=> {

        const response = await api.get('all');
        setCountries(response.data)
     

    }

    return {countries, getAll }
}