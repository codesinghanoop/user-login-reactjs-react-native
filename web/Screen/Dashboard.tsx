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

const Dashboard = props => {
  const userCountry = useSelector(selectedCountry);
  const userLang = useSelector(selectedLang);
  const userName = useSelector(selectedUserName);
  const dispatch = useDispatch();

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
    <Container>
      <Title>UserName:- {userName}</Title>
      <Title>Language selected:- {userLang}</Title>
      <Title>Country selected:- {userCountry}</Title>
      {getLogoutButton()}
    </Container>
  );
};

export default Dashboard;
