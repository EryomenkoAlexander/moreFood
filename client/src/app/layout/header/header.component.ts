import {Component} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public form: FormGroup = new FormGroup({
    title: new FormControl('')
  })

  constructor() {
  }

  public onSubmit() {
    console.log(this.form.value)
  }

}
