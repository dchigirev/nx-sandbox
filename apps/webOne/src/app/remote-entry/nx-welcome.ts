import { Component, ViewEncapsulation } from '@angular/core';
import {Button} from '@nx-sandbox/web-ui';

@Component({
  selector: 'app-nx-welcome',
  imports: [Button],
  templateUrl: './nx-welcome.template.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcome {}
