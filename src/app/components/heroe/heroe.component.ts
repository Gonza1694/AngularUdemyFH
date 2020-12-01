import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  heroe: any = {};

  // Metodo para seleccionar el icono DC o Marvel
  heroeCasa = () => `assets/icons/${this.heroe.casa.toLowerCase()}-ico.png`;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.heroe = this._heroesService.getHeroe(params['id']);
    });
  }
}
