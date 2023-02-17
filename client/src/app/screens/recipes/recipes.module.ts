import {NgModule} from "@angular/core";
import {RecipesComponent} from "./recipes.component";
import {RecipesCardComponent} from "./recipes-card/recipes-card.component";
import {CommonModule} from "@angular/common";
import {FormModule} from "../../shared/form/form.module";

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesCardComponent
  ],
  imports: [
    CommonModule,
    FormModule
  ],
  exports: []
})
export class RecipesModule {}
