import { NgModule } from "@angular/core";

import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HeroDetailComponent } from "./components/hero-detail/hero-detail.component";

// import { AboutComponent } from "./about/about.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: DashboardComponent },
      { path: "heroes/:id", component: HeroDetailComponent }
      //{ path: "about", component: AboutComponent },
    ])
  ],
  exports: [RouterModule] // re-export the module declarations
})
export class AppRoutingModule {}
