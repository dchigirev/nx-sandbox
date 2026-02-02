import { Component } from '@angular/core';
import { FormField } from '@angular/forms/signals';
import { InputComponent } from '@nx-sandbox/mobile-ui';
import { FooFormCoreComponent } from '../foo-form-core';

@Component({
  selector: 'lib-foo-form-mobile',
  imports: [FormField, InputComponent],
  templateUrl: './foo-form-mobile.html',
})
export class FooFormMobileComponent extends FooFormCoreComponent {}
