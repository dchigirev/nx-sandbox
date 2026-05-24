import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SelectCoreComponent } from '@nx-sandbox/core-ui';

@Component({
  selector: 'lib-select',
  standalone: true,
  templateUrl: './select.html',
  imports: [IonicModule],
})
export class SelectComponent extends SelectCoreComponent {}
