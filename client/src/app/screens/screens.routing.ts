import {Routes} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";

export const ScreensRouting: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: '/'
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    pathMatch: "full"
  }
]
