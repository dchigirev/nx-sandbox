import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-web-ui',
  imports: [],
  templateUrl: './web-ui.html',
  styleUrl: './web-ui.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebUi {}
