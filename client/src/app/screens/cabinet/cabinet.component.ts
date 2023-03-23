import {Component, OnDestroy, OnInit} from "@angular/core";
import {CabinetService} from "./core/services/cabinet.service";
import {Subject, takeUntil} from "rxjs";
import {IUser} from "../auth/core/interfaces/IUser";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss']
})
export class CabinetComponent implements OnInit, OnDestroy {

  private _destroy$: Subject<any> = new Subject<any>()

  public user!: IUser

  get userId(): string {
    return this._route.snapshot.params['id']
  }

  constructor(
    private _cabinetService: CabinetService,
    private _route: ActivatedRoute
  ) { }

  private _getUser() {
    this._cabinetService.getUser(this.userId)
      .pipe(takeUntil(this._destroy$))
      .subscribe((response: IUser) => {
        this.user = response
      })
  }

  ngOnInit() {
    this._getUser()
  }

  ngOnDestroy() {
    this._destroy$.next(null)
    this._destroy$.complete()
  }

}
