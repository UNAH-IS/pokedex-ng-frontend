import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { Pokemon } from 'src/models/pokemon.model';

@Component({
  selector: 'app-detalle-pokemon',
  templateUrl: './detalle-pokemon.component.html',
  styleUrls: ['./detalle-pokemon.component.scss']
})
export class DetallePokemonComponent implements OnInit {
  id: string | null;
  pokemon: Pokemon;
  opcionMenu: string = "about";
  spawChancePercentage:string = 'width:0%';

  //Inyección?, inyecta una instancia global de algun tipo
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.obtenerDetallePokemon();
  }

  async obtenerDetallePokemon() {
    let respuesta = await fetch(`http://localhost:3004/pokemones/${this.id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      }
    });
    this.pokemon = await respuesta.json();
    this.spawChancePercentage = `width:${100*(this.pokemon.spawn_chance/4)}%`;
    console.log("Pokemon", this.pokemon);
  }

  seleccionarOpcionMenu(opcion: string) {
    this.opcionMenu = opcion;
    console.log("Opción seleccionada: ", this.opcionMenu);
  }
}
