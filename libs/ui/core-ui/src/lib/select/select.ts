import { Directive, input, model } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';
import { IUIOption } from '../_models/index.js';

@Directive()
export abstract class SelectCoreComponent implements FormValueControl<string> {
  public value = model('');
  public label = input<string>('Select Label');
  public placeholder = input<string>('Select Placeholder');

  public readonly options = input.required<IUIOption[]>();

}
