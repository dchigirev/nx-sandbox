import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { InputCoreComponent } from '@nx-sandbox/core-ui';

@Component({
  selector: 'lib-input',
  standalone: true,
  templateUrl: './input.html',
  imports: [IonicModule],
})
export class InputComponent extends InputCoreComponent {

}
