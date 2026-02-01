import { Component, model } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';

@Component({
  selector: 'lib-input',
  standalone: true,
  templateUrl: './input.html',
})
export class InputComponent implements FormValueControl<string> {
  /** The current input value */
  value = model('');
}
