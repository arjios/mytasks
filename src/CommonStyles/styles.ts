import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    align-items: center;
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

export const MainContainer = styled.View`
    align-items: center;
    flex: 1;
    justify-content: flex-start;
    width: 100%;
`;

export const MainContentTitle = styled.View`
    align-items: center;
    border-radius: 8px;
    flex-direction: row;
    height: 56px;
    width: 90%;
`;

export const MainContent = styled.View`
    align-items: center;
    background-color: #E6E6E6;
    border: 1px solid blue;
    border-radius: 8px;
    height: 240px;
    justify-content: flex-end;
    margin-top: 8px;
    width: 90%;
`;
