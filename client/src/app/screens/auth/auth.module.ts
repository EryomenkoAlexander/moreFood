import {NgModule} from "@angular/core";
import {SignInComponent} from "./sign-in/sign-in.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {AuthRouting} from "./auth.routing";
import {RegistrationComponent} from "./registration/registration.component";
import {FormModule} from "../../shared/form/form.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    SignInComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRouting),
    FormModule,
    FormsModule
  ],
  exports: []
})
export class AuthModule {}
