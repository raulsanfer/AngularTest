import { Routes } from "@angular/router";
import { DynamicPageComponent } from './pages/dynamic-page/dynamic-page.component';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { SwitchesPageComponent } from "./pages/switches-page/switches-page.component";

export const reactiveRoutes: Routes=[
    {
        path:'',
        children: [
            {
                path:'basic',
                title: 'Basic Page',
                component: BasicPageComponent
            },
            {
                path:'dynamic',
                title: 'Dynamic Page',
                component: DynamicPageComponent
            },
            {
                path:'switches',
                title: 'Switches Page',
                component: SwitchesPageComponent
            },
            {
                path:'**',
                redirectTo: 'basic'
            }
        ]
    }
]