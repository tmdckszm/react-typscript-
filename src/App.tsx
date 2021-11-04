import React, { useState } from 'react';
import TodoInsert from 'TodoInsert';
import TodoTemplate from 'TodoTemplate';
import TodoList from 'TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트의 기초 알아보기', checked: true },
    { id: 2, text: '컴포넌트 스타일링해 보기', checked: true },
    { id: 1, text: '일정 관리 앱 만들어 보기', checked: false },
  ]);

  console.log(setTodos);
  return (
    <>
      <TodoTemplate>
        <TodoInsert />
        <TodoList todos={todos} />
      </TodoTemplate>
    </>
  );
};

export default App;
