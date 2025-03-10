import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { DragonBallPageComponent } from './pages/dragonball/dragonball-page.component';
import { DragonBallSuperPageComponent } from './pages/dragonball-super/dragonball-super-page.component';
import { HeroPageComponent, TestComponent } from './pages/hero/hero-page.component';

export const routes: Routes = [
    {
        path:'',
        component:CounterPageComponent,
    },
    {
        path: 'hero',
        component: HeroPageComponent
    },
    {
        path: 'test',
        component: TestComponent
    },    
    {
        path:"dragonball",
        component: DragonBallPageComponent
    },
    {
        path:"dragonball-super",
        component: DragonBallSuperPageComponent
    },
    {
        path:"**",
        redirectTo: ''
    }
];
