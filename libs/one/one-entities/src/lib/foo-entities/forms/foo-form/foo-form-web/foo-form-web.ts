import { Component } from '@angular/core';
import { FormField } from '@angular/forms/signals';
import { InputComponent } from '@nx-sandbox/web-ui';
import { FooFormCoreComponent } from '../foo-form-core';
@Component({
  selector: 'lib-foo-form-web',
  imports: [FormField, InputComponent],
  templateUrl: './foo-form-web.html',
})
export class FooFormWebComponent extends FooFormCoreComponent {}
