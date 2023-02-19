import {Component} from "@angular/core";
import {linkConfidentiality} from "../core/consts";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  public linkConfidentiality: string = linkConfidentiality
  public showPassword: boolean = false;
  public showConfirmPassword: boolean = false;
  public wastePhoneNumber = [' ', '(', ')']
  public maskPhoneNumber = '+0 (000) 000 00 00'

  constructor() { }

  public toggleShowPassword() {
    this.showPassword = !this.showPassword
  }

  public toggleConfirmShowPassword() {
    this.showConfirmPassword = !this.showConfirmPassword
  }

}
