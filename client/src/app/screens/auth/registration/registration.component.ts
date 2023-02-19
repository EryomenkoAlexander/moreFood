import {Component} from "@angular/core";
import {linkConfidentiality} from "../core/consts";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  public linkConfidentiality: string = linkConfidentiality

  constructor() { }

}
