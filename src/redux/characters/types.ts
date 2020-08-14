type Gender = 'male' | 'female' | 'other';

export interface Character {
  world: number; // The ID of the world
  id: number; // The ID of the character
  name: string; // The name of the character
  age: number; // How old the character
  gender: Gender; // What gender the character is
  lives: Array<number>; // Where this character lives (ID of Place)
  groups: Array<number>; // What groups this character belongs to (ID of Group)
  description: string; // Biography/Description of the character
  image: string; // File path of the image
}

export interface CharactersState {
  [id: number]: Character;
}
