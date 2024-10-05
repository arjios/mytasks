import { useContext, useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import { StatusBar } from 'expo-status-bar';

import {
    HeaderContainer,
    HeaderIcon,
    HeaderIconCheck,
    HeaderTitle,
    TaskAlert,
    TaskInfo,
    TaskInfoContent,
} from "./style";

import InputTaskAdd from '../../components/InputTaskAdd';

import { TaskContext } from "../../context/TaskContext";
import { RootStackParamList, TaskProps } from "../../utils/types";
import React from "react";
import Task from "../../components/Task";
import { Feather } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Container } from "../../CommonStyles/styles";

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Home() {
    const { tasks, createTask, setTasks } = useContext(TaskContext);

    const [taskText, setTaskText] = useState('');

    const navigation = useNavigation<Props['navigation']>();


    function handleTaskAdd() {
        if (taskText === "") {
            Alert.alert('Error: Tarefa com titulo vazio.')
            return
        };
        if (tasks.some((task) => task.title === taskText)) {
            Alert.alert('Error: Tarefa ja existe.')
            return
        };
        createTask(taskText);
        setTaskText('');
    }

    function handleTaskChangeStatus(taskToChange: TaskProps) {
        const updatedTasks = tasks.filter((task) => task.title !== taskToChange.title)
        const newTask = {
            id: taskToChange.id,
            title: taskToChange.title,
            status: !taskToChange.status,
            text: taskToChange.text,
        }
        updatedTasks.push(newTask)
        setTasks(updatedTasks)
    }

    function handleTaskDelete(taskToDelete: TaskProps) {
        Alert.alert("Atenção!", `Deseja excluir a tarefa ${taskToDelete.title}?`,
            [
                {
                    text: 'Sim',
                    onPress: (() => {
                        const updatedTasks = tasks.filter((task) => task.title !== taskToDelete.title)
                        setTasks(updatedTasks)
                    })
                },
                {
                    text: 'Não',
                    style: 'cancel'
                }
            ]
        )
    }         

    return (
        <>
            <StatusBar style="auto" />
            <Container>
                <HeaderContainer>
                    <HeaderIcon onPress={() => navigation.navigate('Signin')}>
                        <Feather name='home' size={32} color='#000000' />
                    </HeaderIcon>
                    <HeaderTitle>
                        MyTasks
                    </HeaderTitle>
                    <HeaderIconCheck>
                        <Feather name='check' size={32} color='#000000' />
                    </HeaderIconCheck>
                </HeaderContainer>
                <InputTaskAdd
                    onPress={handleTaskAdd}
                    onChangeText={setTaskText}
                    value={taskText}
                >
                </InputTaskAdd>
                <TaskInfoContent>
                    <TaskInfo>
                    </TaskInfo>
                </TaskInfoContent>
                <FlatList
                    data={tasks}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <Task
                            id={item.id}
                            title={item.title}
                            status={item.status}
                            text={item.text}
                            onCheck={() => handleTaskChangeStatus(item)}
                            onRemove={() => handleTaskDelete(item)}
                        />
                    )}
                    ListEmptyComponent={() => (
                        <HeaderContainer>
                            <TaskAlert>
                                Ainda não há tarefas cadastradas.
                            </TaskAlert>
                        </HeaderContainer>
                    )}
                />
            </Container>
        </>
    );
}