import { Component, input } from '@angular/core';

export interface IButtonParams {
  label: string;
}

@Component({
  selector: 'lib-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  public readonly params = input.required<IButtonParams>();
}
