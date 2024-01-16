import React, {useCallback, useMemo} from 'react';
import {FieldValues, useController} from 'react-hook-form';
import TextField from '@mui/material/TextField';

import {ErrorText, HSpacing} from './Common.web';

const FormInput = ({
  name,
  control,
  errorMessage,
  onChangeText,
  showSuccess,
  showClearButton,
  isCardInput = false,
  showWarning = true,
  showInfo,
  onInfoPress,
  SuffixPress,
  testID,
  accessibilityLabel,
  dir = undefined,
  inputTextStyle = {},
  ...inputProps
}: FieldValues): JSX.Element => {
  const {
    field: {onChange, onBlur, value},
    fieldState: {error, invalid},
  } = useController({
    name,
    control,
  });

  const onChangeTextHandler = useCallback(
    (event: any) => {
      onChange(event.target.value.trim());
      onChangeText?.(event.target.value.trim());
    },
    [onChange, onChangeText],
  );

  return (
    <>
      <TextField
        {...inputProps}
        onChange={onChangeTextHandler}
        variant="filled"
        error={!!errorMessage}
        style={{width: 300}}
      />
      <ErrorText>{errorMessage}</ErrorText>
      <HSpacing />
    </>
  );
};

export default React.memo(FormInput);
