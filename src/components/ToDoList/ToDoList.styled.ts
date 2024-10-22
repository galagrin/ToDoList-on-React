import styled from 'styled-components';

export const ToDoListWrapper = styled.div`
    width: 100%;
    padding: 15px;
`;
const TodoList = styled.ul`
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 0;
    list-style: none;
`;
export const TodoListFailed = styled(TodoList)`
    &:empty:after {
        content: 'Нет задач на выполнение';
    }
    &:after {
        width: 100%;
        display: block;
        text-align: center;
        font-size: 0.9rem;
        color: #aaa;
    }
`;

export const TodoListCompleted = styled(TodoList)`
    position: relative;
    padding: 60px 0 0 0;

    &:empty:after {
        content: 'Нет выполненых задач';
    }

    &:before {
        content: '';
        width: 150px;
        height: 1px;
        background: #aaa;

        position: absolute;
        top: 25px;
        left: calc(50% - 75px);
    }

    &:after {
        width: 100%;
        display: block;
        text-align: center;
        font-size: 0.9rem;
        color: #aaa;
    }
`;
