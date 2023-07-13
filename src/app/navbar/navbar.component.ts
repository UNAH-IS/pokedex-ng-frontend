import { Component } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pokemon } from 'src/models/pokemon.model';

interface TipoPokemon {
  type: string;
  checked: boolean;
}


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  faChevronLeft = faChevronLeft;
  closeResult = '';
  pokemon: Pokemon = {
    id: 0,
    _id: "",
    name: "",
    img: "",
    gender: "Otro",
    num: "",
    type: [],
    height: "",
    weight: "",
    candy: "",
    candy_count: 0,
    egg: "",
    spawn_chance: 0,
    avg_spawns: 0,
    spawn_time: "",
    multipliers: [],
    weaknesses: [],
    prev_evolution: [],
    next_evolution: []
  }
  fireType:boolean;
  types:TipoPokemon[] = [
    {
      type: "Fire",
      checked: false
    },
    {
      type: "Grass",
      checked: false
    },
    {
      type: "Poison",
      checked: false
    },
    {
      type: "Electric",
      checked: false
    },
    {
      type: "Water",
      checked: false
    },
    {
      type: "Ground",
      checked: false
    },
    {
      type: "Fairy",
      checked: false
    }
  ];

  constructor(private modalService: NgbModal) {}

  open(content:any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
	  );
  }

  private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

  async guardarPokemon() {
    let tipos = this.types.filter(item => item.checked).map((item:TipoPokemon) => {
        return item.type
    });
    this.pokemon.type = tipos;

    let respuesta = await fetch('http://localhost:3004/pokemones', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.pokemon)
    });

    let respuestaJson = await respuesta.json();
    console.log("Pokemon guardado", respuestaJson);
  }
}
