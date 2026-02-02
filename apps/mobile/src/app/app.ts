import { Component } from '@angular/core';
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from '@ionic/angular/standalone';
import { InputComponent } from '@nx-sandbox/mobile-ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    IonApp,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    InputComponent,
  ],
  templateUrl: './app.html',
})
export class App {
  count = 0;
}
