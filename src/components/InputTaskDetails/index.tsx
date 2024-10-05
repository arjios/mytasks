import React from 'react';
import { Feather } from "@expo/vector-icons";

import { InputContent, InputTask, InputText, InputTaskContainer, 
        ButtonContainer, ButtonAdd, ButtonClear } from "./style"

type Props = {
    value: string;
    onPress: (title: string, status: boolean, text: string) => void;
    onChangeText: (text: string) => void;
}

export default function InputTaskDetails({ value, onPress, onChangeText }: Props) {

    return (
        <InputContent>
            <InputTaskContainer>
                <InputTask onPress={onPress} >
                    <InputText
                        editable
                        multiline
                        numberOfLines={8}
                        keyBoardType='default'
                        onChangeText={onChangeText}
                        placeholder='Digite uma nova tarefa'
                        placeholderTextColor='black'
                        value={value}>
                    </InputText>
                </InputTask>
            </InputTaskContainer>

            <ButtonContainer>
                <ButtonClear
                    onPress={onPress}>
                    <Feather name='minus-square' size={32} color='#000000' />
                </ButtonClear>
                <ButtonAdd
                    onPress={onPress}>
                    <Feather name='plus-square' size={32} color='#000000' />
                </ButtonAdd>
            </ButtonContainer>

        </InputContent>
    );
}



