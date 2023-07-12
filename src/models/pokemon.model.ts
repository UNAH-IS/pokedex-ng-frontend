// Clases, Iterfaces -> Upper CamelCase
// Variables -> Lower CamelCase
// Constantes -> VALOR_MAXIMO
export type Gender = 'Masculino' | 'Femenino' | 'Otro';

export interface BasePokemon {
    _id?: string, //? significa que es opcional
    name: string;
    img: string;
}

export interface Pokemon extends BasePokemon {
  id:             number;
  gender?:        Gender;
  num:            string;  //string es de typescript
  type:           Array<string>;
  height:         string;
  weight:         string;
  candy:          string;
  candy_count?:   number;
  egg:            string;
  spawn_chance:   number;
  avg_spawns:     number;
  spawn_time:     string;
  multipliers:    Array<number> | null;
  weaknesses:     Array<string>;
  prev_evolution?: Array<Evolution>;
  next_evolution?: Array<Evolution>;
}

export interface Evolution {
  num:  string;
  name: string;
}