import React, { useContext, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from '../../context/Auth';

import { Formik } from "formik";
import * as Yup from 'yup';

import { RootStackParamList } from "../../utils/types";

import { Container, HeaderContainer, HeaderIcon, HeaderIconCheck, HeaderTitle } from "../../CommonStyles/styles";
import { Feather } from "@expo/vector-icons";
import { Alert, BackHandler, Text } from "react-native";
import { ButtonLogin, InputContainer, InputIcon, MailInput, MainContainer, MainContent, MainTitle } from "./styles";


type Props = NativeStackScreenProps<RootStackParamList>;

type SigninProps = {
    onBlur: (evt: any) => void
}

export default function Signin({ onBlur }: SigninProps) {

    const navigation = useNavigation<Props['navigation']>();
    const { user } = useContext(AuthContext);
    /*    const [mail, setMail] = useState('')
        const [password, setPassword] = useState('') */

    const loginSchema = Yup.object().shape({
        mail: Yup.string()
            .email(user.email)
            .required('Email incorreto!'),
        password: Yup.string()

            .min(4, 'Senha deve conter no minimo 4 caracteres.')
            .required('Senha não pode ser vazia.')
    })

    function handleExitApp() {
        BackHandler.exitApp();
    };

    function handleLoginApp(email: string, pass: string) {
        if (user.email !== email || user.password !== pass) {
            Alert.alert('Usuario ou senha incorretas!')
            return
        };
        navigation.navigate('Home')
        /*        setPassword('') */

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
                <Formik
                    initialValues={{ mail: '', password: '' }}
                    validationSchema={loginSchema}
                    onSubmit={(values) =>
                        handleLoginApp(values.mail, values.password)
                    }
                >
                    {({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
                        <MainContent>
                            <InputContainer>
                                <InputIcon>
                                    <Feather name='mail' size={32} color='#E6E6E6' />
                                </InputIcon>
                                <MailInput
                                    onChangeText={handleChange('mail')}
                                    placeholder='Digite o email'
                                    onBlur={onBlur}
                                    value={values.mail}
                                    keyboardType='email-address'
                                    autoCapitaliza='none'

                                />
                            </InputContainer>
                            {touched.mail && errors.mail && (
                                <Text style={{ color: '#FF8477' }}>{'Email incorreto!'}</Text>
                            )}
                            <InputContainer>
                                <InputIcon>
                                    <Feather name='unlock' size={32} color='#E6E6E6' />
                                </InputIcon>
                                <MailInput
                                    onChangeText={handleChange('password')}
                                    placeholder='Digite a senha'
                                    onBlur={onBlur}
                                    value={values.password}
                                    secureTextEntry
                                />

                            </InputContainer>
                            {touched.password && errors.password && (
                                <Text style={{ color: '#FF8477' }}>{errors.password}</Text>
                            )}
                            <InputContainer>
                                <ButtonLogin onPress={handleSubmit}>
                                    <MainTitle >
                                        LOGIN
                                    </MainTitle>
                                </ButtonLogin>
                            </InputContainer>
                        </MainContent>
                    )}
                </Formik>
            </MainContainer>
        </Container>
    );
}