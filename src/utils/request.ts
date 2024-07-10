/* eslint-disable prettier/prettier */
import axios from 'axios';
import Config from 'react-native-config';

export const request = ({ url, method, data }: any) => {
    return axios({
        url: `${Config.API_BASE_URL}${url}`,
        method: method || 'GET',
        data,
    });
};
