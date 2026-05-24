import { Component } from '@angular/core';
import { InputCoreComponent } from '@nx-sandbox/core-ui';

@Component({
  selector: 'lib-input',
  standalone: true,
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class InputComponent extends InputCoreComponent {}
