import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroParentComponent } from './components/hero-parent/hero-parent.component';
import { NameParentComponent } from './components/name-parent/name-parent.component';
import { VersionParentComponent } from './components/version-parent/version-parent.component';
import { VotetakerComponent } from './components/votetaker/votetaker.component';
import { CountdownParentComponent } from './components/countdown-parent/countdown-parent.component';
import { MissioncontrolComponent } from './components/missioncontrol/missioncontrol.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'component-interaction', component: HeroParentComponent },
  { path: 'name-parent', component: NameParentComponent },
  { path: 'version-parent', component: VersionParentComponent },
  { path: 'votetaker', component: VotetakerComponent },
  { path: 'countdown', component: CountdownParentComponent },
  { path: 'missioncontrol', component: MissioncontrolComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
