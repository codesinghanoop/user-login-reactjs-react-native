import axios from 'axios';
import {BASE_URL} from '../constants/endpoint';

const ApiClient = axios.create({
  baseURL: BASE_URL,
  validateStatus: status => {
    return status < 400;
  },
});

export default ApiClient;
