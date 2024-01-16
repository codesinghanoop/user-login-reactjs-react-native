import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import InputFieldWeb from '../../app/Component/InputField.web';
import useLogin from '../../src/hook/useLogin';
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
  setWebUserLang,
  setUserName,
} from '../../src/slice/user/slice';
import {
  ButtonTitle,
  Container,
  ErrorText,
  HSpacing,
  PrimaryButton,
} from '../../app/Component/Common.web';
import {WebRoute} from '../../src/constants/routes';
import {CountryList, Languages} from '../../src/constants/App';
import {transformWebModalList} from '../../src/utils';

const LoginScreen = props => {
  const {control, getValues, isValid, errors} = useLogin();
  const userCountry = useSelector(selectedCountry);
  const userLang = useSelector(selectedLang);
  const isLoggedIn = useSelector(selectedIsLoggedIn);
  const dispatch = useDispatch();
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
    dispatch(setWebUserLang(option));
  };

  useEffect(() => {
    //Fetch all user data
    dispatch(getUserListAction());
  }, []);

  useEffect(() => {
    //If loggedIn successfully
    if (isLoggedIn) {
      props?.history.replace(WebRoute.Dashboard);
    }
  }, [isLoggedIn]);

  return (
    <Container>
      <InputFieldWeb
        id="filled-basic"
        label={t('login.UserName')}
        variant="filled"
        name="userName"
        control={control}
        errorMessage={!!errors?.userName?.message}
      />
      <ErrorText>{errors?.userName?.message}</ErrorText>
      <HSpacing />
      <InputFieldWeb
        name="password"
        type="password"
        id="filled-basic"
        label={t('login.password')}
        variant="filled"
        control={control}
        errorMessage={!!errors?.password?.message}
      />
      <ErrorText>{errors?.password?.message}</ErrorText>
      <HSpacing />
      <PrimaryButton>
        <ButtonTitle onClick={onLogin}>{t('login.login')}</ButtonTitle>
      </PrimaryButton>
      <Autocomplete
        id="country"
        options={transformWebModalList(Object.values(CountryList))}
        sx={{width: 300, height: 100}}
        renderInput={params => <TextField {...params} label="Country" />}
        onChange={(event: any, newValue: string | null) => {
          onCountrySelection(newValue?.label as string);
        }}
        defaultValue={'AE'}
      />
      <Autocomplete
        id="language"
        options={transformWebModalList(Object.values(Languages))}
        sx={{width: 300, height: 100}}
        renderInput={params => <TextField {...params} label="Language" />}
        onChange={(event: any, newValue: string | null) => {
          console.log('newValuenewValue', newValue);
          onLangSelection(newValue?.label as string);
        }}
        defaultValue={'en'}
      />
    </Container>
  );
};

export default LoginScreen;
