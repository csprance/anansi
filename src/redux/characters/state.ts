import { CharactersState } from './types';

export const defaultState: CharactersState = {
  0: {
    world: 0,
    id: 0,
    name: 'Chris Sprance',
    age: 18,
    gender: 'male',
    lives: [0],
    groups: [0],
    description: 'He is a cool dude',
    image: 'http://placehold.it/200x200',
  },
};

export default defaultState;
