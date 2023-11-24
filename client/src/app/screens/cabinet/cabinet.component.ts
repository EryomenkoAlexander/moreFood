import {Component, OnDestroy, OnInit} from "@angular/core";
import {CabinetService} from "./core/services/cabinet.service";
import {Observable, Subject, takeUntil} from "rxjs";
import {IUser} from "../auth/core/interfaces/IUser";
import {ActivatedRoute} from "@angular/router";
import {SnackbarService} from "../../shared/snackbar/core/services/snackbar.service";

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss']
})
export class CabinetComponent implements OnInit, OnDestroy {

  private _destroy$: Subject<any> = new Subject<any>()

  public user$!: Observable<IUser>

  get userId(): string {
    return this._route.snapshot.params['id']
  }

  constructor(
    private _cabinetService: CabinetService,
    private _route: ActivatedRoute,
    private _snackbarService: SnackbarService
  ) { }

  private _getUser() {
    this.user$ = this._cabinetService.getUser(this.userId)
  }

  public sendMessage() {
    this._snackbarService.error('Отправка сообщений недоступна')
  }

  ngOnInit() {
    this._getUser()
  }

  ngOnDestroy() {
    this._destroy$.next(null)
    this._destroy$.complete()
  }

}
