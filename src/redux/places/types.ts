export interface Place {
  world: number; // The ID of the world
  id: number;
  name: string;
  description: string;
}

export interface PlacesState {
  [id: number]: Place;
}
