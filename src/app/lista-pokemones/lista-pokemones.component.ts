import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/models/pokemon.model';

@Component({
  selector: 'app-lista-pokemones',
  templateUrl: './lista-pokemones.component.html',
  styleUrls: ['./lista-pokemones.component.scss']
})
export class ListaPokemonesComponent implements OnInit {
  pokemones:Array<Pokemon> = new Array();
  
  constructor() {
  }
  
  ngOnInit(): void {
    console.log('En este punto ya cargó el componente');
    this.obtenerPokemones();
  }

  async obtenerPokemones() {
    let respuesta = await fetch("http://localhost:3004/pokemones/", {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      }
    });
    this.pokemones = await respuesta.json();
    console.log("Pokemones", this.pokemones);

    //Feth es asincrono
    //Retornan un objeto tipo promesa
    // fetch("http://localhost:3004/pokemones/", {
    //   method: "GET",
    //   headers: {
    //     "Content-type": "application/json"
    //   }
    // })
    // .then((respuesta) => respuesta.json())
    // .then((pokemones) => {
    //   console.log("Pokemones", pokemones);
    // });

    //async/await

  }
}
//Sincrono: orden, una cosa despues de la otra
  // a = 1 (1m);
  // b = 2 (3min);
  // c = a+b (4min); 
  // d = c*5;

// Asincrono: pueden haber cosas simultaneas y no se espera a que termine algo
  // Instrucción 1 (1m) Asincrona
  // Instrucción 2 (2m) Asincrona
  // Instrucción 3 (4m) Asincrona
  // Instrucción 4 Sincrona.
