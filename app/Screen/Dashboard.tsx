import React, {useLayoutEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import useLogin from '../../src/hook/useLogin';
import {
  selectedCountry,
  selectedLang,
  selectedUserName,
} from '../../src/slice/user/selector';
import {clearUserState, setUserName} from '../../src/slice/user/slice';
import {Container, Title} from '../Component/Common';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity} from 'react-native';
import {AppRoute} from '../../src/constants/routes';
import { useTheme } from '../../src/theme/theme';
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
  const userCountry = useSelector(selectedCountry);
  const userLang = useSelector(selectedLang);
  const userName = useSelector(selectedUserName);
  const dispatch = useDispatch();
  const {setOptions, replace} = useNavigation();
  const theme = useTheme();
  const {t} = useTranslation();

  const onPressLogout = () => {
    dispatch(clearUserState());
    replace(AppRoute.Login);
  };

  useLayoutEffect(() => {
    setOptions({
      headerRight: props => (
        <TouchableOpacity onPress={onPressLogout}>
          <Text
            {...props}
            name={'search'}
            size={22}
            color="white"
            style={{marginRight: 15}}>
            {t('dashboard.logout')}
          </Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <Container theme={theme}>
      <Title theme={theme}>{t('dashboard.loginUsername')}:- {userName}</Title>
      <Title theme={theme}>{t('dashboard.langSelected')}:- {userLang}</Title>
      <Title theme={theme}>{t('dashboard.countrySelected')}:- {userCountry}</Title>
    </Container>
  );
};

export default Dashboard;
