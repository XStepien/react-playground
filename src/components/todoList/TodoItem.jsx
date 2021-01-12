import React from "react";
import PropTypes from "prop-types";

// function replaceItemAtIndex(arr, index, newValue) {
//   return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
// }

// function removeItemAtIndex(arr, index) {
//   return [...arr.slice(0, index), ...arr.slice(index + 1)];
// }

const TodoItem = ({ item, onUpdate, onDelete }) => {
  const editItemText = ({ target: { value } }) => {
    onUpdate({ ...item, text: value });
  };

  const toggleItemCompletion = () => {
    onUpdate({ ...item, isCompleted: !item.isCompleted });
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
  item: PropTypes.shape({
    id: PropTypes.number,
    isCompleted: PropTypes.bool,
    text: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoItem;
