import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { HomeComponent } from './home/home.component';
import { DetallePokemonComponent } from './detalle-pokemon/detalle-pokemon.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "detalle-pokemon/:id",
    component: DetallePokemonComponent
  },
  {
    path: "pagina1",
    component: Pagina1Component
  },
  {
    path: "pagina2",
    component: Pagina2Component
  },
  {
    path: "**",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
