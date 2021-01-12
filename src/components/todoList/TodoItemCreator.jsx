import React, { useState } from 'react';

import { useRecoilCallback } from 'recoil';
import todoListState from '../../recoil/todoList/atoms/withTodoList';
import { addTodo } from '../../api/todoListApi';

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('');

  const addItem = useRecoilCallback(({ set }) => async () => {
    const newTodo = await addTodo({
      text: inputValue,
      isCompleted: false,
    });
    set(todoListState, (arg) => [...arg, newTodo]);
    setInputValue('');
  });

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
