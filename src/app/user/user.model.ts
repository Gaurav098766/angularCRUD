export interface User {
    id: string;
    avatar: string;
    name: string;
}

export interface NewTaskData {
    title: string;
    summary: string;
    dueDate: string;
}
