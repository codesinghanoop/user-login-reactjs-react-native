import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView, StatusBar} from 'react-native';
import Toast from 'react-native-toast-message';
import {selectedLang} from '../src/slice/user/selector';
import {setUserLang} from '../src/slice/user/slice';

import {AppRoute} from '../src/constants/routes';
import LoginScreen from './Screen/Login';
import Dashboard from './Screen/Dashboard';
import {useDispatch, useSelector} from 'react-redux';
import ErrorBoundary from './Component/ErrorBoundry';

export type MainStackParamList = {};

const MainStack = createStackNavigator<MainStackParamList>();

const StackNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent',
          //   direction: i18n.dir(),
        },
      }}
      initialRouteName={AppRoute.Login}>
      <MainStack.Screen
        name={AppRoute.Login}
        options={({route}) => ({
          title: 'Login',
          headerStyle: {
            shadowColor: 'transparent', // this covers iOS
            elevation: 0, // this covers Android
          },
        })}
        component={LoginScreen}
      />
      <MainStack.Screen
        name={AppRoute.Dashboard}
        options={({route}) => ({
          title: 'Dashboard',
          headerStyle: {
            shadowColor: 'transparent', // this covers iOS
            elevation: 0, // this covers Android
          },
        })}
        component={Dashboard}
      />
    </MainStack.Navigator>
  );
};

const Router = () => {
  //   const {handleNotificationResponse} = usePushNotification();

  const userLang = useSelector(selectedLang);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUserLang(userLang)); //Setup lang after app restarts
  }, []);

  return (
    <NavigationContainer>
      <ErrorBoundary>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar barStyle={'dark-content'} />
          <StackNavigator />
          <Toast />
        </SafeAreaView>
      </ErrorBoundary>
    </NavigationContainer>
  );
};

export default Router;
