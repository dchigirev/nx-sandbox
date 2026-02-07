import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
// import {
//   IonApp,
//   IonHeader,
//   IonToolbar,
//   IonTitle,
//   IonContent,
//   IonButton,
//   IonInput,
// } from '@ionic/angular/standalone';
import { InputComponent } from '@nx-sandbox/mobile-ui';
import { FooViewComponent, FooFormMobileComponent } from '@nx-sandbox/one-entities';
import { fooMock, IFoo } from '@nx-sandbox/one-models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    IonicModule,
    InputComponent,
    FooViewComponent,
    FooFormMobileComponent,
  ],
  templateUrl: './app.html',
})
export class App {
  count = 0;
  public readonly fooValue: IFoo = fooMock;
}
