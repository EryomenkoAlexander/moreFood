import {Routes} from "@angular/router";
import {RecipesComponent} from "./recipes.component";

export const RecipesRouting: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
    pathMatch: "full"
  },
  {
    path: 'recipes/:id',
    loadChildren: () => import('./one-recipe/one-recipe.module').then(m => m.OneRecipeModule),
  }
]
