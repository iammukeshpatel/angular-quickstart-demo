import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: "after-content-parent",
  templateUrl: "./after-content-parent.component.html",
  styleUrls: ["./after-content-parent.component.css"]
})
export class AfterContentParentComponent implements OnInit {
  show = true;

  constructor(public logger: LoggerService) {}

  ngOnInit() {}

  reset() {
    this.logger.clear();
    // quickly remove and reload AfterContentComponent which recreates it
    this.show = false;
    this.logger.tick_then(() => (this.show = true));
  }
}
