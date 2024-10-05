import { Feather } from "@expo/vector-icons";
import { TaskProps, RootStackParamList } from "../../utils/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { TaskContainer, TaskContent, TaskDeleteButton, TaskTitleField, TitleFieldText, CustomSquare } from "./styles";
import React from "react";

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Task(props: TaskProps) {
    const navigation = useNavigation<Props['navigation']>();
    const { selectTask } = useContext(TaskContext);

    function HandlePress() {
        selectTask(props);
        navigation.navigate('Details');
    }

    return (
        <TaskContainer>
            <TaskContent>
                <CustomSquare onPress={props.onCheck} style={props.status ? { backgroundColor: '#325DCC' } : {}}>
                    {props.status && <Feather name='check' size={25} color='white' />}
                </CustomSquare>
                <TaskTitleField onPress={HandlePress}>
                    <TitleFieldText>
                        {props.title}
                    </TitleFieldText>
                </TaskTitleField>
                <TaskDeleteButton onPress={props.onRemove}>
                    <Feather name='trash-2' size={18} color='red' />
                </TaskDeleteButton>
            </TaskContent>
        </TaskContainer>
    );
}