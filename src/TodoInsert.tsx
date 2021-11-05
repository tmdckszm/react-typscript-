import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';

interface TodoInsertProps {
  onInsert: (text: string) => void;
}

const TodoInsert = ({ onInsert }: TodoInsertProps) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onInsert(value);
      setValue('');
    },
    [onInsert, value],
  );
  return (
    <>
      <TodoInserts onSubmit={onSubmit}>
        <TodoInsertInput
          placeholder="할 일을 입력하세요"
          value={value}
          onChange={onChange}
        />
        <TodoInsertButton type="submit">
          <MdAdd />
        </TodoInsertButton>
      </TodoInserts>
    </>
  );
};

const TodoInserts = styled.form`
  display: flex;
  background: #495057;
`;

const TodoInsertInput = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;
  flex: 1;
`;

const TodoInsertButton = styled.button`
  background: none;
  outline: none;
  border: none;
  background: #868e96;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.1s background ease-in;
  &:hover {
    background: #adb5bd;
  }
`;
export default TodoInsert;
