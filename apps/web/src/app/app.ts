import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { Button } from '@nx-sandbox/ui';
@Component({
  imports: [NxWelcome, RouterModule, Button],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'web';
  public readonly buttonParams = { label: 'MyAppButton' };
}
