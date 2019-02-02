import {
  Component,
  OnInit,
  Input,
  OnChanges, SimpleChanges
} from "@angular/core";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"]
})
export class CounterComponent implements OnInit, OnChanges {
  @Input()
  counter: number;
  changeLog: string[] = [];
  
  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    // Empty the changeLog whenever counter goes to zero
    // hint: this is a way to respond programmatically to external value changes.
    if (this.counter === 0) {
      this.changeLog = [];
    }

    // A change to `counter` is the only change we care about
    let chng = changes["counter"];
    let cur = chng.currentValue;
    let prev = JSON.stringify(chng.previousValue); // first time is {}; after is integer
    this.changeLog.push(
      `counter: currentValue = ${cur}, previousValue = ${prev}`
    );
  }
}
