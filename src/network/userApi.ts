import ApiClient from '.';
import {CREATE_USER, GET_USER} from '../constants/endpoint';
import {IUserPayload} from '../sagas/user';

export const createNewUser = async (payload: IUserPayload): Promise<any> => {
  return await ApiClient.post(CREATE_USER, {...payload});
};

export const getUserList = () => {
  return ApiClient.get(GET_USER);
};
