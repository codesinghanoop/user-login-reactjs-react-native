import React, {createContext} from 'react';
import {colors} from './colors';
import {useSelector} from 'react-redux';
import {selectedCountry} from '../slice/user/selector';
import {CountryList} from '../constants/App';

const ThemeContext = createContext<any>({});

const uaeTheme = {
  backgroundColor: colors.orange,
  buttonColor: colors.white,
  textColor: colors.black,
};

const indiaTheme = {
  backgroundColor: colors.saffron,
  buttonColor: colors.white,
  textColor: colors.black,
};

const ksaTheme = {
  backgroundColor: colors.green,
  buttonColor: colors.white,
  textColor: colors.black,
};

const germanyTheme = {
  backgroundColor: colors.red,
  buttonColor: colors.white,
  textColor: colors.black,
};

const getThemeByCountry = (countryName: string) => {
  switch (countryName) {
    case CountryList.Germany:
      return germanyTheme;
    case CountryList.India:
      return indiaTheme;
    case CountryList.Saudi:
      return ksaTheme;
    case CountryList.Uae:
      return uaeTheme;
    default:
      return uaeTheme;
  }
};

export default function ThemeContent({children}: {children: any}) {
  const userCountry = useSelector(selectedCountry);
  console.log('userCountryuserCountry', userCountry);

  const theme = getThemeByCountry(userCountry);
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => React.useContext(ThemeContext);
