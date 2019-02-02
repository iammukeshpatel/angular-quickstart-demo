import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  ViewChild,
  Input
} from "@angular/core";

class Hero {
  constructor(public name: string) {}
}

@Component({
  selector: "on-changes",
  templateUrl: "./on-changes.component.html",
  styleUrls: ["./on-changes.component.css"]
})

export class OnChangesComponent implements OnInit, OnChanges {
  changeLog: any = [];

  @Input()
  hero: Hero;

  @Input()
  power: string;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log("changes-", changes);
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(
        `${propName}: currentValue = ${cur}, previousValue = ${prev}`
      );
    }
  }

  reset() {
    this.changeLog = [];
  }
}
