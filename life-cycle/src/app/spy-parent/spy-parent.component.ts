import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: "spy-parent",
  templateUrl: "./spy-parent.component.html",
  styleUrls: ["./spy-parent.component.css"]
})
export class SpyParentComponent implements OnInit {
  newName = "Herbie";
  heroes: string[] = ["Windstorm", "Magneta"];

  constructor(public logger: LoggerService) {}

  ngOnInit() {}

  addHero() {
    if (this.newName.trim()) {
      this.heroes.push(this.newName.trim());
      this.newName = "";
      this.logger.tick();
    }
  }
  removeHero(hero: string) {
    this.heroes.splice(this.heroes.indexOf(hero), 1);
    this.logger.tick();
  }
  reset() {
    this.logger.log("-- reset --");
    this.heroes = [];
    this.logger.tick();
  }
}
