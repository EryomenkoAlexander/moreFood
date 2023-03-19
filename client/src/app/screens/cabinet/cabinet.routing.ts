import {Routes} from "@angular/router";
import {CabinetComponent} from "./cabinet.component";

export const CabinetRouting: Routes = [
  {
    path: '',
    component: CabinetComponent,
    pathMatch: 'full'
  }
]
