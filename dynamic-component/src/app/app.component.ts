import { Component, OnInit } from '@angular/core';

import { AdService } from './services/ad.service';
import { AdItem } from './components/ad-item/ad-item';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  ads: AdItem[];

  constructor(private adService: AdService) { }

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}
