import { Directive, input, signal } from '@angular/core';
import { form } from '@angular/forms/signals';
import { IFoo } from '@nx-sandbox/one-models';

@Directive()
export class FooFormCoreComponent {
  public readonly value = input<IFoo>();

  fooModel = signal({
    name: '',
    amount: '',
  });

  public fooForm = form(this.fooModel);
}
