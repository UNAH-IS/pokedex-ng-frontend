import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/models/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  @Input() pokemon: Pokemon;
  @Input() a: string;
  @Input() b: string;
  @Input() c: string;
}
