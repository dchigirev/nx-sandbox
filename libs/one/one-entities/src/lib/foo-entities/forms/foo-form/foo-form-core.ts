import { Directive, input, signal } from '@angular/core';
import { form } from '@angular/forms/signals';
import { IFoo } from '@nx-sandbox/one-models';
import { IUIOption } from '@nx-sandbox/shared-models';

@Directive()
export class FooFormCoreComponent {
  public readonly value = input<IFoo>();

  public amountOptions: IUIOption[] = [
    { value: '1', label: 'One' },
    { value: '2', label: 'Two' },
    { value: '3', label: 'Three' },
  ];

  fooModel = signal({
    name: '',
    amount: '',
  });

  public fooForm = form(this.fooModel);
}
