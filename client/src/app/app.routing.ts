import {Routes} from "@angular/router";
import {HomeComponent} from "./screens/home/home.component";
import {NotFoundComponent} from "./screens/not-found/not-found.component";

export const AppRouting: Routes = [
  {
    path: '',
    pathMatch: "full",
    component: HomeComponent
  },
  {
    path: 'screens',
    loadChildren: () => import('./screens/screens.module').then(m => m.ScreensModule)
  },
  {
    path: '**',
    pathMatch: "full",
    component: NotFoundComponent
  }
]
