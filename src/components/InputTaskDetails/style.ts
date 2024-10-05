import styled from 'styled-components/native';

export const InputContent = styled.View`
    align-items: center;
    border: 1px solid green;
    border-radius: 4px;
    flex: 1;
    height: 60px;
    justify-content: center;
    margin: 0 auto;
    max-width: 320px;
    padding: 0 16px;
    width: 100%;
`;

export const InputTaskContainer = styled.View`
    align-items: flex-start;
    background-color: #FFFFFF;
    flex: 9;
    width: 100%;
`;

export const InputTask = styled.TouchableOpacity`
    align-items: flex-start;
    color: #FFFFFF;
    background-color: #FFFFFF;
    height: 240px;
    justify-content: flex-start;
    width: 100%;
`;

export const InputText = styled.TextInput`
    color: #000000;
    height: 140px;
    padding: 0 8px;
    width: 100%;
`;

export const ButtonContainer = styled.View`
    align-items: flex-end;
    background-color: #E6E6E6;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

export const ButtonClear = styled.TouchableOpacity`
    align-items: center;
    background-color: #E6E6E6;
    color: #000000;
    height: 56px;
    justify-content: center;
    width: 56px;
`;

export const ButtonAdd = styled.TouchableOpacity`
    align-items: center;
    background-color: #E6E6E6;
    color: #000000;
    height: 56px;
    justify-content: center;
    width: 56px;
`;
