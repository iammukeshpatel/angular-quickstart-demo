import { Component, OnInit, ViewChild } from '@angular/core';
import { DoCheckComponent } from '../do-check/do-check.component';

class Hero {
  constructor(public name: string) {}
}

@Component({
  selector: "do-check-parent",
  templateUrl: "./do-check-parent.component.html",
  styleUrls: ["./do-check-parent.component.css"]
})
export class DoCheckParentComponent implements OnInit {
  hero: Hero;
  power: string;
  title = "DoCheck";
  @ViewChild(DoCheckComponent)
  childView: DoCheckComponent;

  constructor() {
    this.reset();
  }

  ngOnInit() {}

  reset() {
    this.hero = new Hero("Windstorm");
    this.power = "sing";
    if (this.childView) {
      this.childView.reset();
    }
  }
}
