import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../../classes/hero';

@Component({
  selector: 'app-hero-child',
  templateUrl: './hero-child.component.html',
  styleUrls: ['./hero-child.component.css']
})
export class HeroChildComponent implements OnInit {

  @Input() hero: Hero;
  // tslint:disable-next-line:no-input-rename
  @Input('master') masterName: string;

  constructor() { }

  ngOnInit() {
  }

}
