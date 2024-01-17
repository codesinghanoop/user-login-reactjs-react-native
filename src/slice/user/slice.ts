import React from 'react';
import {createSlice, PayloadAction, createAction} from '@reduxjs/toolkit';
import {PURGE} from 'redux-persist';
import {CountryList, Languages, theme} from '../../constants/App';
import i18n from '../../i18n';
import {IUserPayload} from '../../sagas/user';

export const createUserAction =
  createAction<IUserPayload>('ACTION/CREATE_USER');
export const getUserListAction = createAction('ACTION/GET_USER_LIST');
export const loginAction = createAction<IUserPayload>('ACTION/LOGIN_USER');
export const changeLangAction =
  createAction<IUserPayload>('ACTION/CHANGE_LANG');

type IUser = {
  userName?: string;
  country?: string;
  lang?: string;
  theme?: string;
  password?: string;
  allUserData?: any;
  isLoggedIn?: boolean;
};

const userInitialState: IUser = {
  userName: '',
  password: '',
  country: CountryList.Uae,
  lang: Languages.English,
  theme: theme[CountryList.Uae],
  allUserData: [],
  isLoggedIn: false,
};

export const userAuthSlice = createSlice({
  name: 'USER_AUTH',
  initialState: userInitialState,
  reducers: {
    /**
     * Set all fetched Users
     */
    setAllUserData: (state, {payload}: PayloadAction<Array<IUser>>) => {
      state.allUserData = [...payload];
    },
    /**
     * Set User name
     */
    setUserName: (state, {payload}: PayloadAction<IUser>) => {
      state.isLoggedIn = true;
      state.userName = payload;
    },
    /**
     * Set User country
     */
    setUserCountry: (state, {payload}: PayloadAction<string>) => {
      state.country = payload;
    },
    /**
     * Set User lang
     */
    setUserLang: (state, {payload}: PayloadAction<string>) => {
      state.lang = payload;
      const isRTL = payload === 'ar';
      i18n.changeLanguage(payload);
    },
    /**
     * Set User lang on web
     */
    setWebUserLang: (state, {payload}: PayloadAction<string>) => {
      state.lang = payload;
      console.log('payloadpayloadpayload', payload);
      i18n.changeLanguage(payload);
    },
    /**
     * Set User selected theme
     */
    setUserTheme: (state, {payload}: PayloadAction<string>) => {
      state.theme = payload;
    },
    /**
     * Clear user data
     */
    clearUserState: state => {
      return Object.assign(state, userInitialState);
    },
  },
  extraReducers: builder => {
    builder.addCase(PURGE, () => {
      return userInitialState;
    });
  },
});

export const {
  clearUserState,
  setUserCountry,
  setUserLang,
  setUserName,
  setUserTheme,
  setAllUserData,
  setWebUserLang,
} = userAuthSlice.actions;
export default userAuthSlice.reducer;
