import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectTotalCompletedTodos,
  selectTotalTodos,
} from '../../selectors/todosSelectors';

const TodoListStats = () => {
  const { totalNum, totalCompletedNum } = useSelector((state) => ({
    totalNum: selectTotalTodos(state),
    totalCompletedNum: selectTotalCompletedTodos(state),
  }));

  const totalUncompletedNum = totalNum - totalCompletedNum;
  const percentCompleted =
    totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

  const formattedPercentCompleted = Math.round(percentCompleted);

  return (
    <ul>
      <li>
        Total items:
        {totalNum}
      </li>
      <li>
        Items completed:
        {totalCompletedNum}
      </li>
      <li>
        Items not completed:
        {totalUncompletedNum}
      </li>
      <li>{`Percent completed: ${formattedPercentCompleted}%`}</li>
    </ul>
  );
};

export default React.memo(TodoListStats);
