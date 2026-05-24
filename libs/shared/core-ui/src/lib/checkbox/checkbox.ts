import { Directive, input, model } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';

@Directive()
export abstract class CheckboxCoreComponent implements FormValueControl<boolean> {
  public value = model(false);
  public label = input<string>('');
  public disabled = input<boolean>(false);
}
