import {NgModule} from "@angular/core";
import {HomeModule} from "./home/home.module";
import {RouterModule} from "@angular/router";
import {ScreensRouting} from "./screens.routing";
import {NotFoundComponent} from "./not-found/not-found.component";

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    HomeModule,
    RouterModule.forChild(ScreensRouting)
  ],
  exports: [
    NotFoundComponent
  ]
})
export class ScreensModule{ }
