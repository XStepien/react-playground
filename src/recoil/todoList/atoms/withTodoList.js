import { atom, selector } from 'recoil';
import { getAllTodos } from '../../../api/todoListApi';

const todoListStateDefaultSelector = selector({
  key: 'todoListState/Default',
  get: () => getAllTodos(),
});

const todoListState = atom({
  key: 'todoListState',
  default: todoListStateDefaultSelector,
});

export default todoListState;
