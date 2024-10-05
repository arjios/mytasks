import React, { useContext, useEffect, useState } from 'react';


import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList, TaskProps } from '../../utils/types';
import { TaskContext } from '../../context/TaskContext';
import { Container, HeaderContainer, HeaderIcon, HeaderIconCheck, HeaderTitle, MainContainer, MainContentTitle } from '../../CommonStyles/styles';

import { ButtonDetailAdd, ContentTitleText, DetailInput, MainContentButtonAdd } from './styles';
import { Alert } from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Details() {
    const navigation = useNavigation<Props['navigation']>()
    const { task, tasks, setTasks } = useContext(TaskContext)
    const [detail, setDetail] = useState(task.text)
    const index = task.title

    function goHome() {
        navigation.navigate('Home')
    }

    function handleTaskDetail() {
        const updatedTasks = tasks.filter((task) => task.title !== index)
        const newTask = {
            id: task.id,
            title: task.title,
            status: task.status,
            text: detail,
        }
        updatedTasks.push(newTask)
        setTasks(updatedTasks)
        if(task.text) {
            Alert.alert('Detalhe da tarefa inserida com sucesso!')
        }
    }

    return (
        <Container>
            <HeaderContainer>
                <HeaderIcon onPress={goHome}>
                    <Feather name='list' size={32} color='#000000' />
                </HeaderIcon>
                <HeaderTitle>
                    MyTasks
                </HeaderTitle>
                <HeaderIconCheck>
                    <Feather name='check' size={32} color='#000000' />
                </HeaderIconCheck>
            </HeaderContainer>
            <MainContainer>
                <MainContentTitle>
                    <ContentTitleText>
                        Tarefa: {task.title}
                    </ContentTitleText>
                </MainContentTitle>

                <DetailInput
                    editable
                    multiline
                    numberOfLines={10}
                    maxLength={255}
                    value={detail}
                    onChangeText={setDetail}
                    onBlur={handleTaskDetail}
                />
                <MainContentButtonAdd>
                    <ButtonDetailAdd onPress={handleTaskDetail}>
                        <Feather name='plus' size={32} color='#FFFFFF' />
                    </ButtonDetailAdd>
                </MainContentButtonAdd>
            </MainContainer>
        </Container>
    )

} 