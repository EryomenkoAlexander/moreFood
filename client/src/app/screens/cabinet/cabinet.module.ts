import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CabinetRouting} from "./cabinet.routing";
import {CabinetComponent} from "./cabinet.component";

@NgModule({
  declarations: [
    CabinetComponent
  ],
  imports: [
    RouterModule.forChild(CabinetRouting)
  ],
  exports: [],
  providers: []
})
export class CabinetModule { }
