import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../servicios/heroes.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {
  heroes: any[] = [];
  // tslint:disable-next-line:variable-name
  constructor(private _heroesService: HeroesService,
              private router: Router) {}
  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }
  // tslint:disable-next-line:typedef
  verHeroe( idx: number): void {
    this.router.navigate( ['/heroe', idx] );
  }

}
