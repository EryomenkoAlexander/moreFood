import {Component, OnDestroy, OnInit} from "@angular/core";
import {linkConfidentiality} from "../core/consts";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Subject, takeUntil} from "rxjs";
import {ILoginResponse} from "../core/interfaces/ILoginResponse";
import {AuthService} from "../../../auth/services/auth.service";
import {SnackbarService} from "../../../shared/snackbar/core/snackbar.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {

  private _destroy$: Subject<any> = new Subject<any>()

  public linkConfidentiality: string = linkConfidentiality
  public showPassword: boolean = false;

  public form!: FormGroup

  constructor(
    private _fb: FormBuilder,
    private _authServer: AuthService,
    private _router: Router,
    private _snackbarService: SnackbarService
  ) { }

  private _initForm() {
    this.form = this._fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    })
  }

  public onSubmit() {
    const data = this.form.value

    this._authServer.signIn(data)
      .pipe(takeUntil(this._destroy$))
      .subscribe((response: ILoginResponse) => {
        this._snackbarService.success('Вход успешно выполнен')
        localStorage.setItem('moreFood-accessToken', response.access_token)
        localStorage.setItem('moreFood-userId', response._id)
        this._router.navigate(['screens', 'cabinet', response._id])
      }, ({error}) => {
        this._snackbarService.error(error.message)
      })
  }

  public toggleShowPassword() {
    this.showPassword = !this.showPassword
  }

  ngOnInit() {
    this._initForm()
  }

  ngOnDestroy() {
    this._destroy$.next(null)
    this._destroy$.complete()
  }

}
