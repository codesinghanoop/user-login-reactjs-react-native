import styled from 'styled-components';

export const Container = styled.div`
  padding: 28px;
  background: ${props => props.theme.backgroundColor || 'gray'};
  flex-grow: 1;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const PrimaryButton = styled.button`
  height: 45px;
  background-color: ${props => props.theme.buttonColor};
  margin-bottom: 24px;
  width: 300px;
`;

export const Title = styled.p`
  color: ${props => props.theme.textColor};
  margin-bottom: 24px;
`;

export const ButtonTitle = styled.p`
  color: ${props => props.theme.textColor};
  font-weight: bold;
  height: 100%;
  text-align: center;
  margin-top: 14px;
`;

export const HSpacing = styled.div`
  margin-bottom: 12px;
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 16px;
`;
