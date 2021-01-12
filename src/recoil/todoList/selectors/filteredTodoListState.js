import { selector } from 'recoil';

import todoListState from '../atoms/withTodoList';
import todoListFilterState, {
  FILTER_STATES,
} from '../atoms/withTodoListFilterState';

const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case FILTER_STATES.COMPLETED:
        return list.filter((item) => item.isCompleted);
      case FILTER_STATES.UNCOMPLETED:
        return list.filter((item) => !item.isCompleted);
      default:
        return list;
    }
  },
});

export default filteredTodoListState;
