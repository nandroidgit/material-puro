import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { ChartsComponent } from './components/charts/charts';
import { TokensComponent } from './components/tokens/tokens';
import { Panels } from './components/panels/panels';
import { Tabs } from './components/tabs/tabs';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'charts',
        component: ChartsComponent
    },
    {
        path: 'tokens',
        component: TokensComponent
    },
    {
        path: 'panels',
        component: Panels
    },
    {
        path: 'tabs',
        component: Tabs
    },
    {
        path: '**',
        redirectTo: ''
    }
];
