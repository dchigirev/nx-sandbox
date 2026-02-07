import { Directive, input, model } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';

@Directive()
export abstract class InputCoreComponent implements FormValueControl<string> {
  public value = model('');
  public label = input<string>('Input Label');
  public placeholder = input<string>('Input Placeholder');

  constructor() {
    console.log('constructor: Input Core Component');
  }
}
