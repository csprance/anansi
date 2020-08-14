export interface World {
  id: number;
  name: string;
}

export interface WorldsState {
  activeWorld: number;
  [id: number]: World;
}
