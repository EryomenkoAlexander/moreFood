import {Routes} from "@angular/router";
import {CabinetComponent} from "./cabinet.component";

export const CabinetRouting: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: "full"
  },
  {
    path: 'cabinet/:id',
    component: CabinetComponent,
    pathMatch: "full"
  }
]
