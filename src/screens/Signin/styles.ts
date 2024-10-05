import styled from "styled-components/native";

export const PublicContainer = styled.View`
    align-items: flex-start;
    background-color: #E6E6E6;
    border: 1px solid red;
    flex: 1;
    justify-content: flex-start;
    margin-top: 32px;
    padding: 0 16px;
`;

export const PublicHeader = styled.View`
    align-items: center;
    flex-direction: row;
    flex: 2;
    justify-content: center;
    padding: 0 16px;
    width: 100%;
`;

export const HeaderIconContent = styled.TouchableOpacity`
    align-items: center;
    flex-direction: row;
    justify-content: center;
`;

export const HeaderTitleContent = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`;

export const PublicHeaderTitle = styled.Text`
    align-items: center;
    color: #000000;
    font-size: 32px;
    font-weight: 400;
    justify-content: center;
    padding: 0 16px;
`;

export const SigninMain = styled.View`
    align-items: center;
    color: #FFFFFF;
    flex: 8;
    justify-content: center;
    padding: 8px;
`;

export const MainContainer = styled.View`
    align-items: center;
    flex: 1;
    justify-content: center;
    width: 100%;
`;

export const MainContent = styled.View`
    align-items: center;
    background-color: #E6E6E6;
    border-radius: 8px;
    height: 240px;
    justify-content: center;
    margin-top: 8px;
    width: 90%;
`;

export const ButtonLogin = styled.TouchableOpacity`
    align-items: center;
    background-color: #325DCC;
    border-radius: 16px;
    justify-content: center;
    height: 48px;
    width: 80%;
`;

export const MainTitle = styled.Text`
    color: #FFFFFF;
    font-size: 32px;
    font-weight: 400;
`;

export const InputContainer = styled.View`
    height: 72px;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`;

export const InputIcon = styled.View`
    align-items: center;
    background-color: #FFFFFF;
    border-bottom-left-radius: 16px;
    border-top-left-radius: 16px;
    height: 56px;
    justify-content: center;
    width: 56px;
`;

export const MailInput = styled.TextInput`
    align-items: center;
    background-color: #FFFFFF;
    border-bottom-right-radius: 16px;
    border-top-right-radius: 16px;
    height: 56px;
    justify-content: center;
    width: 80%;
`;