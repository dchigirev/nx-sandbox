import { Component, ViewEncapsulation } from '@angular/core';
import { Button, InputComponent } from '@nx-sandbox/web-ui';
import { FooViewComponent, FooFormWebComponent } from '@nx-sandbox/one-entities';
import { fooMock, IFoo } from '@nx-sandbox/one-models';

@Component({
  selector: 'app-nx-welcome',
  imports: [Button, InputComponent, FooViewComponent, FooFormWebComponent],
  templateUrl: './nx-welcome.template.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcome {
  public readonly fooValue: IFoo = fooMock;
}
