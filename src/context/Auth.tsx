import React, { createContext, ReactNode, useEffect, useState } from "react";
import { UserProps } from "../utils/types";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface UserContextProps {
    user: UserProps;
    users: UserProps[];
    findUser: (email: string) => void;
    findAllUsers: () => void;
    insertUser: ( user: UserProps ) => void;
    updateUser: ( user: UserProps ) => void;
    deleteUser: (email: string) => void;
}

interface UserProviderProps {
    children: ReactNode;
}

/* Criar um context vazio e exportar */
export const AuthContext = createContext<UserContextProps>({
    user: {id: 1, name: 'Antonio', lastName: 'de Castro Alves', email: 'aca@gmail.com', password: '123456'},
    users: [],
    findUser: () => {},
    findAllUsers: () => {},
    insertUser: () => {},
    updateUser: () => {},
    deleteUser: () => {},
})

/* Componente que prove o context functio Provider repassanndo o children*/
export default function AuthProvider({children}: UserProviderProps){
    const [user, setUser] = useState<UserProps>({id: 1, 
                                                name: 'root', 
                                                lastName: 'user', 
                                                email: 'admin@gmail.com', 
                                                password: 'admin'})
    const [users, setUsers] = useState<UserProps[]>([] as UserProps[])

    /* Carrega usuarios na memoria na inicialização */
    useEffect(() => {
        loadUsers();
    }, []);

    /* Carrega usuarios na memoria */
    async function loadUsers() {
        try {
            const users = await AsyncStorage.getItem('@users');
            if(users){
                setUsers(JSON.parse(users));
            }
        } catch (error) {
            Alert.alert("Error: Não existe usuarios para recuperar.");
            return
        }
    }

    async function findAllUsers() {
        try {
            const users = await AsyncStorage.getItem('@users');
            if(users) {
                setUsers(JSON.parse(users))
            }
        } catch (error) {
            Alert.alert("Error: Não existe usuarios para recuperar.");
            return            
        }
    }

    async function findUser(email: string) {
        try { 
            const user = await AsyncStorage.getItem('email');
            if(user) {
                setUser(JSON.parse(user))
            }
        } catch (error) {
            Alert.alert("Error: Não existe usuario para recuperar.");
            return 
        }
    }

    async function insertUser(user: UserProps) {
        try {
            await AsyncStorage.setItem('@tasks', JSON.stringify(user));
        } catch (error) {
            Alert.alert("Error: Usuario não foi inserido.");
            return 
        }
    }

    async function updateUser(user: UserProps) {
        try {
            const user = await AsyncStorage.getItem('email');
            if(user) {
                await AsyncStorage.setItem('@email', JSON.stringify(user));
            } 
        } catch (error) {
            Alert.alert("Error: Usuario não foi inserido.");
            return 
        }
    }

    async function deleteUser(email: string) {
        try {
            const user = await AsyncStorage.getItem('email');
            if(user) {
                await AsyncStorage.removeItem('@email');
            }
        } catch (error) {
            Alert.alert("Error: Usuario não foi deletado.");
            return 
        }
    } 

    return(
        <AuthContext.Provider value={{user, users, findUser, findAllUsers, insertUser, updateUser, deleteUser}}>
            {children}
        </AuthContext.Provider>
    );
}