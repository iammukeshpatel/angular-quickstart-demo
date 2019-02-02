import { Component, OnInit, OnChanges, SimpleChanges } from "@angular/core";

import { LoggerService } from "../logger.service";

@Component({
  selector: "counter-parent",
  templateUrl: "./counter-parent.component.html",
  styleUrls: ["./counter-parent.component.css"]
})
export class CounterParentComponent implements OnInit {
  value: number;
  spyLog: string[] = [];

  private logger: LoggerService;

  constructor(logger: LoggerService) {
    this.logger = logger;
    this.spyLog = logger.logs;
    this.reset();
  }

  ngOnInit() {}

  updateCounter() {
    this.value += 1;
    this.logger.tick();
  }

  reset() {
    this.logger.log("-- reset --");
    this.value = 0;
    this.logger.tick();
  }
  
}
