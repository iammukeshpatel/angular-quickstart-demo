import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComposeMessageComponent } from './compose-message.component';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

const appRoutes: Routes = [
    {
        path: 'compose',
        component: ComposeMessageComponent,
        outlet: 'popup'
    },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
        canLoad: [AuthGuard]
    },
    {
        path: 'crisis-center',
        loadChildren: './crisis-center/crisis-center.module#CrisisCenterModule',
        data: { preload: false }
    },
    { path: '', redirectTo: '/superheroes', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: true,
                preloadingStrategy: SelectivePreloadingStrategy
            } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [
        CanDeactivateGuard,
        SelectivePreloadingStrategy
    ]
})
export class AppRoutingModule { }
