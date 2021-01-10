import React, { useState } from "react";

import { useSetRecoilState } from "recoil";
import todoListState from '../../recoil/todoList/atoms/withTodoList';

// utility for creating unique Id
function getId() {
  return Date.now();
}

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button type="button" onClick={addItem}>
        Add
      </button>
    </div>
  );
};

export default TodoItemCreator;
