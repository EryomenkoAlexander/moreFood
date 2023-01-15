import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {

  @Input() text: string = ''
  @Input() color: string = '#f3b949'
  @Input() size: string = 'sm' || 'md' || 'lg';

  constructor() {}

}

