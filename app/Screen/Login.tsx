import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import useLogin from '../../src/hook/useLogin';
import InputField from '../Component/InputField';
import {
  selectedCountry,
  selectedIsLoggedIn,
  selectedLang,
} from '../../src/slice/user/selector';
import {
  createUserAction,
  getUserListAction,
  loginAction,
  setUserCountry,
  setUserLang,
  setUserName,
} from '../../src/slice/user/slice';
import {
  ButtonTitle,
  Container,
  HSpacing,
  PrimaryButton,
} from '../Component/Common';
import {useNavigation} from '@react-navigation/native';
import {AppRoute} from '../../src/constants/routes';
import {SelectionModal} from '../Component/ModalSelector';
import {CountryList, Languages} from '../../src/constants/App';
import {transformModalList} from '../../src/utils';
import {useTranslation} from 'react-i18next';

const LoginScreen = () => {
  const {control, getValues, isValid, errors} = useLogin();
  const userCountry = useSelector(selectedCountry);
  const userLang = useSelector(selectedLang);
  const isLoggedIn = useSelector(selectedIsLoggedIn);
  const dispatch = useDispatch();
  const {replace} = useNavigation();
  const {t} = useTranslation();

  const onLogin = () => {
    const userName = getValues('userName');
    const password = getValues('password');
    dispatch(
      loginAction({
        userName,
        password,
        country: userCountry,
        lang: userLang,
      }),
    );
  };

  const onCountrySelection = (option: string) => {
    dispatch(setUserCountry(option));
  };

  const onLangSelection = (option: string) => {
    dispatch(setUserLang(option));
  };

  useEffect(() => {
    //Fetch all user data
    dispatch(getUserListAction());
  }, []);

  useEffect(() => {
    //If loggedIn successfully
    if (isLoggedIn) {
      replace(AppRoute.Dashboard);
    }
  }, [isLoggedIn]);

  return (
    <Container>
      <InputField
        placeholder={t('login.UserName')}
        placeholderTextColor="white"
        name="userName"
        control={control}
        errorMessage={errors?.userName?.message}
      />
      <InputField
        placeholder={t('login.password')}
        placeholderTextColor="white"
        name="password"
        control={control}
        secureTextEntry
        errorMessage={errors?.password?.message}
      />
      <PrimaryButton>
        <ButtonTitle onPress={onLogin}>{t('login.login')}</ButtonTitle>
      </PrimaryButton>
      <SelectionModal
        data={transformModalList(Object.values(CountryList))}
        label={`${t('login.changeCountry')} (${userCountry})`}
        onSelection={onCountrySelection}
      />
      <SelectionModal
        data={transformModalList(Object.values(Languages))}
        label={`${t('login.changeCountry')} (${userLang})`}
        onSelection={onLangSelection}
      />
    </Container>
  );
};

export default LoginScreen;
