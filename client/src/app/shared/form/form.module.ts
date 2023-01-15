import {NgModule} from "@angular/core";
import {InputComponent} from "./input/input.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ButtonComponent} from "./button/button.component";

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent
  ],
})
export class FormModule {}
