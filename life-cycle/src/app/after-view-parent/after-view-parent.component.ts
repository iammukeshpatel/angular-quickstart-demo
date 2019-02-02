import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: "after-view-parent",
  templateUrl: "./after-view-parent.component.html",
  styleUrls: ["./after-view-parent.component.css"]
})
export class AfterViewParentComponent implements OnInit {
  
  constructor(public logger: LoggerService) {}

  ngOnInit() {}

  show = true;

  reset() {
    this.logger.clear();
    // quickly remove and reload AfterViewComponent which recreates it
    this.show = false;
    this.logger.tick_then(() => (this.show = true));
  }
}
