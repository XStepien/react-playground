import React from 'react';
import PropTypes from 'prop-types';

import { useRecoilState } from 'recoil';

import todoItem from '../../recoil/todoList/atoms/withTodoItem';

const TodoItem = ({ id, onDelete }) => {
  const [item, setItem] = useRecoilState(todoItem(id));

  const editItemText = ({ target: { value } }) => {
    setItem({ ...item, text: value });
  };

  const toggleItemCompletion = () => {
    setItem({ ...item, isCompleted: !item.isCompleted });
  };

  const deleteItem = () => {
    onDelete(item.id);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isCompleted}
        onChange={toggleItemCompletion}
      />
      <button type="button" onClick={deleteItem}>
        X
      </button>
    </div>
  );
};

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoItem;
