import { Component, ViewEncapsulation } from '@angular/core';
import { Button, SelectComponent } from '@nx-sandbox/web-ui';

@Component({
  selector: 'app-nx-welcome',
  imports: [Button, SelectComponent],
  templateUrl: './nx-welcome.template.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcome {}
