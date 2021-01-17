import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../actions/todosActions';

const TodoItemCreator = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const addItem = () => {
    const newTodo = {
      text: inputValue,
      isCompleted: true,
    };

    dispatch(addTodo(newTodo)).then(() => {
      setInputValue('');
    });
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
