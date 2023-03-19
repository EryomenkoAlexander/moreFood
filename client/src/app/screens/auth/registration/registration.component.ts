import {Component, OnDestroy, OnInit} from "@angular/core";
import {linkConfidentiality} from "../core/consts";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {matchOtherValidator} from "../core/validators/match-other-validator";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, OnDestroy {

  private destroy$: Subject<any> = new Subject<any>()

  public linkConfidentiality: string = linkConfidentiality
  public showPassword: boolean = false;
  public showConfirmPassword: boolean = false;
  public wastePhoneNumber = [' ', '(', ')']
  public maskPhoneNumber = '+0 (000) 000 00 00'

  public form!: FormGroup

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) { }

  private _initForm() {
    this.form = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required, matchOtherValidator('password')]]
    })
  }

  public toggleShowPassword() {
    this.showPassword = !this.showPassword
  }

  public toggleConfirmShowPassword() {
    this.showConfirmPassword = !this.showConfirmPassword
  }

  public onSubmit() {
    const data = this.form?.value

    this._authService.register(data)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this._router.navigate(['screens', 'cabinet'])
      })
  }

  ngOnInit() {
    this._initForm()
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

}
