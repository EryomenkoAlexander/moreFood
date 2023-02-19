import {NgModule} from "@angular/core";
import {OneRecipeComponent} from "./one-recipe.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {OneRecipeRouting} from "./one-recipe.routing";

@NgModule({
  declarations: [
    OneRecipeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(OneRecipeRouting)
  ],
  exports: [],
  providers: []
})
export class OneRecipeModule {}
