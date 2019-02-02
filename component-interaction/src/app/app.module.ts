import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroService } from './services/hero.service';
import { MessagesComponent } from './components/messages/messages.component';
import { MessageService } from './services/message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { HeroChildComponent } from './components/hero-child/hero-child.component';
import { HeroParentComponent } from './components/hero-parent/hero-parent.component';
import { NameParentComponent } from './components/name-parent/name-parent.component';
import { NameChildComponent } from './components/name-child/name-child.component';
import { VersionChildComponent } from './components/version-child/version-child.component';
import { VersionParentComponent } from './components/version-parent/version-parent.component';
import { VoterComponent } from './components/voter/voter.component';
import { VotetakerComponent } from './components/votetaker/votetaker.component';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';
import { CountdownParentComponent } from './components/countdown-parent/countdown-parent.component';
import { MissioncontrolComponent } from './components/missioncontrol/missioncontrol.component';
import { AstronautComponent } from './components/astronaut/astronaut.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroChildComponent,
    HeroParentComponent,
    NameParentComponent,
    NameChildComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterComponent,
    VotetakerComponent,
    CountdownTimerComponent,
    CountdownParentComponent,
    MissioncontrolComponent,
    AstronautComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    HeroService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
