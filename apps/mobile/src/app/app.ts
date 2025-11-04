import { Component } from '@angular/core';
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
  templateUrl: './app.html',
})
export class App {
  count = 0;
}
