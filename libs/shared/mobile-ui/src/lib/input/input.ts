import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { InputCoreComponent } from '@nx-sandbox/core-ui';

@Component({
  selector: 'lib-input',
  standalone: true,
  templateUrl: './input.html',
  imports: [IonicModule],
})
export class InputComponent extends InputCoreComponent {}
// <ion-select label="Default label" placeholder="Favorite Fruit">
//       <ion-select-option value="apple">Apple</ion-select-option>
//       <ion-select-option value="banana">Banana</ion-select-option>
//       <ion-select-option value="orange">Orange</ion-select-option>
//     </ion-select>
