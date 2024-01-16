// Secure Storage library
import {persistCombineReducers} from 'redux-persist';
import createSecuredStorage from 'redux-persist-encrypted-storage';
import {userAuthSlice} from '../slice/user/slice';
import {isMobileCode} from '../utils';
import localStorage from 'redux-persist/es/storage';

const reducers = {
  [userAuthSlice.name]: userAuthSlice.reducer,
};

// Secure storage configurations
const secureStorage = isMobileCode() ? createSecuredStorage() : localStorage;
const securePersistConfig = {
  key: 'secure',
  storage: secureStorage,
  timeout: undefined,
  whitelist: [userAuthSlice.name],
};

// Setup Reducers
export const persistedRootReducer = persistCombineReducers(
  securePersistConfig,
  reducers,
);

export type RootState = ReturnType<typeof persistedRootReducer>;

export default persistedRootReducer;
