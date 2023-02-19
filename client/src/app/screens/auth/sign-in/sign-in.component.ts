import {Component} from "@angular/core";
import {linkConfidentiality} from "../core/consts";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  public linkConfidentiality: string = linkConfidentiality

  constructor() { }

}
