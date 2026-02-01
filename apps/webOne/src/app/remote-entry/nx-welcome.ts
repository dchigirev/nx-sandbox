import { Component, ViewEncapsulation } from '@angular/core';
import { Button, InputComponent } from '@nx-sandbox/web-ui';

@Component({
  selector: 'app-nx-welcome',
  imports: [Button, InputComponent],
  templateUrl: './nx-welcome.template.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcome {}
