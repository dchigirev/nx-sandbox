import { Component } from '@angular/core';
import { CheckboxCoreComponent } from '@nx-sandbox/core-ui';

@Component({
  selector: 'lib-checkbox',
  standalone: true,
  templateUrl: './checkbox.html',
})
export class CheckboxComponent extends CheckboxCoreComponent {}
