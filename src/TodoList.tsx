import React from 'react';
import styled from 'styled-components';
import TodoListItem from 'TodoListItem';

export interface TodoListProps {
  id: number;
  text: string;
  checked: boolean;
}

interface TodoProps {
  todos: TodoListProps[];
  onRemove: (id: number) => void;
  onChecked: (id: number) => void;
}

const TodoList = ({ todos, onRemove, onChecked }: TodoProps) => {
  return (
    <TodoLists>
      {todos.map((todo) => {
        return (
          <TodoListItem
            todo={todo}
            key={todo.id}
            onRemove={onRemove}
            onChecked={onChecked}
          />
        );
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
