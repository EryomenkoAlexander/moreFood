import {NgModule} from "@angular/core";
import {RecipesComponent} from "./recipes/recipes.component";
import {ArticlesComponent} from "./articles/articles.component";
import {SliderRecipesCardComponent} from "./recipes/slider-recipes-card/slider-recipes-card.component";

@NgModule({
  declarations: [
    RecipesComponent,
    ArticlesComponent,
    SliderRecipesCardComponent
  ],
  imports: [],
  exports: [
    RecipesComponent,
    ArticlesComponent
  ],
  providers: []
})
export class CabinetSliderModule { }
