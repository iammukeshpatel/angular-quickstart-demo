import { Component, OnInit, ViewChild } from '@angular/core';
import { OnChangesComponent } from '../on-changes/on-changes.component';

class Hero {
  constructor(public name: string) {}
}

@Component({
  selector: "on-changes-parent",
  templateUrl: "./on-changes-parent.component.html",
  styleUrls: ["./on-changes-parent.component.css"]
})
export class OnChangesParentComponent implements OnInit {
  hero: Hero;
  power: string;
  title = "OnChanges";
  @ViewChild(OnChangesComponent)
  childView: OnChangesComponent;

  constructor() {
    this.reset();
  }

  ngOnInit() {}

  reset() {
    // new Hero object every time; triggers onChanges
    this.hero = new Hero("Windstorm");
    // setting power only triggers onChanges if this value is different
    this.power = "sing";
    if (this.childView) {
      this.childView.reset();
    }
  }
}
