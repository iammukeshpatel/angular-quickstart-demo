import { Component, OnInit, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { AdDirective } from '../../ad.directive';
import { AdItem } from '../ad-item/ad-item';
import { AdComponent } from '../ad/ad.component';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() ads: AdItem[];
  currentAddIndex = -1;
  @ViewChild(AdDirective)
  adHost: AdDirective;

  subscription: any;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAddIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
