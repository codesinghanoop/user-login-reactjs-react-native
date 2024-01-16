import {CountryList} from '../constants/App';
// import {Platform} from 'react-native';

export const validateUaeUsername = (username: string) => {
  const regex = new RegExp(/^[a-zA-Z0-9]*$/); //To check if string is alphanumeric
  return regex.test(username);
};

export const validateIndiaUsername = (username: string) => {
  const regex = new RegExp(/^[a-zA-Z][a-zA-Z0-9]*$/); //To check if string starts with a letter
  return regex.test(username);
};

export const validateGermanyUsername = (username: string) => {
  const regex = new RegExp(/^([a-zA-Z]+_?[a-zA-Z]+)*$/); //To check if there is underscore between letters
  return regex.test(username);
};

export const validateSaudiUsername = (username: string) => {
  const regex = new RegExp(/^([a-zA-Z]+-?[a-zA-Z]+)*$/); //To check if there is hyphen between letters
  return regex.test(username);
};

export const transformModalList = (list: Array<any>) => {
  return list?.map((item: any, index) => {
    return {
      key: index,
      label: item,
    };
  });
};

export const transformWebModalList = (list: Array<any>) => {
  return list?.map((item: any, index) => {
    return {
      id: index,
      label: item,
    };
  });
};

export const getRegexByCountry = (country: string) => {
  switch (country) {
    case CountryList.Germany:
      return /^([a-zA-Z]+_[a-zA-Z]+)*$/; //To check if there is underscore between words

    case CountryList.India:
      return /^[a-zA-Z][a-zA-Z0-9]*$/; //To check if string starts with a letter

    case CountryList.Saudi:
      return /^([a-zA-Z]+-[a-zA-Z]+)*$/; //To check if there is hyphen between words

    case CountryList.Uae:
      return /^[a-zA-Z0-9]*$/;

    default:
      return /^[a-zA-Z0-9]*$/;
  }
};

export const getUsernameLengthByCountry = (country: string) => {
  switch (country) {
    case CountryList.Germany:
      return 7;

    case CountryList.India:
      return 6;

    case CountryList.Saudi:
      return 7;

    case CountryList.Uae:
      return 5;

    default:
      return 8;
  }
};

export const isMobileCode = async () => {
  return typeof document !== 'undefined' ? false : true;
};
