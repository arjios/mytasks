import styled from 'styled-components/native';

export const InputContent = styled.View`
    align-items: center;
    border-radius: 4px;
    flex-direction: row;
    height: 60px;
    justify-content: center;
    margin: 0 auto;
    max-width: 320px;
    padding: 0 16px;
    width: 100%;
`;

export const InputTask = styled.TouchableOpacity`
  align-items: center;
    background-color: #FFFFFF;
    flex-direction: row;
    height: 57px;
    justify-content: flex-start;
    width: 327px;
    padding:16px;
    border-radius: 8px;
    margin-top:8px;
`;

export const InputText = styled.TextInput`
    color: #000000;
    height: 20px;
    padding: 0 8px;
    width: 100%;
    font-size:20px;
`;

export const ButtonContent = styled.TouchableOpacity`
    align-items: center;
    background-color: #252627;
    color: #FFFFFF;
    height: 56px;
    justify-content: center;
    width: 56px;
`;

export const CustomSquare = styled.TouchableOpacity`
    width: 25px;
    height: 25px;
    border-width: 2px; /* Ajuste a grossura da linha aqui */
    background-color: transparent;
    border-radius: 4px;
    border:0.5px;
    border-color: gray;
`;

