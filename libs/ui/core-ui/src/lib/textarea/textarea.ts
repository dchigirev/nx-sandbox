import { Directive, input, model } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';

@Directive()
export abstract class TextareaCoreComponent implements FormValueControl<string> {
  public value = model('');
  public label = input<string>('');
  public placeholder = input<string>('');
  public rows = input<number>(3);
}
