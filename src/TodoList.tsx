import React from 'react';
import styled from 'styled-components';
import TodoListItem from 'TodoListItem';

export interface TodoListProps {
  id?: number;
  text?: string;
  checked: boolean;
}

interface TodoProps {
  todos: TodoListProps[];
}

const TodoList = ({ todos }: TodoProps) => {
  return (
    <TodoLists>
      {todos.map((todo) => {
        return <TodoListItem todo={todo} key={todo.id} />;
      })}
    </TodoLists>
  );
};

const TodoLists = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

export default TodoList;
