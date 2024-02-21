export interface Character {
  id: string;
  name: string;
  culture: string;
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: number;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  patronus: string;
  hogwartsStudent: true;
  hogwartsStaff: false;
  actor: string;
  alternate_actors: [];
  alive: boolean;
  image: string;
}
