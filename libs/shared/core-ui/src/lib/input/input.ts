import { Directive, model } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';


@Directive()
export abstract class InputCoreComponent implements FormValueControl<string> {
  value = model('');
  constructor() {
    console.log('constructor: Input Core Component');
  }
}
