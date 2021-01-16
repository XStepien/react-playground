import { atomFamily, selectorFamily } from 'recoil';

import todoListState from './withTodoList';

const todoListItem = atomFamily({
  key: 'todoListItem',
  default: selectorFamily({
    key: 'todoListItem/Default',
    get: (id) => ({ get }) => get(todoListState).find((item) => item.id === id),
  }),
});

export default todoListItem;
