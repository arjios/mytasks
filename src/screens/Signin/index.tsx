import React, { useContext, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from '../../context/Auth';

import { RootStackParamList } from "../../utils/types";

import { Container, HeaderContainer, HeaderIcon, HeaderIconCheck, HeaderTitle } from "../../CommonStyles/styles";
import { Feather } from "@expo/vector-icons";
import { Alert, BackHandler } from "react-native";
import { ButtonLogin, InputContainer, InputIcon, MailInput, MainContainer, MainContent, MainTitle } from "./styles";


type Props = NativeStackScreenProps<RootStackParamList>;

export default function Signin() {

    const navigation = useNavigation<Props['navigation']>();
    const {user} = useContext(AuthContext);
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')

    function handleExitApp() {
        BackHandler.exitApp();
    };

    function handleLoginApp() {
        if (user.email !== mail || user.password !== password) {
            Alert.alert('Usuario ou senha incorretas!')
            return
        };
        navigation.navigate('Home')
        setPassword('')

    };

    return (
        <Container>
            <HeaderContainer>
                <HeaderIcon onPress={handleExitApp}>
                    <Feather name='power' size={32} color='#000000' />
                </HeaderIcon>
                <HeaderTitle>
                    MyTasks
                </HeaderTitle>
                <HeaderIconCheck>
                    <Feather name='check' size={32} color='#000000' />
                </HeaderIconCheck>
            </HeaderContainer>
            <MainContainer>
                <MainContent>
                    <InputContainer>
                        <InputIcon>
                            <Feather name='mail' size={32} color='#E6E6E6' />
                        </InputIcon>
                        <MailInput
                            value={mail}
                            onChangeText={(text: string) => setMail(text)}
                            placeholder='Digite o email'
                        />
                    </InputContainer>
                    <InputContainer>
                        <InputIcon>
                            <Feather name='unlock' size={32} color='#E6E6E6' />
                        </InputIcon>
                        <MailInput
                            value={password}
                            onChangeText={(pass: string) => setPassword(pass)}
                            placeholder='Digite a senha'
                        />
                    </InputContainer>

                </MainContent>

                <MainContent>
                    <InputContainer>
                        <ButtonLogin onPress={handleLoginApp}>
                            <MainTitle >
                                LOGIN
                            </MainTitle>
                        </ButtonLogin>
                    </InputContainer>
                </MainContent>



            </MainContainer>
        </Container>
    );
}