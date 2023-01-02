import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {LogoComponent} from "../shared/logo/logo.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent
  ],
  imports: [],
  exports: [
    HeaderComponent,
    FooterComponent,
    LogoComponent
  ]
})
export class LayoutModule {}
