import { Component } from '@angular/core';
import { SelectCoreComponent } from '@nx-sandbox/core-ui';

@Component({
  selector: 'lib-select',
  standalone: true,
  templateUrl: './select.html',
  imports: [],
})
export class SelectComponent extends SelectCoreComponent {}

