import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CabinetRouting} from "./cabinet.routing";
import {CabinetComponent} from "./cabinet.component";
import {CabinetService} from "./core/services/cabinet.service";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    CabinetComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CabinetRouting)
  ],
  exports: [],
  providers: [
    CabinetService
  ]
})
export class CabinetModule { }
