import {Component, EventEmitter, forwardRef, Input, Output} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    }
  ],

})
export class InputComponent implements ControlValueAccessor{

  public value: unknown = null

  @Input() label: string = ''
  @Input() width: string = '100%'
  @Input() type: string = 'text'
  @Input() placeholder: string = ''
  @Input() iconData: string = ''
  @Input() mask: string = ''
  @Input() iconPosition: string = '' // before || after

  @Output() onClickIcon: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() {}

  public clickIcon() {
    this.onClickIcon.emit(true)
  }

  public setValue(e: any) {
    const {value} = e.target

    if (this.type === 'number') {
      this.value = +value
    } else {
      this.value = value
    }

    this.onChange(this.value)
  }

  private onChange(v: any) {}
  private onTouched(v: any) {}

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  writeValue(obj: any): void {
    this.value = obj
  }

}
