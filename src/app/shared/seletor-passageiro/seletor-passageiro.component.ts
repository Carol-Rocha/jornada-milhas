import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-seletor-passageiro',
  templateUrl: './seletor-passageiro.component.html',
  styleUrls: ['./seletor-passageiro.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SeletorPassageiroComponent),
      multi: true,
    },
  ],
})
export class SeletorPassageiroComponent
  implements OnInit, ControlValueAccessor
{
  @Input() tipoViajante!: string;
  @Input() descricao!: string;

  value: number = 0;

  constructor() {}

  ngOnInit(): void {}

  onChange = (value: number) => {};

  onTouch = () => {};

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    // throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
  }

  incrementar = () => {
    this.value += 1;
    this.onChange(this.value);
    this.onTouch();
  };
  decrementar = () => {
    if (this.value > 0) {
      this.value -= 1;
      this.onChange(this.value);
      this.onTouch();
    }
  };
}
