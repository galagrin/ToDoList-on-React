import { useState } from 'react';
import { Form } from '../components/Form/Form';
import { Header } from '../components/Header/Header';
import { ToDoList } from '../components/ToDoList/ToDoList';
import { ToDo } from '../models/todo-item';

export const ToDoListPage = () => {
    const [todos, setTodos] = useState<ToDo[]>([]);

    const createNewToDo = (text: string) => {
        const newTodo: ToDo = {
            id: todos.length,
            text: text,
            isDone: false,
        };
        setTodos([...todos, newTodo]);
    };

    const updateToDo = (toDoItem: ToDo) => {
        const newToDos = todos.map((todo) => {
            if (todo.id === toDoItem.id) {
                todo.isDone = !todo.isDone;
            }
            return todo;
        });
        setTodos(newToDos);
    };

    const deleteToDo = (toDoItem: ToDo) => {
        const newToDos = todos.filter((todo) => todo.id !== toDoItem.id);
        setTodos(newToDos);
    };

    return (
        <>
            <Header />
            <Form createNewToDo={createNewToDo} />
            <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
        </>
    );
};
