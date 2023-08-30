import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const queryHook = () => {
    return useQuery(['product'], () => {
        return axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                console.log(res);
                return res.data;
            })
            .catch((err) => {
                console.log(err);
                throw err;
            });
    });
};
