import {Component, OnDestroy, OnInit} from "@angular/core";
import {IDropDown} from "./core/interfaces/IDropDown";
import {Router} from "@angular/router";
import {AuthService} from "../../auth/services/auth.service";
import {dishMenu} from "./core/consts/dishMenu";
import {kitchenMenu} from "./core/consts/kitchenMenu";
import {HeaderService} from "./core/services/header.service";
import {Subject, takeUntil} from "rxjs";
import {IUser} from "../../screens/auth/core/interfaces/IUser";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private _destroy$: Subject<any> = new Subject<any>()

  public user!: IUser

  public kitchenMenu: IDropDown[] = kitchenMenu
  public kitchenIsOpen: boolean = false;

  public dishMenu: IDropDown[] = dishMenu
  public dishIsOpen: boolean = false;

  constructor(
    private _router: Router,
    private _authService: AuthService,
    private _headerService: HeaderService,
  ) { }

  private _getUser(id: string) {
    this._headerService.getUser(id)
      .pipe(takeUntil(this._destroy$))
      .subscribe((response: IUser) => {
        this.user = response
      })
  }

  private subscribeSignalAuth() {
    this._authService.signalAuth
      .pipe(takeUntil(this._destroy$))
      .subscribe((response: string) => {
        this._getUser(response)
      })
  }

  public openKitchen() {
    this.kitchenIsOpen = !this.kitchenIsOpen
  }

  public openDish() {
    this.dishIsOpen = !this.dishIsOpen
  }

  public checkAuth() {
    const userId: string | null = this._authService.getUserId()

    if (userId) {
      this._getUser(userId)
    }
  }

  public goToSignIn() {
    this._router.navigate(['screens', 'auth', 'sign-in'])
  }

  public goToCabinet() {
    this._router.navigate(['screens', 'cabinet', this.user._id])
  }

  ngOnInit() {
    this.checkAuth()
    this.subscribeSignalAuth()
  }

  ngOnDestroy() {
    this._destroy$.next(null)
    this._destroy$.complete()
  }

}
