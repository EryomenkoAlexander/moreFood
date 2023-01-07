import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {GreetingComponent} from "./greeting/greeting.component";

@NgModule({
  declarations: [
    HomeComponent,
    GreetingComponent
  ],
  imports: [

  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {}
