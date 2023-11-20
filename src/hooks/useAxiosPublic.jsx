import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://e-credit-monitoring-server.vercel.app',
});

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;

