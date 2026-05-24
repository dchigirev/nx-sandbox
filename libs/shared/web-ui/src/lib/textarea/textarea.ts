import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component } from '@angular/core';
import { TextareaCoreComponent } from '@nx-sandbox/core-ui';

@Component({
  selector: 'lib-textarea',
  standalone: true,
  templateUrl: './textarea.html',
  imports: [CdkTextareaAutosize],
})
export class TextareaComponent extends TextareaCoreComponent {}
