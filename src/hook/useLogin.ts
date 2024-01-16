import {useSelector} from 'react-redux';
import {selectedCountry} from '../slice/user/selector';
import {useDynamicForm} from './useDynamicForm';
import * as yup from 'yup';
import {getRegexByCountry, getUsernameLengthByCountry} from '../utils';
import {useTranslation} from 'react-i18next';

const useLogin = () => {
  const userCountry = useSelector(selectedCountry);
  const {t} = useTranslation();
  const ValidationSchema = yup.object().shape({
    userName: yup
      .string()
      .required()
      .matches(getRegexByCountry(userCountry as string), {
        message: t('login.invalidUserName'),
      })
      .min(
        getUsernameLengthByCountry(userCountry as string),
        `${t('login.userNameLength')} ${getUsernameLengthByCountry(
          userCountry as string,
        )} ${t('login.charLong')}`,
      ),
    password: yup.string().required().min(6, t('login.passwordLength')),
  });
  const {
    control,
    handleSubmit,
    getValues,
    errors,
    formState: {isValid},
  } = useDynamicForm({
    schema: ValidationSchema,
    mode: 'onChange',
    defaultValues: {
      userName: '',
      password: '',
    },
  });

  return {
    control,
    handleSubmit,
    getValues,
    isValid,
    errors,
  };
};

export default useLogin;
