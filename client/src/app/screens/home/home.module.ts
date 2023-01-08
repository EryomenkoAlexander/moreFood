import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {GreetingComponent} from "./greeting/greeting.component";
import {FormModule} from "../../shared/form/form.module";

@NgModule({
  declarations: [
    HomeComponent,
    GreetingComponent
  ],
  imports: [
    FormModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {}
