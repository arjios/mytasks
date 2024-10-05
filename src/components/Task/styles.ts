import styled from 'styled-components/native';

export const TaskContainer = styled.View`
    align-items: flex-start;
    justify-content: flex-start;
    margin: 0px auto;
    max-width: 360px;
    width: 100%;
`;

export const TaskContent = styled.TouchableOpacity`
    align-items: center;
    background-color: #FFFFFF;
    flex-direction: row;
    height: 57px;
    justify-content: flex-start;
    width: 327px;
    padding: 16px;
    border-radius: 8px;
    margin-top: 8px;
`;

export const TaskCheckButton = styled.TouchableOpacity`
    align-items: center;
    background-color: #E88A1A;
    border-radius: 4px;
    color: #FFFFFF;
    height: 48px;
    justify-content: center;
    width: 48px;
`;

export const TaskTitleField = styled.TouchableOpacity`
    align-items: center;
    background-color: #FFFFFF;
    flex-direction: row;
    height: 48px;
    justify-content: flex-start;
    padding: 0 8px;
    width: 100%;
`;

export const TitleFieldText = styled.Text`
    color: #000000;
    font-size: 16px;
    font-weight: 400;
`;

export const CustomSquare = styled.TouchableOpacity`
    width: 25px;
    height: 25px;
    border-width: 2px; /* Ajuste a grossura da linha aqui */
    border-color: black;
    background-color: transparent;
    border-radius: 4px;
    border-width:0.5px;
`;

export const TaskDeleteButton = styled.TouchableOpacity`
    align-items: center;
    border-radius: 4px;
    color: #FFFFFF;
    height: 80px;
    justify-content: center;
    width: 48px;
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-24px);
`;