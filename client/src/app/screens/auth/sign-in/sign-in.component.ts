import {Component, OnDestroy, OnInit} from "@angular/core";
import {linkConfidentiality} from "../core/consts";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {Subject, takeUntil} from "rxjs";
import {Token} from "@angular/compiler";
import {IAccessToken} from "../core/interfaces/IAccessToken";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {

  private destroy$: Subject<any> = new Subject<any>()

  public linkConfidentiality: string = linkConfidentiality
  public showPassword: boolean = false;

  public form!: FormGroup

  constructor(
    private _fb: FormBuilder,
    private _authServer: AuthService,
    private _router: Router
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
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: IAccessToken) => {
        sessionStorage.setItem('moreFood-accessToken', response.access_token)
        this._router.navigate(['screens', 'cabinet', '/123'])
      })
  }

  public toggleShowPassword() {
    this.showPassword = !this.showPassword
  }

  ngOnInit() {
    this._initForm()
  }

  ngOnDestroy() {
    this.destroy$.next(null)
    this.destroy$.complete()
  }

}
