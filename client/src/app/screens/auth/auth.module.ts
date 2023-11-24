import {NgModule} from "@angular/core";
import {SignInComponent} from "./sign-in/sign-in.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {AuthRouting} from "./auth.routing";
import {RegistrationComponent} from "./registration/registration.component";
import {FormModule} from "../../shared/form/form.module";
import {LoaderModule} from "../../shared/loader/loader.module";

@NgModule({
  declarations: [
    SignInComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRouting),
    FormModule,
    LoaderModule
  ],
  exports: [],
  providers: []
})
export class AuthModule {}
