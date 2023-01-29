import {NgModule} from "@angular/core";
import {HomeModule} from "./home/home.module";
import {RouterModule} from "@angular/router";
import {ScreensRouting} from "./screens.routing";
import {NotFoundModule} from "./not-found/not-found.module";
import {RecipesModule} from "./recipes/recipes.module";

@NgModule({
  declarations: [
  ],
  imports: [
    HomeModule,
    NotFoundModule,
    RouterModule.forChild(ScreensRouting),
    RecipesModule
  ],
  exports: [
  ]
})
export class ScreensModule{ }
