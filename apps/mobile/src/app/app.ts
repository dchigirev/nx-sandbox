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
import { FooViewComponent } from '@nx-sandbox/one-entities';
import { fooMock, IFoo } from '@nx-sandbox/one-models';

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
    FooViewComponent,
  ],
  templateUrl: './app.html',
})
export class App {
  count = 0;
  public readonly fooValue: IFoo = fooMock;
}
