import {Component, Input} from "@angular/core";
import {ISnackbarData} from "./core/interfaces/ISnackbarData";
import {SnackbarTypesEnum} from "./core/enums/SnackbarTypesEnum";
import {SnackbarService} from "./core/snackbar.service";

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {

  @Input() snackbarData!: ISnackbarData

  public isClosed: boolean = false

  constructor(
    private _snackbarService: SnackbarService
  ) { }

  public getIcon(type: SnackbarTypesEnum): string {
    switch (type) {
      case 'success': return 'fa-solid fa-circle-check';
      case 'error': return 'fa-solid fa-circle-xmark';
      case 'warning': return 'fa-solid fa-circle-exclamation';
      default: return ''
    }
  }

  public close() {
    this.isClosed = true
    setTimeout(() => {
      this._snackbarService.hide()
    }, 500)
  }

}
