import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightswitch-comp',
  templateUrl: './lightswitch-comp.component.html',
  styleUrls: ['./lightswitch-comp.component.css']
})
export class LightswitchCompComponent implements OnInit {
  isOn = false;

  constructor() { }

  ngOnInit() {
  }

  clicked() { this.isOn = !this.isOn; }

  get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }


}
