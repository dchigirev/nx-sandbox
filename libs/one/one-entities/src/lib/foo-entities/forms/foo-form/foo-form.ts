import { Component, input } from '@angular/core';
import { IFoo } from '@nx-sandbox/one-models';

@Component({
  selector: 'lib-foo-form',
  standalone: true,
  templateUrl: './foo-form.html',
})
export class FooFormComponent {
  public readonly value = input.required<IFoo>();
}
