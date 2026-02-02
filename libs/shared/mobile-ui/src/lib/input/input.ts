import { Component, model } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'lib-input',
  standalone: true,
  templateUrl: './input.html',
  imports: [IonicModule]
})
export class InputComponent implements FormValueControl<string> {
  /** The current input value */
  value = model('');
}
