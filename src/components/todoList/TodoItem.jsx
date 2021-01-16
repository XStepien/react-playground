import React from 'react';
import PropTypes from 'prop-types';

import { useRecoilState } from 'recoil';

import todoItem from '../../recoil/todoList/atoms/withTodoItem';

// function replaceItemAtIndex(arr, index, newValue) {
//   return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
// }

// function removeItemAtIndex(arr, index) {
//   return [...arr.slice(0, index), ...arr.slice(index + 1)];
// }

const TodoItem = ({ id, onDelete }) => {
  const [item, setItem] = useRecoilState(todoItem(id));

  const editItemText = ({ target: { value } }) => {
    setItem({ ...item, text: value });
    // onUpdate({ ...item, text: value });
  };

  const toggleItemCompletion = () => {
    setItem({ ...item, isCompleted: !item.isCompleted });
    // onUpdate({ ...item, isCompleted: !item.isCompleted });
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
  // item: PropTypes.shape({
  //   id: PropTypes.number,
  //   isCompleted: PropTypes.bool,
  //   text: PropTypes.string,
  // }).isRequired,
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoItem;
