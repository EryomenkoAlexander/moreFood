import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {GreetingComponent} from "./greeting/greeting.component";
import {FormModule} from "../../shared/form/form.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    HomeComponent,
    GreetingComponent
  ],
    imports: [
      FormModule,
      RouterModule
    ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {}
