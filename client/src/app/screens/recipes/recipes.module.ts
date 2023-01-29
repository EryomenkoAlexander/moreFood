import {NgModule} from "@angular/core";
import {RecipesComponent} from "./recipes.component";
import {RecipesCardComponent} from "./recipes-card/recipes-card.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: []
})
export class RecipesModule {}
