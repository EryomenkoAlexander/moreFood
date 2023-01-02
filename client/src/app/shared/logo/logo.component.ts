import {Component} from "@angular/core";

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {

  public logoPath: string = 'assets/images/logo.png'

}
