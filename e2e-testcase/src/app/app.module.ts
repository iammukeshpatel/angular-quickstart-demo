import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroesModule } from './heroes/heroes.module';
// import { CrisisCenterModule } from './crisis-center/crisis-center.module';
import { ComposeMessageComponent } from './compose-message.component';
// import { AdminModule } from './admin/admin.module';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { DialogService } from './dailog.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    // CrisisCenterModule,
    BrowserAnimationsModule,
    // AdminModule,
    LoginRoutingModule,
    AppRoutingModule
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})

export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}

