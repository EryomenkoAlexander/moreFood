import {NgModule} from "@angular/core";
import {HomeModule} from "./home/home.module";
import {RouterModule} from "@angular/router";
import {ScreensRouting} from "./screens.routing";
import {NotFoundModule} from "./not-found/not-found.module";

@NgModule({
  declarations: [
  ],
  imports: [
    HomeModule,
    NotFoundModule,
    RouterModule.forChild(ScreensRouting)
  ],
  exports: [
  ]
})
export class ScreensModule{ }
