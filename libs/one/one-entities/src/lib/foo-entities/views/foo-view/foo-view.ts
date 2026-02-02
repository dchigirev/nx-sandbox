import { Component, input } from '@angular/core';
import { IFoo } from '@nx-sandbox/one-models';

@Component({
  selector: 'lib-foo-view',
  standalone: true,
  templateUrl: './foo-view.html',
})
export class FooViewComponent {
  public readonly value = input.required<IFoo>();
}
