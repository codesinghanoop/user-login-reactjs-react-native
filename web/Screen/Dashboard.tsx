import React, {useLayoutEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import useLogin from '../../src/hook/useLogin';
import {
  selectedCountry,
  selectedLang,
  selectedUserName,
} from '../../src/slice/user/selector';
import {clearUserState} from '../../src/slice/user/slice';
import {Container, Title} from '../../app/Component/Common.web';
import {WebRoute} from '../../src/constants/routes';
import { useTheme } from '../../src/theme/theme';
import { useTranslation } from 'react-i18next';

const Dashboard = props => {
  const userCountry = useSelector(selectedCountry);
  const userLang = useSelector(selectedLang);
  const userName = useSelector(selectedUserName);
  const dispatch = useDispatch();
  const theme = useTheme();
  const {t} = useTranslation();

  const onPressLogout = () => {
    dispatch(clearUserState());
    props.history.replace(WebRoute.Login);
  };

  const getLogoutButton = () => (
    <span
      name={'search'}
      size={22}
      color="white"
      onClick={onPressLogout}
      style={{marginRight: 15}}>
      Logout
    </span>
  );

  return (
    <Container theme={theme}>
      <Title theme={theme}>{t('dashboard.loginUsername')}:- {userName}</Title>
      <Title theme={theme}>{t('dashboard.langSelected')}:- {userLang}</Title>
      <Title theme={theme}>{t('dashboard.countrySelected')}:- {userCountry}</Title>
      {getLogoutButton()}
    </Container>
  );
};

export default Dashboard;
