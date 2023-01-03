import {NgModule} from "@angular/core";
import {InputComponent} from "./input/input.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    InputComponent
  ],
})
export class FormModule {}
