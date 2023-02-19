import {NgModule} from "@angular/core";
import {RecipesComponent} from "./recipes.component";
import {RecipesCardComponent} from "./recipes-card/recipes-card.component";
import {CommonModule} from "@angular/common";
import {FormModule} from "../../shared/form/form.module";
import {RouterModule} from "@angular/router";
import {RecipesRouting} from "./recipes.routing";

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesCardComponent
  ],
  imports: [
    CommonModule,
    FormModule,
    RouterModule.forChild(RecipesRouting)
  ],
  exports: []
})
export class RecipesModule {}
