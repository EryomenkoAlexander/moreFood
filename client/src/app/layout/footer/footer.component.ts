import {Component} from "@angular/core";
import {ISocial} from "./core/interfaces/ISocial";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public socials: ISocial[] = [
    { iconData: 'fa-brands fa-instagram', url: 'https://www.instagram.com/constanta_ea/' },
    { iconData: 'fa-brands fa-telegram', url: '@constanta_ea' },
    { iconData: 'fa-brands fa-github', url: 'https://github.com/EryomenkoAlexander' }
  ]

  public phoneNumber: string = '+7 705 572 0424'
  public description: string = 'Сделано в качестве обучающего проекта'

  constructor(
  ) { }

  public goToSocial(url: string) {
    window.open(url)
  }

}
