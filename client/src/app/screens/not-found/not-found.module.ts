import {NgModule} from "@angular/core";
import {FormModule} from "../../shared/form/form.module";
import {NotFoundComponent} from "./not-found.component";

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    FormModule
  ],
  exports: []
})
export class NotFoundModule {}
