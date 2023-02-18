import {Routes} from "@angular/router";
import {OneRecipeComponent} from "./one-recipe.component";

export const OneRecipeRouting: Routes = [
  {
    path: '',
    component: OneRecipeComponent,
    pathMatch: "full"
  },
]
