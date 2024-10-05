import React from 'react';
import { Feather } from "@expo/vector-icons";

import { InputContent, InputTask, InputText, ButtonContent, CustomSquare } from "./style"

type Props = {
    value: string;
    onPress: (title: string, status: boolean) => void;
    onChangeText: (text: string) => void;
}

export default function InputTaskAdd({ value, onPress, onChangeText }: Props) {

    return (
        <InputContent>
            <InputTask onPress={onPress} >
            <CustomSquare
                onPress={onPress}>
                <Feather name='plus' size={23} color='gray' />
            </CustomSquare>
                <InputText
                    editable
                    multiline
                    numberOfLines={8}
                    keyBoardType='default'
                    onChangeText={onChangeText}
                    placeholder='Nova tarefa'
                    placeholderTextColor='#878787'
                    value={value}>
                </InputText>
            </InputTask>
        </InputContent>
    );
}



