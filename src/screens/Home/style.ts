import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    align-items: center;
    border: 1px solid red;
    background-color: #e6e6e6;
    border-radius: 4px;
    flex: 1;
    justify-content: flex-start;
    margin-top: 32px;
    padding: 8px;
`;

export const HeaderContainer = styled.View`
    flex-direction: row;
    height: 64px;
    justify-content: center;
    padding: 8px;
    width: 100%;
`;

export const HeaderIcon = styled.TouchableOpacity`
    flex: 2;
    height: 48px;
    justify-content: center;
    width: 48px;
`;

export const HeaderTitle = styled.Text`
    color: #000000;
    font-size: 32px;
    font-weight: 400;
`;

export const HeaderIconCheck = styled.View`
    flex: 2;
    height: 48px;
    justify-content: center;
    width: 48px;
`;

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
    color: #FFFFFF;
    background-color: #252627;
    flex-direction: row;
    height: 56px;
    justify-content: flex-start;
    padding: 0 16px;
    width: 100%;
`;

export const InputText = styled.TextInput`
    color: #FFFFFF;
`;

export const ButtonContent = styled.TouchableOpacity`
    align-items: center;
    background-color: #252627;
    color: #FFFFFF;
    height: 56px;
    justify-content: center;
    width: 56px;
`;

export const CardContainer = styled.View`
    align-items: center;
    flex-direction: row;
    gap: 16px;
    justify-content: center;
    height: 80px;
    margin: 16px auto;
    max-width: 320px;
    padding: 0 16px;
    width: 100%;
`;

export const TaskInfoContent = styled.View`
    align-items: center;
    justify-content: center;

    width: 100%;
`;

export const TaskInfo = styled.Text`
    color: #000000;
    font-size: 16px;
    font-weight: 700;
`;

export const TaskAlert = styled.Text`
    color: black;
    font-size: 16px;
    font-weight: 250;
`;
