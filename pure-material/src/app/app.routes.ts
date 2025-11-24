import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { ChartsComponent } from './components/charts/charts';
import { TokensComponent } from './components/tokens/tokens';

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
        path: '**',
        redirectTo: ''
    }
];
