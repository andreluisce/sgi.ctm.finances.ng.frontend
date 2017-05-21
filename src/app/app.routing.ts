import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './components/dashboard/dashboard.component';

const APP_ROUTES : Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    }, {
        path: 'dashboard',
        component: DashboardComponent
    }

];

export const routing : ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);