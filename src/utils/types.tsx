export type TaskProps={
    id: number;
    title: string;
    status: boolean;
    text: string;
    onCheck?: () => void;
    onRemove?: () => void;
}

export type UserProps={
    id: number;
    name: string;
    lastName: string;
    email: string;
    password: string;
}

export type RootStackParamList={
    Home: undefined;
    Details: TaskProps;
    Signin: undefined;
}