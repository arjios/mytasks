import React from 'react'
import { ReactNode, createContext, useEffect, useState } from 'react';
import { TaskProps } from '../utils/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

interface TaskContextProps {
    task: TaskProps;
    tasks: TaskProps[];
    selectTask: (task: TaskProps) => void;
    clearTask: () => void;
    createTask: (title: string, text: string) => void;
    setTasks: ([]: TaskProps[]) => void;
};

interface TaskProviderProps {
    children: ReactNode;
};

export const TaskContext = createContext<TaskContextProps>({
    task: { id: 0, title: '', status: false, text:'' },
    tasks: [],
    selectTask: () => { },
    clearTask: () => { },
    createTask: () => { },
    setTasks: () => { },
});

export default function TaskProvider({ children }: TaskProviderProps) {
    const [task, setTask] = useState<TaskProps>({ id: 0, title: '', status: false, text: '' });
    const [tasks, setTasks] = useState<TaskProps[]>([] as TaskProps[]);

    async function storeTasks(tasks: TaskProps[]) {
        try {
            await AsyncStorage.setItem('@tasks', JSON.stringify(tasks));
        } catch (error) {
            Alert.alert("Error: Não foi possivel armazenar a tarefa.");
            return
        }
    }

    async function loadTasks() {
        try {
            const tasks = await AsyncStorage.getItem('@tasks');
            if(tasks){
                setTasks(JSON.parse(tasks));
            }
        } catch (error) {
            Alert.alert("Error: Não existe tarefas para recuperar.");
            return
        }
    }

    function createTask(title: string, text: string) {
        console.warn('inner createTask')
        try {
            const newTask = {
                id: tasks.length + 1,
                title: title, 
                status: false,
                text: '',
            };
            console.warn('newTask!!!');
            setTasks([...tasks, newTask]);

        } catch (error) {
            Alert.alert("Error: Não foi possivel criar nova tarefa.");
            return
        }
    }

    function selectTask(task: TaskProps) {
        setTask(task);
    }

    function clearTask() {
        setTask({ id: 0, title: '', status: false, text: '' });
    }

    useEffect(() => {
        loadTasks();
    }, []);

    useEffect(() => {
        storeTasks(tasks);
    }, [tasks]);

    return (
        <TaskContext.Provider value={{ task, tasks, selectTask, clearTask, createTask, setTasks }}>
            {children}
        </TaskContext.Provider>
    );
}