import {Routes} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";

export const ScreensRouting: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: "full",
  },
  {
    path: 'recipes',
    loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule)
  }
]
