import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {LogoComponent} from "../shared/logo/logo.component";
import {RouterModule} from "@angular/router";
import {FormModule} from "../shared/form/form.module";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent
  ],
  imports: [
    RouterModule,
    FormModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LogoComponent
  ]
})
export class LayoutModule {}
