import {ComponentRef, Injectable, ViewContainerRef} from "@angular/core";
import {SnackbarComponent} from "../snackbar.component";
import {Subject} from "rxjs";
import {ISnackbarData} from "./interfaces/ISnackbarData";
import {SnackbarTypesEnum} from "./enums/SnackbarTypesEnum";

@Injectable()
export class SnackbarService {

  private _containerRef!: ViewContainerRef

  constructor( ) { }

  private createSnackbar(data: ISnackbarData) {
    this.hide()
    const snackbarRef: ComponentRef<SnackbarComponent> = this._containerRef.createComponent(SnackbarComponent)
    snackbarRef.instance.snackbarData = data
  }

  public _initContainerRef(ref: ViewContainerRef) {
    this._containerRef = ref
  }

  public success(message: string) {
    this.createSnackbar({
      type: SnackbarTypesEnum.success,
      message
    })
  }

  public error(message: string) {
    this.createSnackbar({
      type: SnackbarTypesEnum.error,
      message
    })
  }

  public warning(message: string) {
    this.createSnackbar({
      type: SnackbarTypesEnum.warning,
      message
    })
  }

  public hide() {
    this._containerRef.clear()
  }

}
