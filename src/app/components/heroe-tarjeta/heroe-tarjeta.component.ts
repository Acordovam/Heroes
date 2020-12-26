import { Component, OnInit, Input } from '@angular/core';
import {HeroesService} from '../../servicios/heroes.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
@Input() heroe: any = {};
@Input() index: number;
  // tslint:disable-next-line:variable-name
  constructor(private _heroesService: HeroesService,
              private router: Router) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  verHeroe( ) {
    this.router.navigate( ['/heroe', this.index] );
  }
}
