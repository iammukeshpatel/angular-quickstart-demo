import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LightswitchCompComponent } from './components/lightswitch-comp/lightswitch-comp.component';
import { DashboardHeroComponent } from './components/dashboard-hero/dashboard-hero.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { BannerComponent } from './components/banner/banner.component';
import { TwainComponent } from './components/twain/twain.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroService } from './services/hero.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LightswitchCompComponent,
    DashboardHeroComponent,
    WelcomeComponent,
    BannerComponent,
    TwainComponent,
    DashboardComponent,
    HeroDetailComponent
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
