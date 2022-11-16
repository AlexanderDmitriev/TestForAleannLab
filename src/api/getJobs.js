import axios from 'axios';
import { BASIC_URL, TOKEN } from './basicData';

axios.defaults.headers.common = {'Authorization': `bearer ${TOKEN}`}

export const getData = async () => {
    try {
      const response = await axios.get(BASIC_URL);
      return response;
    } catch (error) {
      console.error('Sorry, We don`t have data');
    }
  };
