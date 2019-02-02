import { Component, OnInit, AfterViewChecked, AfterViewInit, ViewChild } from '@angular/core';
import { LoggerService } from '../logger.service';
import { ChildViewComponent } from '../child-view/child-view.component';

@Component({
  selector: "after-view",
  templateUrl: "./after-view.component.html",
  styleUrls: ["./after-view.component.css"]
})
export class AfterViewComponent
  implements OnInit, AfterViewChecked, AfterViewInit {
  private prevHero = "";

  // Query for a VIEW child of type `ChildViewComponent`
  @ViewChild(ChildViewComponent)
  viewChild: ChildViewComponent;

  comment = "";

  constructor(private logger: LoggerService) {
    this.logIt("AfterView constructor");

    console.log(this.viewChild);
  }

  ngOnInit() {}

  ngAfterViewInit() {
    // viewChild is set after the view has been initialized
    this.logIt("AfterViewInit");
    this.doSomething();
  }

  ngAfterViewChecked() {
    // viewChild is updated after the view has been checked
    if (this.prevHero === this.viewChild.hero) {
      this.logIt("AfterViewChecked (no change)");
    } else {
      this.prevHero = this.viewChild.hero;
      this.logIt("AfterViewChecked");
      this.doSomething();
    }
  }

  // This surrogate for real business logic sets the `comment`
  private doSomething() {
    let c = this.viewChild.hero.length > 10 ? `That's a long name` : "";
    if (c !== this.comment) {
      // Wait a tick because the component's view has already been checked
      this.logger.tick_then(() => (this.comment = c));
    }
  }

  private logIt(method: string) {
    let child = this.viewChild;
    let message = `${method}: ${child ? child.hero : "no"} child view`;
    this.logger.log(message);
  }
}

