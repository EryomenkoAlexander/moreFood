import {Component, OnInit} from "@angular/core";
import {linkConfidentiality} from "../core/consts";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {matchOtherValidator} from "../core/validators/match-other-validator";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public linkConfidentiality: string = linkConfidentiality
  public showPassword: boolean = false;
  public showConfirmPassword: boolean = false;
  public wastePhoneNumber = [' ', '(', ')']
  public maskPhoneNumber = '+0 (000) 000 00 00'

  public form!: FormGroup

  constructor(
    private _fb: FormBuilder
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
    console.log(data)
  }

  ngOnInit() {
    this._initForm()
  }

}
