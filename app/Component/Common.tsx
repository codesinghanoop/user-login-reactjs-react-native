import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 28px;
  background: gray;
  flex-grow: 1;
`;

export const PrimaryButton = styled.TouchableOpacity`
  height: 45px;
  background-color: red;
  margin-bottom: 24px;
`;

export const Title = styled.Text`
  color: white;
  margin-bottom: 24px;
`;

export const ButtonTitle = styled.Text`
  color: white;
  font-weight: bold;
  height: 100%;
  text-align: center;
  margin-top: 14px;
`;

export const HSpacing = styled.View`
  margin-bottom: 12px;
`;

export const ErrorText = styled.Text`
  color: red;
  font-size: 16px;
`;
