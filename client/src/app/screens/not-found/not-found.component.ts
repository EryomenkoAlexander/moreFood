import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

  public title: string = 'Страница не найдена...'
  public description: string = 'Пойми, дело не в тебе, просто данный адрес не доступен.'

  constructor(
    private _router: Router
  ) {}

  public goToHome() {
    this._router.navigate(['/'])
  }

}
