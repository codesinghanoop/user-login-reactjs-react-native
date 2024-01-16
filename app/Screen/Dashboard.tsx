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

const Dashboard = () => {
  const userCountry = useSelector(selectedCountry);
  const userLang = useSelector(selectedLang);
  const userName = useSelector(selectedUserName);
  const dispatch = useDispatch();
  const {setOptions, replace} = useNavigation();

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
            Logout
          </Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <Container>
      <Title>UserName:- {userName}</Title>
      <Title>Language selected:- {userLang}</Title>
      <Title>Country selected:- {userCountry}</Title>
    </Container>
  );
};

export default Dashboard;
