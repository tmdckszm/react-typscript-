import React from 'react';
import styled from 'styled-components';
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import { TodoListProps } from 'TodoList';

interface TodoProps {
  todo: TodoListProps;
  onRemove: (id: number) => void;
  onChecked: (id: number) => void;
}

const TodoListItem = ({ todo, onRemove, onChecked }: TodoProps) => {
  const { id, text, checked } = todo;

  return (
    <>
      <TodoItems>
        <CheckBox onClick={() => onChecked(id)}>
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <Text>{text}</Text>
        </CheckBox>
        <Remove onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </Remove>
      </TodoItems>
    </>
  );
};

const TodoItems = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  &:nth-child(even) {
    background: #f8f9fa;
  }
`;

const CheckBox = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1;
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`;

export default TodoListItem;
