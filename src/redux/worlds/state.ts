import { WorldsState } from './types';

export const defaultState: WorldsState = {
  activeWorld: 0,
  0: {
    id: 0,
    name: 'Earth',
  },
  1: {
    id: 1,
    name: 'Fanged',
  },
};

export default defaultState;
