import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

let nextId = 1;

@Component({
  selector: "peek-a-boo",
  templateUrl: "./peek-aboo.component.html",
  styleUrls: ["./peek-aboo.component.css"]
})
export class PeekABooComponent implements OnInit {
  constructor(private logger: LoggerService) {}

  // implement OnInit's `ngOnInit` method
  ngOnInit() {
    this.logIt(`OnInit`);
  }

  logIt(msg: string) {
    this.logger.log(`#${nextId++} ${msg}`);
  }
}
