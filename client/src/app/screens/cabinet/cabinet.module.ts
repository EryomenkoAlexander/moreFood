import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CabinetRouting} from "./cabinet.routing";
import {CabinetComponent} from "./cabinet.component";
import {CabinetService} from "./core/services/cabinet.service";
import {CommonModule} from "@angular/common";
import {LoaderModule} from "../../shared/loader/loader.module";
import {FormModule} from "../../shared/form/form.module";
import {CabinetSliderModule} from "./cabinet-slider/cabinet-slider.module";

@NgModule({
  declarations: [
    CabinetComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CabinetRouting),
    LoaderModule,
    FormModule,
    CabinetSliderModule
  ],
  exports: [],
  providers: [
    CabinetService
  ]
})
export class CabinetModule { }
