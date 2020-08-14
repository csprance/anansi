export interface Item {
  world: number; // The ID of the world
  id: number;
  name: string;
}

export interface ItemsState {
  [id: number]: Item;
}
