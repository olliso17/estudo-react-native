import { useState } from "react";
import api from "../server/api";


export default async function useGetAllCountries() {
    const [countre, setCountre] = useState([]);
    try {
        const response = await api.get('/all');
        setCountre(response.data)
        return countre;

    } catch (error) {
        console.log("Error" + error)
    }

}