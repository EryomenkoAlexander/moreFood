import {Component} from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public logoPath: string = 'assets/images/logo.png'

  constructor() {
  }

}
