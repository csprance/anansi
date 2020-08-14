export interface Group {
  world: number; // The ID of the world
  id: number;
  name: string;
}

export interface GroupsState {
  [id: number]: Group;
}
