import {Routes} from "@angular/router";
import {CabinetComponent} from "./cabinet.component";
import {AuthGuard} from "../../auth/guards/auth.guard";

export const CabinetRouting: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: "full"
  },
  {
    path: 'cabinet/:id',
    component: CabinetComponent,
    pathMatch: "full",
    canActivate: [AuthGuard]
  }
]
