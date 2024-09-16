import { useEffect, useState } from "react";
import api from "../server/api";


export default function useGetCountre() {
    const [countries, setCountries] = useState([]);


    const getAll= async ()=> {

        const response = await api.get('capital/tallinn');
        // const response = await api.get('capital/{capital}');
        setCountries(response.data)
     

    }

    return {countries, getAll }
}