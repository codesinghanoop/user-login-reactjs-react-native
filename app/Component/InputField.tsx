import React, {useCallback, useMemo} from 'react';
import {FieldValues, useController} from 'react-hook-form';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
} from 'react-native';
import {ErrorText, HSpacing} from './Common';

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
    (text: string) => {
      onChange(text.trim());
      onChangeText?.(text.trim());
    },
    [onChange, onChangeText],
  );

  const onBlurHandler = useCallback(
    (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      onBlur();
      inputProps?.onBlur?.(event);
    },
    [inputProps, onBlur],
  );

  return (
    <>
      <TextInput
        {...inputProps}
        testID={testID}
        accessibilityLabel={accessibilityLabel}
        autoFocus={inputProps.autoFocus}
        error={!!error || !!errorMessage}
        errorMessage={error?.message ?? errorMessage}
        inputTextStyle={{...inputTextStyle, borderRadius: 30}}
        prefixIconStyle={isCardInput ? {marginLeft: 10} : undefined}
        showInfo={showInfo}
        showSuccess={showSuccess && !invalid && !errorMessage && value}
        showWarning={showWarning && (!!error || !!errorMessage)}
        value={value ?? ''}
        onBlur={onBlurHandler}
        onChangeText={onChangeTextHandler}
        onInfoPress={onInfoPress}
        style={{
          minHeight: 48,
          borderRadius: 5,
          paddingLeft: 16,
          justifyContent: 'center',
          borderWidth: 0.5,
          marginBottom: 16,
        }}
      />
      <ErrorText>{errorMessage}</ErrorText>
      <HSpacing />
    </>
  );
};

export default React.memo(FormInput);
