import { atom } from 'recoil';

export const FILTER_STATES = {
  ALL: 'Show All',
  COMPLETED: 'Show Completed',
  UNCOMPLETED: 'Show Uncompleted',
}

const todoListFilterState = atom({
  key: "todoListFilterState",
  default: FILTER_STATES.ALL,
});

export default todoListFilterState;
