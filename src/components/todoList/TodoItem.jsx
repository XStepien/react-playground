import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodoById } from '../../selectors/todosSelectors';
import { editTodo, removeTodo } from '../../actions/todosActions';

const TodoItem = ({ id }) => {
  const dispatch = useDispatch();
  const item = useSelector((state) => selectTodoById(state, id));

  const editItemText = ({ target: { value } }) =>
    dispatch(editTodo({ ...item, text: value }));

  const toggleItemCompletion = () =>
    dispatch(editTodo({ ...item, isCompleted: !item.isCompleted }));

  const deleteItem = () => dispatch(removeTodo(item.id));

  return (
    <div data-testid={`todoListItem${item.id}`}>
      <input type="text" defaultValue={item.text} onBlur={editItemText} />
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
};

export default React.memo(TodoItem);
