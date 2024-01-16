import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';

export const useDynamicForm = ({
  schema = {},
  ...restUseFormDefaultProps
}: any) => {
  const formParams: any = {};
  if (Object.keys(schema).length > 0) {
    formParams.resolver = yupResolver(schema);
  }
  const {control, ...formProps} = useForm({
    ...restUseFormDefaultProps,
    ...formParams,
  });

  const {isDirty, isValid, errors} = formProps.formState;
  const doErrorsExist = errors && Object.keys(errors).length > 0;

  const isValidForm = !doErrorsExist && isValid && isDirty;

  return {
    ...formProps,
    isValidForm,
    control,
    errors,
  };
};
