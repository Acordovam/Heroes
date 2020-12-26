import { Component, OnInit } from '@angular/core';
import {HeroesService } from '../../../servicios/heroes.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-heroe-search',
  templateUrl: './heroe-search.component.html',
  styleUrls: ['./heroe-search.component.css']
})
export class HeroeSearchComponent implements OnInit {
  heroes: any[] = [];
  busqueda: string;
  // tslint:disable-next-line:variable-name
  constructor(private _heroesService: HeroesService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.heroes = this._heroesService.buscarHeroes(params.buscar);
      this.busqueda = params.buscar;
    });

  }

  ngOnInit(): void {

  }
  verHeroe( idx: number): void {
    this.router.navigate( ['/heroe', idx] );
  }
}
