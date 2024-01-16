import React from 'react';
import ModalSelector from 'react-native-modal-selector';
import {View} from 'react-native';

export const SelectionModal = ({data, label, onSelection}) => {
  return (
    <View style={{padding: 20}}>
      <ModalSelector
        data={data}
        initValue={label}
        onChange={option => onSelection(option?.label)}
      />
    </View>
  );
};
