import { Component } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pokemon } from 'src/models/pokemon.model';


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

  guardarPokemon() {
    console.log(this.pokemon);
    fetch('localhost:3000/pokemones', {
      method: 'POST'
    })
  }
}
