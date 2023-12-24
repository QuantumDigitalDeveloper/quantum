import axios from 'axios';

export async function imagePortoList(){
    const ROOT_API = process.env.NEXT_PUBLIC_API;

    const response = await axios.get(`${ROOT_API}api/gallery`);
    const axiosResponse = response.data;

    return axiosResponse;
}

