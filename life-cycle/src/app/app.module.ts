import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { PeekABooComponent } from './peek-aboo/peek-aboo.component';
import { SpyDirective } from './spy.directive';
import { SpyComponent } from './spy/spy.component';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { OnChangesParentComponent } from './on-changes-parent/on-changes-parent.component';
import { DoCheckComponent } from './do-check/do-check.component';
import { DoCheckParentComponent } from './do-check-parent/do-check-parent.component';
import { AfterViewComponent } from './after-view/after-view.component';
import { AfterContentComponent } from './after-content/after-content.component';
import { ChildComponent } from './child/child.component';
import { AfterContentParentComponent } from './after-content-parent/after-content-parent.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { PeekABooParentComponent } from './peek-a-boo-parent/peek-a-boo-parent.component';
import { SpyParentComponent } from './spy-parent/spy-parent.component';
import { AfterViewParentComponent } from './after-view-parent/after-view-parent.component';
import { CounterParentComponent } from './counter-parent/counter-parent.component';
import { CounterComponent } from './counter/counter.component';


@NgModule({
  declarations: [
    AppComponent,
    PeekABooComponent,
    SpyDirective,
    SpyComponent,
    OnChangesComponent,
    OnChangesParentComponent,
    DoCheckComponent,
    DoCheckParentComponent,
    AfterViewComponent,
    AfterContentComponent,
    ChildComponent,
    AfterContentParentComponent,
    ChildViewComponent,
    PeekABooParentComponent,
    SpyParentComponent,
    AfterViewParentComponent,
    CounterParentComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
