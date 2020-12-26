import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {HeroesService} from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent {
  heroe: any = {};
  casaImg: string;
  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this.heroesService.getHeroe(params.id);
      console.log(this.heroe);
      if (this.heroe.casa === 'Marvel'){
        this.casaImg = 'assets/img/marvel.png';
      }else{
        this.casaImg = 'assets/img/dc.png';
      }
    });
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
  }

}
