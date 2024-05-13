import axios from 'axios';
import Cookies from 'universal-cookie';

const baseUrl = 'http://192.168.29.241:8000';

const cookies = new Cookies();
let token = cookies.get("SHYACRAFT_INHOUSE");

const axiosInstance = (obj) =>{ return axios.create({

    baseURL:baseUrl,
    data: obj.data,
    headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
    }


}) };

export default axiosInstance;