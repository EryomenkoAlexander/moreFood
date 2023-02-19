import {Routes} from "@angular/router";
import {SignInComponent} from "./sign-in/sign-in.component";
import {RegistrationComponent} from "./registration/registration.component";

export const AuthRouting: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: "full"
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    pathMatch: "full"
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    pathMatch: "full"
  }
]
