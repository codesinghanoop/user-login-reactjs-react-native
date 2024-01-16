import {RootState} from '../../store';

export const selectedCountry = (state: RootState) => state.USER_AUTH.country;

export const selectedLang = (state: RootState) => state.USER_AUTH.lang;

export const selectedUserName = (state: RootState) => state.USER_AUTH.userName;

export const selectedIsLoggedIn = (state: RootState) =>
  state.USER_AUTH.isLoggedIn;
