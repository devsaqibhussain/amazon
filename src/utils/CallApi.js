import axios from 'axios';
import { BASE_URL } from './constants'

const config = {
    headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
    }
}

export const callAPI = async (resources) =>{
    const {data} = await axios.get(`${BASE_URL}/${resources}`,config);
    return data
}