import styled from 'styled-components/native';


export const ContentTitleText = styled.Text`
    align-items: center;
    font-size: 20px;
    font-weight: 300;
    justify-content: center;
`;


export const DetailInput = styled.TextInput`
    text-align: top;
    background-color: #FFFFFF;
    color: #000000;
    height: 200px;
    justify-content: flex-start;
    text-align: top;
    padding: 4px;
    width: 90%;
    border-radius:10px;
`;


export const MainContentButtonAdd = styled.View`
    align-items: center;
    border-radius: 8px;
    flex-direction: row;
    justify-content: flex-end;
    height: 56px;
    width: 90%;
`;

export const ButtonDetailAdd = styled.TouchableOpacity`
    align-items: center;
    background-color: #325DCC;
    border-radius: 50px;
    color: #FFFFFF;
    height: 48px;
    justify-content: center;
    margin-top: 8px;
    width: 48px;
`;