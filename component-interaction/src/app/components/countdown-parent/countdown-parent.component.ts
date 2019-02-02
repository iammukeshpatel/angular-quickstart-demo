import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';

import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-countdown-parent',
  templateUrl: './countdown-parent.component.html',
  styleUrls: ['./countdown-parent.component.css']
})

export class CountdownParentComponent implements OnInit, AfterViewInit {

  @ViewChild(CountdownTimerComponent)
  private timerComponent: CountdownTimerComponent;

  constructor() { }

  ngOnInit() {
  }

  seconds() { return 0; }

  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  start() { this.timerComponent.start(); }
  stop() { this.timerComponent.stop(); }

}
