import {Routes} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";

export const ScreensRouting: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: "full",
  },
  {
    path: 'cabinet',
    loadChildren: () => import('./cabinet/cabinet.module').then(m => m.CabinetModule)
  },
  {
    path: 'recipes',
    loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
]
